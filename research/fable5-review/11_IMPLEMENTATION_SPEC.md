# 11 — Implementation specification

Code review of the TypeScript core (mandate §XVIII), exact test vectors, numeric
representation ruling, and the API changes required by files 03–07. Companion
runnable artifact: `test/vectors.test.ts` (added by this review; all vectors pass
against the current core, with defect-documenting assertions labeled).

## 1. What the current code gets right

- Exact integer conversion constants; no dependencies; deterministic.
- Signed induced energy preserved (negative results flow through correctly).
- Validation rejects NaN, ±Infinity, negatives, and out-of-range attribution, with
  named-parameter error messages.
- Duplicate-id, unknown-parent, self-parent, and cycle detection in the ledger all
  work (verified by vectors V8).
- Parent/child exclusion prevents the brain-in-body double count exactly as
  documented (V7).
- The `unattributedActualJoules` column is honest bookkeeping most frameworks would
  have omitted.

## 2. Defects and gaps (ranked)

| ID | Severity | Finding | Fix |
|---|---|---|---|
| **D1** | **High (semantic)** | **Scenario incoherence is representable and silently summed.** Each `EnergyFlow` carries its own `counterfactualJoules` with no requirement that all flows describe one alternative world; the example itself mixes "resting body" with "computer off" (defensible) but nothing stops "resting body" + "TV on" + "same-project-for-money" in one summary — a total belonging to no possible world (03 §2 DC mode ii). | Add `CounterfactualScenario` object; flows reference `scenarioId`; `summarizeEnergyLedger` takes the scenario and enforces membership (07 B6). Breaking schema change — do it before any data exists. |
| **D2** | High (semantic) | No conservation check: a child subdivision may exceed its parent (brain 900 MJ under body 822 MJ passes silently). V-doc test documents current permissiveness. | `assertFlowConservation` (07 B7) called inside `validateEnergyLedger`. |
| **D3** | High (missing) | No uncertainty representation anywhere; every output is a bare number, violating A8 and 05 §8. | Add `Interval {lower, upper}` and sample-array support (07 B1–B3); `EnergyFlow.causalAttribution` becomes `number \| Interval` (point = degenerate interval). |
| **D4** | Medium (API) | Inconsistent parameter style: `metabolism.ts` uses named-object inputs; `agapodynamics.ts` uses positional numbers — `attributedInducedEnergy(1000, 600, 0.8)` invites silent actual/counterfactual swaps (sign flips, not errors). | Object parameters everywhere; deprecate positional overloads. |
| **D5** | Medium (API) | `equivalentProjectCount(referenceEnergyJoules, projectEnergyJoules)` reads inverted at call sites. | Rename `projectsPerReference`; keep alias one minor version. |
| **D6** | Medium (semantics) | `attributedAllocatedEnergy` name and docstring assert the deprecated headline semantics (03 §3). | Rename `expectedNecessaryThroughput` with the 07 A10 warning in its docstring; keep alias with `@deprecated`. |
| **D7** | Low (numeric) | Floating-point exactness in tests is luck: `1.3*70` rounds to exactly 91, so the 822,407,040 equality passes; `(1.3-1.0)` = 0.30000000000000004 makes the incremental value 189,786,240.00000003. A future engine reordering `mets*massKg*durationHours` breaks the exact assertion. | Tolerance-based assertions everywhere (the vectors file uses relative 1e-12); document that MET arithmetic is approximate by nature. |
| **D8** | Low (reporting) | Summary discards boundary composition — 822 MJ body + 389 MJ operational becomes one 1.21 GJ total with no per-boundary breakdown, though mixed-boundary totals need labeling (03 §1). | Add `byBoundary` map to `EnergyLedgerSummary`. |
| **D9** | Low (governance) | No `ENGINE_VERSION` export, though `docs/ARCHITECTURE.md` requires results to record engine version. | Export `ENGINE_VERSION` from `constants.ts`; include in summaries. |
| **D10** | Low (limitation, accepted) | `joulesToTonsTnt` / `referenceYieldFraction` reject negative energy, so signed savings cannot be expressed in reference units. Acceptable because reference comparisons are demoted to pedagogy; document. | Docstring note only. |
| **D11** | Info | Cycle walk is O(n·depth) with a per-flow visited set — fine to ~10⁴ flows; no action. | — |

**Hidden assumptions surfaced (mandate item):** constant attribution over each flow
(no time variation — B4+B3 address); duration equality between actual and
counterfactual worlds in `incrementalMetabolicEnergyFromMets` (07 A8); constant
device power (07 A9); one motive complex per ledger (implicit — must become explicit
in the scenario object).

## 3. Numeric representation ruling (mandate §XVIII menu)

