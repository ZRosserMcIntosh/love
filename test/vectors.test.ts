/**
 * Exact test vectors V1–V12 from research/fable5-review/11_IMPLEMENTATION_SPEC.md §4.
 *
 * These pin current behavior, including two documented defects (D2, D7) whose
 * assertions are labeled so that fixing the defect intentionally breaks the pin.
 */
import assert from 'node:assert/strict';
import test from 'node:test';

import {
  attributedAllocatedEnergy,
  attributedInducedEnergy,
  averagePowerWatts,
  electricalEnergyFromPower,
  equivalentProjectCount,
  joulesToKilocalories,
  joulesToKilowattHours,
  joulesToTonsTnt,
  kilocaloriesToJoules,
  kilowattHoursToJoules,
  metabolicEnergyFromMets,
  referenceYieldFraction,
  summarizeEnergyLedger,
  tonsTntToJoules,
  validateEnergyLedger,
} from '../src/index.ts';
import type { EnergyFlow } from '../src/index.ts';

function approx(actual: number, expected: number, rel = 1e-12): void {
  assert.ok(
    Math.abs(actual - expected) <= rel * Math.max(1, Math.abs(expected)),
    'Expected ' + actual + ' ~= ' + expected,
  );
}

test('V1: unit conversions and round trips', () => {
  assert.equal(kilocaloriesToJoules(500), 2_092_000);
  assert.equal(kilowattHoursToJoules(0.1), 360_000);
  assert.equal(tonsTntToJoules(15_000), 6.276e13);
  approx(joulesToKilocalories(kilocaloriesToJoules(123.456)), 123.456);
  approx(joulesToKilowattHours(kilowattHoursToJoules(0.789)), 0.789);
  approx(joulesToTonsTnt(tonsTntToJoules(2.5)), 2.5);
});

test('V2: zero duration', () => {
  assert.equal(
    metabolicEnergyFromMets({ massKg: 70, durationHours: 0, mets: 1.3 }),
    0,
  );
  assert.equal(electricalEnergyFromPower(50, 0), 0);
  assert.throws(() => averagePowerWatts(1_000, 0), RangeError);
});

test('V3: zero attribution', () => {
  assert.equal(attributedAllocatedEnergy(1_000_000, 0), 0);
  assert.equal(attributedInducedEnergy(1_000_000, 400_000, 0), 0);
});

test('V4: full attribution', () => {
  assert.equal(attributedAllocatedEnergy(1_000_000, 1), 1_000_000);
  assert.equal(attributedInducedEnergy(1_000_000, 400_000, 1), 600_000);
});

test('V5: negative induced energy, preserved through ledger totals', () => {
  assert.equal(attributedInducedEnergy(600, 1_000, 0.8), -320);
  const flows: EnergyFlow[] = [
    {
      id: 'saving',
      label: 'Commitment chose the lower-energy world',
      boundary: 'operational',
      actualJoules: 600,
      counterfactualJoules: 1_000,
      causalAttribution: 0.8,
    },
  ];
  assert.equal(summarizeEnergyLedger(flows).inducedJoules, -320);
});

test('V6: identical actual and counterfactual energy', () => {
  for (const a of [0, 0.5, 1]) {
    assert.equal(attributedInducedEnergy(1_211_207_040, 1_211_207_040, a), 0);
  }
});

