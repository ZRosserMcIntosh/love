import {
  averagePowerWatts,
  electricalEnergyFromPower,
  equivalentProjectCount,
  joulesToTonsTnt,
  metabolicEnergyFromMets,
  summarizeEnergyLedger,
  tonsTntToJoules,
} from '../src/index.ts';
import type { EnergyFlow } from '../src/index.ts';

const massKg = 70;
const days = 180;
const workHoursPerDay = 12;
const durationHours = days * workHoursPerDay;
const workMets = 1.3;
const restMets = 1.0;
const computerWatts = 50;

const bodyActual = metabolicEnergyFromMets({
  massKg,
  durationHours,
  mets: workMets,
});
const bodyCounterfactual = metabolicEnergyFromMets({
  massKg,
  durationHours,
  mets: restMets,
});
const computerActual = electricalEnergyFromPower(
  computerWatts,
  durationHours,
);

const flows: EnergyFlow[] = [
  {
    id: 'body',
    label: 'Whole-body metabolism during work',
    boundary: 'body',
    actualJoules: bodyActual,
    counterfactualJoules: bodyCounterfactual,
    causalAttribution: 1,
  },
  {
    id: 'brain',
    label: 'Informational subdivision of whole-body metabolism',
    boundary: 'body',
    actualJoules: 20 * durationHours * 3_600,
    counterfactualJoules: 20 * durationHours * 3_600,
    causalAttribution: 1,
    parentFlowId: 'body',
    notes: 'Shown for explanation only; already contained in whole-body energy.',
  },
  {
    id: 'computer',
    label: 'Computer electricity',
    boundary: 'operational',
    actualJoules: computerActual,
    counterfactualJoules: 0,
    causalAttribution: 1,
  },
];

const summary = summarizeEnergyLedger(flows);
const referenceEnergy = tonsTntToJoules(15_000);

console.log(
  JSON.stringify(
    {
      assumptions: {
        massKg,
        days,
        workHoursPerDay,
        durationHours,
        workMets,
        restMets,
        computerWatts,
      },
      summary,
      allocatedTonsTnt: joulesToTonsTnt(summary.allocatedJoules),
      inducedTonsTnt: joulesToTonsTnt(summary.inducedJoules),
      allocatedAveragePowerWatts: averagePowerWatts(
        summary.allocatedJoules,
        durationHours,
      ),
      projectsPerNominal15KtReference: equivalentProjectCount(
        referenceEnergy,
        summary.allocatedJoules,
      ),
    },
    null,
    2,
  ),
);