| Option | Ruling |
|---|---|
| Plain numbers | Keep as the runtime substrate — auditable, dependency-free (a stated architectural principle). |
| **Branded unit types** | **Adopt.** `type Joules = number & {readonly __unit: 'J'}` etc., with constructor/assert helpers. Compile-time unit safety at zero runtime cost; the highest value-per-complexity in the menu. |
| Physical-units library | Reject (dependency-free principle; branded types capture 90% of the safety). |
| Decimal arithmetic | Reject — energy quantities are approximations; decimal exactness solves a non-problem. |
| Rational constants | Unnecessary — all conversion constants are already exact integers in binary. |
| Interval arithmetic | **Adopt** as a first-class value type for attribution and derived results (D3), not as a global arithmetic mode. |
| Probability-distribution objects | **Adopt minimally:** sample arrays + summary helpers (07 B2); no distribution algebra in core. |

Audit-friendliness is preserved: every adopted mechanism is plain TypeScript
readable in one sitting.

## 4. Exact test vectors (mandate's 12, all implemented in `test/vectors.test.ts`)

| V | Vector | Expected |
|---|---|---|
| V1 | Conversions: 500 kcal; 0.1 kWh; 15,000 t TNT; inverses | 2,092,000 J; 360,000 J; 6.276e13 J; round-trips ≈ identity (rel 1e-12) |
| V2 | Zero duration | `metabolicEnergyFromMets(h=0)` → 0; `electricalEnergyFromPower(50,0)` → 0; `averagePowerWatts(E,0)` → RangeError |
| V3 | Zero attribution | allocated(1e6, 0) → 0; induced(1e6, 4e5, 0) → 0 |
| V4 | Full attribution | allocated(1e6, 1) → 1e6; induced passes raw contrast |
| V5 | Negative induced | induced(600, 1000, 0.8) → −320 exactly; sign preserved through ledger totals |
| V6 | \(E_A=E_C\) | induced = 0 for a ∈ {0, 0.5, 1} |
| V7 | Parent/child | fixture totals: actual 1,211,207,040; induced 578,586,240; brain informational; **plus defect-documentation:** child (900 MJ) > parent (822 MJ) currently accepted (D2) |
| V8 | Cyclic ledger | A→B→A throws /cycle/; self-parent throws; unknown parent throws |
| V9 | Multiple roots | three roots sum; children of any root excluded |
| V10 | Uncertainty propagation (spec for B1) | a=0.7, E_A=1.2112e9, E_C=6.326e8, σ_a=0.15, σ_EA=5%, σ_EC=15% → Δ=405,020,000 J; Var=1.3741600693e16 J²; σ=117,224,573.759 J (computed inline until B1 lands) |
| V11 | Nominal 15-kt reference | fraction = 1.929902868068834e-5; projects = 51,816.07927245866; average power 155.76222222222222 W |
| V12 | Counterfactual sensitivity grid | E_A=1,211,207,040; scenarios: rest 632,620,800 → +578,586,240; TV 1,600,007,040 → −388,800,000; money-project 1,211,207,040 → 0; office 948,931,200 → +262,275,840 (rel 1e-9); partials: ∂Δ/∂a = E_A−E_C per scenario; ∂Δ/∂E_C = −a |

## 5. Target API sketch (post-narrowing v0.2)

```ts
// constants.ts
export const ENGINE_VERSION = '0.2.0';

// types.ts
export interface Interval { lower: number; upper: number }              // D3
export interface CounterfactualScenario {                                // D1
  id: string; label: string;
  description: string;            // the complete alternative world, in words
  deviceStates?: Record<string, 'off' | 'on' | 'reduced'>;
}
export interface EnergyFlow {
  id: string; label: string; boundary: EnergyBoundary;
  actualJoules: number;
  counterfactualJoules: number;
  scenarioId: string;                                                    // D1
  causalAttribution: number | Interval;                                  // D3
  parentFlowId?: string;
  parentRelation?: 'subdivision' | 'transformation';                     // D2
  notes?: string;
}
export interface EnergyLedgerSummary {
  engineVersion: string;                                                 // D9
  scenarioId: string;
  countedFlowIds: string[]; informationalFlowIds: string[];
  actualJoules: number; counterfactualJoules: number;
  inducedJoules: Interval;              // interval-valued once a is an interval
  expectedNecessaryThroughput: Interval; // renamed from allocatedJoules  // D6
  unattributedActualJoules: Interval;
  byBoundary: Record<EnergyBoundary, number>;                            // D8
}

// new modules (specs in 07 B1–B10)
firstOrderInducedVariance(...)   simulateInducedEnergy(...)
inducedEnergySensitivityGrid(...) integratePowerSamples(...)
attributionNecessityBounds(...)  assertScenarioCoherence(...)
assertFlowConservation(...)      costElasticityFromChoices(...)
deliveryEfficiency(...)          compareScenarios(...)
```

Migration order: D1+D2 (schema, before any real data) → D3 intervals → renames with
aliases (D5, D6) → new modules B4, B10, B5 (the minimum for S3) → the rest as the
experimental program demands. The core stays small enough for independent audit —
the mandate's closing requirement — because everything statistical beyond first-order
variance lives in a separately-audited module with the RNG injected.
