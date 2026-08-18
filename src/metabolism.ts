import {
  JOULES_PER_KILOCALORIE,
  SECONDS_PER_HOUR,
} from './constants.ts';
import type {
  IncrementalMetabolicEnergyInput,
  MetabolicEnergyInput,
} from './types.ts';
import { assertNonnegative } from './validation.ts';

/**
 * Illustrative MET calculation using the conventional approximation
 * 1 MET = 1 kcal / (kg * hour).
 *
 * It is suitable for population-level examples, not precision measurement of
 * an individual. Individual work should use measured resting metabolism and
 * indirect calorimetry or another validated method.
 */
export function metabolicEnergyFromMets({
  massKg,
  durationHours,
  mets,
}: MetabolicEnergyInput): number {
  assertNonnegative('massKg', massKg);
  assertNonnegative('durationHours', durationHours);
  assertNonnegative('mets', mets);

  return mets * massKg * durationHours * JOULES_PER_KILOCALORIE;
}

/**
 * Signed additional metabolic energy relative to an explicit alternative.
 *
 * A negative result is valid: it means the actual action used less metabolic
 * energy than the counterfactual.
 */
export function incrementalMetabolicEnergyFromMets({
  massKg,
  durationHours,
  actualMets,
  counterfactualMets,
}: IncrementalMetabolicEnergyInput): number {
  assertNonnegative('massKg', massKg);
  assertNonnegative('durationHours', durationHours);
  assertNonnegative('actualMets', actualMets);
  assertNonnegative('counterfactualMets', counterfactualMets);

  return (
    (actualMets - counterfactualMets) *
    massKg *
    durationHours *
    JOULES_PER_KILOCALORIE
  );
}

export function electricalEnergyFromPower(
  watts: number,
  durationHours: number,
): number {
  assertNonnegative('watts', watts);
  assertNonnegative('durationHours', durationHours);
  return watts * durationHours * SECONDS_PER_HOUR;
}