test('V7: parent-child double-counting exclusion (and defect D2 pin)', () => {
  const flows: EnergyFlow[] = [
    {
      id: 'body',
      label: 'Whole body',
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
  approx(summary.inducedJoules, 578_586_240);
  assert.deepEqual(summary.informationalFlowIds, ['brain']);

  // Defect D2 (documented, not endorsed): a child exceeding its parent is
  // currently accepted. assertFlowConservation (spec 07 B7) must break this pin.
  const impossible: EnergyFlow[] = [
    { ...flows[0] },
    { ...flows[1], actualJoules: 900_000_000, counterfactualJoules: 0 },
  ];
  assert.doesNotThrow(() => validateEnergyLedger(impossible));
});

test('V8: cyclic and malformed hierarchies throw', () => {
  const cycle: EnergyFlow[] = [
    {
      id: 'a',
      label: 'A',
      boundary: 'body',
      actualJoules: 1,
      counterfactualJoules: 0,
      causalAttribution: 1,
      parentFlowId: 'b',
    },
    {
      id: 'b',
      label: 'B',
      boundary: 'body',
      actualJoules: 1,
      counterfactualJoules: 0,
      causalAttribution: 1,
      parentFlowId: 'a',
    },
  ];
  assert.throws(() => validateEnergyLedger(cycle), /cycle/);

  const selfParent: EnergyFlow[] = [
    {
      id: 'x',
      label: 'X',
      boundary: 'body',
      actualJoules: 1,
      counterfactualJoules: 0,
      causalAttribution: 1,
      parentFlowId: 'x',
    },
  ];
  assert.throws(() => validateEnergyLedger(selfParent), /own parent/);

  const orphan: EnergyFlow[] = [
    {
      id: 'y',
      label: 'Y',
      boundary: 'body',
      actualJoules: 1,
      counterfactualJoules: 0,
      causalAttribution: 1,
      parentFlowId: 'ghost',
    },
  ];
  assert.throws(() => validateEnergyLedger(orphan), /Unknown parent/);
});

test('V9: multiple independent roots sum; empty ledger is all zeros', () => {
  const flows: EnergyFlow[] = [
    {
      id: 'r1',
      label: 'Root 1',
      boundary: 'body',
      actualJoules: 100,
      counterfactualJoules: 40,
      causalAttribution: 1,
    },
    {
      id: 'r2',
      label: 'Root 2',
      boundary: 'operational',
      actualJoules: 200,
      counterfactualJoules: 0,
      causalAttribution: 0.5,
    },
    {
      id: 'r3',
      label: 'Root 3',
      boundary: 'embodied',
      actualJoules: 50,
      counterfactualJoules: 50,
      causalAttribution: 1,
    },
    {
      id: 'r2-part',
      label: 'Subdivision of root 2',
      boundary: 'operational',
      actualJoules: 80,
      counterfactualJoules: 0,
      causalAttribution: 0.5,
      parentFlowId: 'r2',
    },
  ];
  const summary = summarizeEnergyLedger(flows);
  assert.equal(summary.actualJoules, 350);
  assert.equal(summary.counterfactualJoules, 90);
  approx(summary.inducedJoules, 0.5 * 200 + 1 * 60 + 0);
  assert.deepEqual(summary.countedFlowIds, ['r1', 'r2', 'r3']);

  const empty = summarizeEnergyLedger([]);
  assert.equal(empty.actualJoules, 0);
  assert.equal(empty.inducedJoules, 0);
  assert.deepEqual(empty.countedFlowIds, []);
});

test('V10: first-order uncertainty vector (spec reference for function B1)', () => {
  const a = 0.7;
  const ea = 1.2112e9;
  const ec = 6.326e8;
  const varA = 0.15 ** 2;
  const varEa = (0.05 * ea) ** 2;
  const varEc = (0.15 * ec) ** 2;
  const delta = a * (ea - ec);
  const variance = (ea - ec) ** 2 * varA + a * a * varEa + a * a * varEc;
  assert.equal(delta, 405_020_000);
  approx(variance, 1.3741600693e16, 1e-9);
  approx(Math.sqrt(variance), 117_224_573.75908859, 1e-9);
});

test('V11: nominal 15-kiloton reference comparisons', () => {
  const project = 1_211_207_040;
  const reference = tonsTntToJoules(15_000);
  approx(referenceYieldFraction(project, reference), 1.929902868068834e-5, 1e-12);
  approx(equivalentProjectCount(reference, project), 51_816.07927245866, 1e-12);
  approx(averagePowerWatts(project, 2_160), 155.76222222222222, 1e-12);
});

test('V12: counterfactual sensitivity grid (scenario family of 03 §5)', () => {
  const massKg = 70;
  const hours = 2_160;
  const bodyActual = metabolicEnergyFromMets({ massKg, durationHours: hours, mets: 1.3 });
  const computerActual = electricalEnergyFromPower(50, hours);
  const ea = bodyActual + computerActual;
  assert.equal(ea, 1_211_207_040);

  const scenarios = [
    {
      label: 'quiet rest, devices off',
      ec: metabolicEnergyFromMets({ massKg, durationHours: hours, mets: 1.0 }),
      expected: 578_586_240,
    },
    {
      label: 'television leisure (1.3 MET, 100 W set)',
      ec: bodyActual + electricalEnergyFromPower(100, hours),
      expected: -388_800_000,
    },
    {
      label: 'same project for money',
      ec: ea,
      expected: 0,
    },
    {
      label: 'different paid work (1.5 MET, no home computer)',
      ec: metabolicEnergyFromMets({ massKg, durationHours: hours, mets: 1.5 }),
      expected: 262_275_840,
    },
  ];

  for (const s of scenarios) {
    approx(attributedInducedEnergy(ea, s.ec, 1), s.expected, 1e-9);
    // Sensitivity-surface partial derivatives (03 §5):
    // dDelta/da = ea - ec, checked as the induced difference across a=1 vs a=0;
    // dDelta/dEc = -a, checked by finite difference in ec.
    const a = 0.6;
    const bump = 1_000;
    const dDeltaDEc =
      (attributedInducedEnergy(ea, s.ec + bump, a) -
        attributedInducedEnergy(ea, s.ec, a)) /
      bump;
    approx(dDeltaDEc, -a, 1e-6);
    approx(
      attributedInducedEnergy(ea, s.ec, 1) - attributedInducedEnergy(ea, s.ec, 0),
      ea - s.ec,
      1e-9,
    );
  }
});
