import { SECONDS_PER_HOUR } from './constants.ts';
import type { EnergyFlow, EnergyLedgerSummary } from './types.ts';
import {
  assertFinite,
  assertNonnegative,
  assertPositive,
  assertUnitInterval,
} from './validation.ts';

export function attributedAllocatedEnergy(
  actualJoules: number,
  causalAttribution: number,
): number {
  assertNonnegative('actualJoules', actualJoules);
  assertUnitInterval('causalAttribution', causalAttribution);
  return causalAttribution * actualJoules;
}

export function attributedInducedEnergy(
  actualJoules: number,
  counterfactualJoules: number,
  causalAttribution: number,
): number {
  assertNonnegative('actualJoules', actualJoules);
  assertNonnegative('counterfactualJoules', counterfactualJoules);
  assertUnitInterval('causalAttribution', causalAttribution);
  return causalAttribution * (actualJoules - counterfactualJoules);
}

export function averagePowerWatts(
  energyJoules: number,
  durationHours: number,
): number {
  assertFinite('energyJoules', energyJoules);
  assertPositive('durationHours', durationHours);
  return energyJoules / (durationHours * SECONDS_PER_HOUR);
}

export function referenceYieldFraction(
  energyJoules: number,
  referenceEnergyJoules: number,
): number {
  assertNonnegative('energyJoules', energyJoules);
  assertPositive('referenceEnergyJoules', referenceEnergyJoules);
  return energyJoules / referenceEnergyJoules;
}

export function equivalentProjectCount(
  referenceEnergyJoules: number,
  projectEnergyJoules: number,
): number {
  assertNonnegative('referenceEnergyJoules', referenceEnergyJoules);
  assertPositive('projectEnergyJoules', projectEnergyJoules);
  return referenceEnergyJoules / projectEnergyJoules;
}

export function downstreamEnergyGain(
  downstreamJoules: number,
  initiatingJoules: number,
): number {
  assertNonnegative('downstreamJoules', downstreamJoules);
  assertPositive('initiatingJoules', initiatingJoules);
  return downstreamJoules / initiatingJoules;
}

export function validateEnergyLedger(flows: readonly EnergyFlow[]): void {
  const ids = new Set<string>();

  for (const flow of flows) {
    if (!flow.id.trim()) {
      throw new Error('Every energy flow requires a non-empty id.');
    }
    if (ids.has(flow.id)) {
      throw new Error('Duplicate energy flow id: ' + flow.id);
    }
    ids.add(flow.id);
    assertNonnegative(flow.id + '.actualJoules', flow.actualJoules);
    assertNonnegative(
      flow.id + '.counterfactualJoules',
      flow.counterfactualJoules,
    );
    assertUnitInterval(
      flow.id + '.causalAttribution',
      flow.causalAttribution,
    );
  }

  const parentById = new Map<string, string>();
  for (const flow of flows) {
    if (!flow.parentFlowId) {
      continue;
    }
    if (!ids.has(flow.parentFlowId)) {
      throw new Error(
        'Unknown parent flow ' + flow.parentFlowId + ' for ' + flow.id,
      );
    }
    if (flow.parentFlowId === flow.id) {
      throw new Error('An energy flow cannot be its own parent: ' + flow.id);
    }
    parentById.set(flow.id, flow.parentFlowId);
  }

  for (const flow of flows) {
    const visited = new Set<string>();
    let cursor: string | undefined = flow.id;
    while (cursor) {
      if (visited.has(cursor)) {
        throw new Error('Energy-flow parent cycle detected at: ' + cursor);
      }
      visited.add(cursor);
      cursor = parentById.get(cursor);
    }
  }
}

/**
 * Totals root flows only. A child flow is interpreted as a diagnostic
 * subdivision already included in its parent and therefore cannot be added
 * independently without double counting.
 */
export function summarizeEnergyLedger(
  flows: readonly EnergyFlow[],
): EnergyLedgerSummary {
  validateEnergyLedger(flows);

  const roots = flows.filter((flow) => !flow.parentFlowId);
  const children = flows.filter((flow) => Boolean(flow.parentFlowId));

  return roots.reduce<EnergyLedgerSummary>(
    (summary, flow) => {
      summary.countedFlowIds.push(flow.id);
      summary.actualJoules += flow.actualJoules;
      summary.counterfactualJoules += flow.counterfactualJoules;
      summary.allocatedJoules += attributedAllocatedEnergy(
        flow.actualJoules,
        flow.causalAttribution,
      );
      summary.inducedJoules += attributedInducedEnergy(
        flow.actualJoules,
        flow.counterfactualJoules,
        flow.causalAttribution,
      );
      summary.unattributedActualJoules +=
        (1 - flow.causalAttribution) * flow.actualJoules;
      return summary;
    },
    {
      countedFlowIds: [],
      informationalFlowIds: children.map((flow) => flow.id),
      actualJoules: 0,
      counterfactualJoules: 0,
      allocatedJoules: 0,
      inducedJoules: 0,
      unattributedActualJoules: 0,
    },
  );
}
