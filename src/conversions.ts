import {
  JOULES_PER_KILOCALORIE,
  JOULES_PER_KILOWATT_HOUR,
  JOULES_PER_TON_TNT,
} from './constants.ts';
import { assertNonnegative } from './validation.ts';

export function kilocaloriesToJoules(kilocalories: number): number {
  assertNonnegative('kilocalories', kilocalories);
  return kilocalories * JOULES_PER_KILOCALORIE;
}

export function joulesToKilocalories(joules: number): number {
  assertNonnegative('joules', joules);
  return joules / JOULES_PER_KILOCALORIE;
}

export function kilowattHoursToJoules(kilowattHours: number): number {
  assertNonnegative('kilowattHours', kilowattHours);
  return kilowattHours * JOULES_PER_KILOWATT_HOUR;
}

export function joulesToKilowattHours(joules: number): number {
  assertNonnegative('joules', joules);
  return joules / JOULES_PER_KILOWATT_HOUR;
}

export function tonsTntToJoules(tonsTnt: number): number {
  assertNonnegative('tonsTnt', tonsTnt);
  return tonsTnt * JOULES_PER_TON_TNT;
}

export function joulesToTonsTnt(joules: number): number {
  assertNonnegative('joules', joules);
  return joules / JOULES_PER_TON_TNT;
}
