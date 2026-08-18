export function assertFinite(name: string, value: number): void {
  if (!Number.isFinite(value)) {
    throw new RangeError(name + ' must be a finite number.');
  }
}

export function assertNonnegative(name: string, value: number): void {
  assertFinite(name, value);
  if (value < 0) {
    throw new RangeError(name + ' must be greater than or equal to zero.');
  }
}

export function assertPositive(name: string, value: number): void {
  assertFinite(name, value);
  if (value <= 0) {
    throw new RangeError(name + ' must be greater than zero.');
  }
}

export function assertUnitInterval(name: string, value: number): void {
  assertFinite(name, value);
  if (value < 0 || value > 1) {
    throw new RangeError(name + ' must be between zero and one inclusive.');
  }
}
