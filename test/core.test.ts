import assert from 'node:assert/strict';
import test from 'node:test';

import {
  attributedAllocatedEnergy,
  attributedInducedEnergy,
  averagePowerWatts,
  electricalEnergyFromPower,
  equivalentProjectCount,
  joulesToTonsTnt,
  kilocaloriesToJoules,
  kilowattHoursToJoules,
  metabolicEnergyFromMets,
  incrementalMetabolicEnergyFromMets,
  summarizeEnergyLedger,
  tonsTntToJoules,
} from '../src/index.ts';
import type { EnergyFlow } from '../src/index.ts';

function approximatelyEqual(
  actual: number,
  expected: number,
  tolerance = 1e-9,
): void {
  assert.ok(
    Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    'Expected ' + actual + ' to approximately equal ' + expected,
  );
}

test('uses exact energy conversions', () => {
  assert.equal(kilocaloriesToJoules(1), 4_184);
  assert.equal(kilowattHoursToJoules(1), 3_600_000);
  assert.equal(tonsTntToJoules(1), 4_184_000_000);
  assert.equal(joulesToTonsTnt(4_184_000_000), 1);
});

test('reproduces the six-month metabolic example', () => {
  const durationHours = 180 * 12;

  assert.equal(
    metabolicEnergyFromMets({
      massKg: 70,
      durationHours,
      mets: 1.3,
    }),
    822_407_040,
  );

  approximatelyEqual(
    incrementalMetabolicEnergyFromMets({
      massKg: 70,
      durationHours,
      actualMets: 1.3,
      counterfactualMets: 1,
    }),
    189_786_240,
  );

  assert.equal(
    electricalEnergyFromPower(50, durationHours),
    388_800_000,
  );
});

test('distinguishes allocated and induced energy', () => {
  assert.equal(attributedAllocatedEnergy(1_000, 0.8), 800);
  assert.equal(attributedInducedEnergy(1_000, 600, 0.8), 320);
  assert.equal(attributedInducedEnergy(600, 1_000, 0.8), -320);
});

test('excludes informational child flows from ledger totals', () => {
  const flows: EnergyFlow[] = [
    {
      id: 'body',
      label: 'Body',
      boundary: 'body',
      actualJoules: 822_407_040,
      counterfactualJoules: 632_620_800,
      causalAttribution: 1,
    },
    {
      id: 'brain',
      label: 'Brain subdivision',
      boundary: 'body',
      actualJoules: 155_520_000,
      counterfactualJoules: 155_520_000,
      causalAttribution: 1,
      parentFlowId: 'body',
    },
    {
      id: 'computer',
      label: 'Computer',
      boundary: 'operational',
      actualJoules: 388_800_000,
      counterfactualJoules: 0,
      causalAttribution: 1,
    },
  ];

  const summary = summarizeEnergyLedger(flows);
  assert.equal(summary.actualJoules, 1_211_207_040);
  approximatelyEqual(summary.inducedJoules, 578_586_240);
  assert.deepEqual(summary.countedFlowIds, ['body', 'computer']);
  assert.deepEqual(summary.informationalFlowIds, ['brain']);
});

test('calculates power and reference equivalence', () => {
  const projectEnergy = 1_211_207_040;
  const referenceEnergy = tonsTntToJoules(15_000);

  approximatelyEqual(
    averagePowerWatts(projectEnergy, 2_160),
    155.76222222222222,
  );
  approximatelyEqual(
    equivalentProjectCount(referenceEnergy, projectEnergy),
    51_816.07927245866,
  );
});

test('rejects invalid causal coefficients and duplicate flows', () => {
  assert.throws(() => attributedAllocatedEnergy(1_000, 1.01), RangeError);

  const duplicated: EnergyFlow[] = [
    {
      id: 'same',
      label: 'One',
      boundary: 'body',
      actualJoules: 1,
      counterfactualJoules: 0,
      causalAttribution: 1,
    },
    {
      id: 'same',
      label: 'Two',
      boundary: 'operational',
      actualJoules: 1,
      counterfactualJoules: 0,
      causalAttribution: 1,
    },
  ];

  assert.throws(() => summarizeEnergyLedger(duplicated), /Duplicate/);
});
