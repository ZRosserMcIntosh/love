# 07 — Function reference

Every existing core function and every recommended addition, each carrying the
mandate's 22 items in compact keyed form:

**Q** scientific question · **Eq** equation · **Deriv** derivation · **In** inputs
(symbol, unit, range, measurement) · **Out** output (unit, range) · **Dim**
dimensional analysis · **Assume** assumptions · **CF** counterfactual · **Bound**
system boundary · **U** uncertainty model · **DC** double-counting hazards · **Edge**
failure/edge cases · **Ex** ordinary-number example · **ExtT** extreme test · **ZeroT**
zero test · **InvT** invalid-input test · **Pseudo** pseudocode · **Sig** TypeScript
signature · **Kid** one sentence for a twelve-year-old · **Analogy** physical analogy ·
**Warn** what the result does *not* mean.

Disposition summary:

| Function | Disposition |
|---|---|
| 6 unit conversions | Keep (exact) |
| metabolicEnergyFromMets / incremental | Keep, labeled illustrative |
| electricalEnergyFromPower | Keep |
| attributedAllocatedEnergy | **Deprecate as headline**; keep as labeled expectation (03 §3) |
| attributedInducedEnergy | Keep, with PN semantics documented (03 §2) |
| averagePowerWatts | Keep |
| summarizeEnergyLedger | Keep, **must gain scenario coherence** (11 §2) |
| referenceYieldFraction / equivalentProjectCount | Keep, demoted to pedagogy (03 §7) |
| downstreamEnergyGain | Keep with boundary rules |
| 10 proposed additions | §B below |
| Shapley motive decomposition | **Rejected as core function** (04 §4) — output not identifiable |

---

## A. Existing functions

### A1. kilocaloriesToJoules
**Q** How many joules is a dietary Calorie count? **Eq** \(J=k\cdot4184\).
**Deriv** Thermochemical calorie := 4.184 J exactly (definition); ×1000.
**In** \(k\): kcal, \([0,\infty)\), from food labels/Atwater analysis. **Out** J, \([0,\infty)\).
**Dim** kcal·(J/kcal)=J ✓. **Assume** thermochemical (not IT) calorie; label values
are Atwater-approximate. **CF** none (identity conversion). **Bound** n/a.
**U** exact conversion; input uncertainty (labels ±10%+) passes through unchanged.
**DC** none. **Edge** none beyond validation. **Ex** 500 kcal → 2,092,000 J.
**ExtT** 1e12 kcal → 4.184e15 J (finite). **ZeroT** 0 → 0. **InvT** −1 → RangeError; NaN → RangeError.
**Pseudo** `return k * 4184`. **Sig** `kilocaloriesToJoules(kilocalories: number): number`.
**Kid** It turns food-label Calories into the standard science unit of energy.
**Analogy** Changing dollars to cents. **Warn** Converting units adds no precision:
a vague Calorie count becomes an equally vague joule count.

### A2. joulesToKilocalories
**Q** Inverse of A1. **Eq** \(k=J/4184\). **Deriv/Dim/Assume/CF/Bound/U/DC** as A1, inverted.
**In** \(J\): J, \([0,\infty)\). **Out** kcal. **Edge** floating division exact for
multiples of 4184 within 2^53. **Ex** 2,092,000 J → 500 kcal. **ExtT** 4.184e15 → 1e12.
**ZeroT** 0→0. **InvT** −5 → RangeError. **Pseudo** `return j / 4184`.
**Sig** `joulesToKilocalories(joules: number): number`. **Kid** It turns science-units
back into food Calories. **Analogy** Cents back to dollars. **Warn** A kcal figure is
not "amount of exercise" or "amount of effort" — it is heat-equivalent energy.

### A3. kilowattHoursToJoules
**Q** How many joules did a metered device use? **Eq** \(J=kWh\cdot3.6\times10^6\).
**Deriv** 1 W·s = 1 J; 1 kWh = 1000 W × 3600 s. **In** kWh, \([0,\infty)\), utility/watt-meter.
**Out** J. **Dim** kW·h·(J·kW⁻¹h⁻¹)=J ✓. **Assume** meter accuracy class known.
**CF** none. **Bound** the meter's circuit. **U** exact; meter class (±0.5–2%) passes through.
**DC** do not also add component-level estimates inside the same metered circuit.
**Ex** 0.1 kWh → 360,000 J. **ExtT** 1e9 kWh → 3.6e15 J. **ZeroT** 0→0. **InvT** −0.1 → RangeError.
**Pseudo** `return kwh * 3_600_000`. **Sig** `kilowattHoursToJoules(kilowattHours: number): number`.
**Kid** It converts what the electricity meter counts into joules. **Analogy** Liters
to milliliters. **Warn** Metered energy is *throughput*, not "energy caused by" anything.

### A4. joulesToKilowattHours
Inverse of A3; all items mirror. **Ex** 1,211,207,040 J → 336.446 kWh. **ZeroT** 0→0.
**InvT** −1 → RangeError. **Sig** `joulesToKilowattHours(joules: number): number`.
**Kid** Joules back into electricity-bill units. **Warn** 336 kWh *of throughput* is
not an electricity bill for love; most of it was body energy that never touched the grid.

### A5. tonsTntToJoules
**Q** What does a TNT-denominated reference equal in joules? **Eq** \(J=T\cdot4.184\times10^9\).
**Deriv** NIST conventional equivalence [nist-sp811]. **In** tons TNT, \([0,\infty)\).
**Out** J. **Dim** ✓. **Assume** *conventional* (definitional) yield, not measured
explosive output. **CF/Bound** n/a. **U** exact by convention; real TNT varies — that
variance is outside the convention. **DC** none. **Ex** 15,000 t → 6.276e13 J.
**ExtT** 1e6 t → 4.184e15 J. **ZeroT** 0→0. **InvT** −2 → RangeError.
**Pseudo** `return t * 4.184e9`. **Sig** `tonsTntToJoules(tonsTnt: number): number`.
**Kid** It turns "tons of TNT" into joules. **Analogy** A definitional exchange rate.
**Warn** Nothing about blast, power, or destruction — a number of joules only (03 §7).

### A6. joulesToTonsTnt
Inverse of A5. **Ex** 1,211,207,040 J → 0.28949 t. **ZeroT** 0→0. **InvT** −1 →
RangeError — **documented limitation:** signed energy savings cannot be expressed;
acceptable because TNT framing is demoted to pedagogy. **Sig**
`joulesToTonsTnt(joules: number): number`. **Kid** Joules into "tons of TNT," for
scale only. **Warn** 0.29 tons TNT *of slow warmth over six months*, not anything
that could explode; never publish without the power contrast (155.8 W vs ~10¹⁹ W).

### A7. metabolicEnergyFromMets
**Q** Roughly how much body energy did an activity use (population approximation)?
**Eq** \(E=M\,m\,h\cdot4184\). **Deriv** 1 MET := 1 kcal·kg⁻¹·h⁻¹ (convention);
multiply by mass, hours, J/kcal. **In** \(M\): MET \([0,\sim20]\), compendium
[herrmann2024]; \(m\): kg \((0,300]\), scale; \(h\): h \([0,\infty)\), diary/log.
**Out** J (gross, includes resting share). **Dim** (kcal·kg⁻¹h⁻¹)(kg)(h)(J/kcal)=J ✓.
**Assume** the 1-kcal convention fits the person (±20%+ it does not [byrne2005]);
compendium value fits the actual activity. **CF** none — this is *actual* energy.
**Bound** whole body. **U** multiplicative: \(\sigma_E/E\approx\sqrt{(\sigma_M/M)^2+(\sigma_{RMR}\text{ conv})^2}\) ≈ 20–30%.
**DC** contains brain and all organ energy — never add those separately; gross value
already contains the resting counterfactual's energy — never *also* subtract by hand.
**Edge** long durations silently assume constant activity. **Ex** {70 kg, 2160 h,
1.3 MET} → 822,407,040 J (exact only by rounding luck: `1.3*70` happens to round to
91; see 11 §3). **ExtT** {300, 1e6 h, 20} finite. **ZeroT** any zero input → 0.
**InvT** negative mass → RangeError. **Pseudo** `return mets*massKg*durationHours*4184`.
**Sig** `metabolicEnergyFromMets({massKg, durationHours, mets}: MetabolicEnergyInput): number`.
**Kid** Bigger bodies, longer times, and harder activities use more energy — this
multiplies the three. **Analogy** Fuel burn = rate × engine size × hours.
**Warn** A population illustration, not your metabolism; ±25% is normal, and it says
nothing about why the energy was spent.

### A8. incrementalMetabolicEnergyFromMets
**Q** How much *more* body energy than the declared alternative? **Eq**
\(\Delta E=(M_A-M_C)\,m\,h\cdot4184\). **Deriv** A7 applied to both worlds, subtracted;
valid because mass/duration shared. **In** as A7 plus \(M_C\). **Out** J, signed —
**negative is a valid energy saving**. **Dim** ✓. **Assume** same duration in both
worlds (a strong, often false assumption — the alternative life might sleep more);
G1-style gating at the activity grain. **CF** explicit: the \(M_C\) activity.
**Bound** whole body. **U** contrast error ≈ \(\sqrt{2}\times\) single-world MET error
unless errors correlate (they do; state covariance). **DC** never add this to A7's
gross value inside one total (it is a *contrast*, not a flow). **Edge** near-zero
contrasts are noise-dominated (1.3 vs 1.3 ± compendium error). **Ex** {70, 2160, 1.3,
1.0} → 189,786,240 J (FP: …240.00000003; tests need tolerance). **ExtT** \(M_C=20\),
\(M_A=1\) → large negative, finite. **ZeroT** \(M_A=M_C\) → 0. **InvT** negative MET →
RangeError. **Pseudo** `return (ma-mc)*m*h*4184`. **Sig**
`incrementalMetabolicEnergyFromMets({massKg, durationHours, actualMets, counterfactualMets}): number`.
**Kid** It answers: compared with the other way you'd have spent the evening, how
much extra did your body burn — which can be less than zero. **Analogy** Fuel used
on the scenic route minus the direct route. **Warn** Depends entirely on which
alternative you declared; a different honest alternative can flip its sign (03 §5).

### A9. electricalEnergyFromPower
**Q** Energy of a device at ~constant power. **Eq** \(E=P\cdot3600h\). **Deriv**
J = W·s. **In** \(P\): W \([0,\infty)\), watt-meter; \(h\): h. **Out** J. **Dim** ✓.
**Assume** constant power (false for real computers: idle/turbo vary 3–10×) — use
B4 for sampled power. **CF** none. **Bound** device plug. **U** dominated by the
constant-power assumption; ±30% for "a 50 W computer" claims. **DC** don't add CPU/
display sub-estimates inside a metered plug. **Ex** (50, 2160) → 388,800,000 J.
**ExtT** (1e6 W, 1e6 h) finite. **ZeroT** either zero → 0. **InvT** −50 → RangeError.
**Pseudo** `return watts*hours*3600`. **Sig**
`electricalEnergyFromPower(watts: number, durationHours: number): number`.
**Kid** Watts times seconds is joules. **Analogy** Flow rate × time = water used.
**Warn** The nameplate wattage is not the drawn wattage; measure, don't assume.

### A10. attributedAllocatedEnergy — *deprecated as headline (03 §3)*
**Q** (as reinterpreted) Expected motive-necessary *throughput* under the gating
model. **Eq** \(aE_A\). **Deriv** \(\mathbb E[E_A\mathbb 1(\text{necessary})]\) with
\(a=\Pr(\text{necessary})\) — an epistemic expectation, not a physical flow.
**In** \(E_A\): J; \(a\): 1, \([0,1]\), from 04 bounds (use each endpoint).
**Out** J-dimensioned expectation, \([0,E_A]\). **Dim** ✓. **Assume** gating model
G1–G4; \(a\) is PN, not a "share of motivation." **CF** implicit all-or-nothing.
**Bound** caller's. **U** dominated by \(a\)'s non-identifiability — output should be
an interval \([a_{lo}E_A, a_{hi}E_A]\). **DC** motive overlap: attributing the same
joules to several motives summing over 1. **Edge** cannot be negative — hence cannot
be a causal effect (03 §3). **Ex** (1000, 0.8) → 800 J. **ExtT** (1e15, 1) → 1e15.
**ZeroT** a=0 → 0. **InvT** a=1.01 → RangeError. **Pseudo** `return a*e`.
**Sig** `attributedAllocatedEnergy(actualJoules: number, causalAttribution: number): number`.
**Kid** "Meter reading × how sure we are" — a mixed number we now keep only for
internal math, showing the meter reading and the sureness separately instead.
**Analogy** Expected value of a lottery: no drawer contains the average prize.
**Warn** No world contains this many "love joules"; it is an average over worlds of
which only one is real. Never headline it.

### A11. attributedInducedEnergy
**Q** Expected causal effect of the motive on boundary energy. **Eq**
\(a(E_A-E_C)\). **Deriv** 03 §2 (mixture over motive-removal worlds; \(a=\)PN).
**In** \(E_A, E_C\): J, measured/scenario-modeled; \(a\): PN ∈ [0,1] (use bound
endpoints). **Out** J, signed. **Dim** ✓. **Assume** G1–G4; single coherent scenario;
act-grain matches the margin (throttle counterexample, 03 §2 item 9). **CF**
explicit \(E_C(s)\). **Bound** declared \(\mathcal B\). **U** 03 §4 (first-order or
simulation; interval in \(a\)). **DC** scenario incoherence across summed flows;
motive overlap. **Edge** sign flips across scenarios — a feature; report the family.
**Ex** (1000, 600, 0.8) → 320 J; (600, 1000, 0.8) → **−320 J**. **ExtT**
(1e15, 0, 1) → 1e15. **ZeroT** \(E_A=E_C\) → 0 regardless of \(a\). **InvT**
a=−0.1 → RangeError. **Pseudo** `return a*(ea-ec)`. **Sig**
`attributedInducedEnergy(actualJoules: number, counterfactualJoules: number, causalAttribution: number): number`.
**Kid** Out of 100 imagined reruns of your evening, count only the reruns where love
was the deciding reason, and in those count only the energy difference from the other
evening. **Analogy** Epidemiology's "excess cases attributable to exposure," with
joules for cases. **Warn** Not "energy of love"; it is model-conditional, scenario-
conditional, and its honest form is an interval.

### A12. averagePowerWatts
**Q** Mean rate of expenditure. **Eq** \(\bar P=E/(3600h)\). **Deriv** definition.
**In** \(E\): J (signed OK); \(h\): h, \((0,\infty)\). **Out** W, signed. **Dim** ✓.
**Assume** none. **CF/Bound** caller's. **U** ratio propagation. **DC** none.
**Edge** duration must be >0 (validated). **Ex** (1,211,207,040, 2160) → 155.76 W.
**ExtT** (4.184e9, 1e-9 h) → huge, finite. **ZeroT** E=0 → 0 W. **InvT** h=0 →
RangeError. **Pseudo** `return e/(h*3600)`. **Sig**
`averagePowerWatts(energyJoules: number, durationHours: number): number`.
**Kid** Energy is the whole bucket; power is how fast it pours. **Analogy** A bomb
and a slow cooker can move the same joules; only power tells them apart. **Warn**
Averages hide bursts; a 155 W average is compatible with wild daily variation.

### A13. summarizeEnergyLedger
**Q** Total independent root flows without double counting; carry attribution
aggregates. **Eq** sums over roots; children display-only. **Deriv** conservation
bookkeeping: transformations/subdivisions of a parent are the same energy.
**In** `EnergyFlow[]` (id, boundary, \(E_A\), \(E_C\), \(a\), parent?). **Out**
summary {actual, counterfactual, allocated, induced, unattributed}. **Dim** ✓ (sums
of J). **Assume** parent/child correctly declared; **all flows share one
counterfactual scenario — currently unenforced (defect D1, 11 §2)**; attribution
heterogeneity across flows is meaningful only if each \(a_i\) is a PN for the same
motive complex. **CF** per-flow \(E_C\), must be scenario-coherent. **Bound** union
of flow boundaries — mixed boundaries (body + operational) are fine *as a labeled
union*. **U** none propagated (defect D3: add interval fields). **DC** prevented for
parent/child; **not** prevented for cross-flow scenario mixing or sibling overlap
(two "computer" flows metering the same circuit). **Edge** cycle → throw; unknown
parent → throw; duplicate id → throw; grandchildren fine. **Ex** test fixture: body
822,407,040 (CF 632,620,800) + computer 388,800,000 (CF 0), brain child excluded →
actual 1,211,207,040; induced 578,586,240. **ExtT** 10⁴ flows OK (O(n²) cycle walk —
acceptable n, note in 11). **ZeroT** empty array → all-zero summary (verify in
vectors). **InvT** a=1.2 in any flow → RangeError. **Pseudo** filter roots; fold
sums. **Sig** `summarizeEnergyLedger(flows: readonly EnergyFlow[]): EnergyLedgerSummary`.
**Kid** Add the separate energy sources once each, and never count the brain extra —
it is already inside the body's total. **Analogy** Household budget: don't add
"groceries" and "food" as two expenses. **Warn** A correct total of a *badly chosen
flow list* is still wrong; the ledger checks structure, not your honesty about
scenarios (yet — see B6).

### A14. referenceYieldFraction
**Q** \(E\) as fraction of a reference energy. **Eq** \(f=E/E_R\). **Deriv**
definition. **In** J, J>0. **Out** 1, \([0,\infty)\). **Dim** ✓. **Assume** reference
meaningful to the audience. **CF/Bound** caller's. **U** ratio. **DC** none.
**Edge** rejects negative \(E\) — signed savings can't be fractioned (documented).
**Ex** 1,211,207,040 / 6.276e13 → 1.930e-5. **ExtT** tiny denominators explode —
validated >0. **ZeroT** E=0 → 0. **InvT** \(E_R=0\) → RangeError. **Pseudo**
`return e/eR`. **Sig** `referenceYieldFraction(energyJoules: number, referenceEnergyJoules: number): number`.
**Kid** "What fraction of the big reference is this?" **Analogy** Your marathon as a
fraction of a flight's fuel. **Warn** Fractions of a bomb are rhetoric, not analysis
(03 §7); prefer human-scale references.

### A15. equivalentProjectCount
**Q** How many projects of this size equal the reference? **Eq** \(N=E_R/E\).
**Deriv** inverse of A14. **In** J≥0, J>0. **Out** 1. **Dim** ✓. **Ex** 6.276e13 /
1,211,207,040 → 51,816.08. **ZeroT** \(E_R=0\) → 0. **InvT** project 0 → RangeError.
**Edge/naming** argument order inverts A14's — rename to `projectsPerReference`
(11 §4). **Pseudo** `return eR/e`. **Sig**
`equivalentProjectCount(referenceEnergyJoules: number, projectEnergyJoules: number): number`.
**Kid** How many six-month projects add up to the big number. **Analogy** How many
bathtubs fill a pool. **Warn** Counting bathtubs says nothing about swimming; scale
comparison only.

### A16. downstreamEnergyGain
**Q** Causal energy leverage of an initiating act. **Eq** \(G=E_{down}/E_{init}\).
**Deriv** ratio of *causally attributed* downstream flow (own independent sources)
to initiating boundary energy. **In** J≥0, J>0; downstream requires its own causal
model + boundary (preregistered). **Out** 1, \([0,\infty)\); >1 licit (relay logic,
03 §6.10). **Dim** ✓. **Assume** downstream attribution defensible — the hard part;
rebound netting declared. **CF** downstream world without the initiating act.
**Bound** two distinct boundaries; never merge them into one "total" (conservation
bookkeeping violation). **U** dominated by downstream attribution; interval output
in practice. **DC** the flagship hazard: adding downstream to initiating energy
anywhere. **Edge** division by small \(E_{init}\) → sensational ratios; report with
absolute values. **Ex** (5e9, 1e9) → 5.0. **ExtT** (1e18, 1) → 1e18, finite,
meaningless without attribution — the warning exists for this. **ZeroT** downstream
0 → 0. **InvT** init 0 → RangeError. **Pseudo** `return down/init`. **Sig**
`downstreamEnergyGain(downstreamJoules: number, initiatingJoules: number): number`.
**Kid** A tiny push on a switch can steer a big machine; this measures the
steering ratio, not magic energy. **Analogy** Relay coil vs. switched circuit.
**Warn** Not efficiency, not benefit, not proof the downstream was good — and the
downstream energy never "came from" the act.

---

## B. Proposed functions (all 22 items, compact)

### B1. firstOrderInducedVariance
**Q** Quick variance for \(\Delta=a(E_A-E_C)\). **Eq**
\(\sigma^2=(E_A{-}E_C)^2\sigma_a^2+a^2\sigma_{E_A}^2+a^2\sigma_{E_C}^2+2a(E_A{-}E_C)(\sigma_{aE_A}{-}\sigma_{aE_C})-2a^2\sigma_{E_AE_C}\).
**Deriv** delta method with covariances. **In** point values + covariance terms (J²,
J, 1). **Out** J². **Dim** ✓. **Assume** local linearity, unimodality — *fails for
scenario mixtures* (03 §4). **CF/Bound** caller's. **U** it *is* the uncertainty
model (first-order). **DC** n/a. **Edge** near-zero contrast → attribution term
vanishes (correct). **Ex** 03 §4 row 1: sd 116.7 MJ. **ExtT** huge covariances →
finite. **ZeroT** all σ=0 → 0. **InvT** negative variance input → RangeError.
**Pseudo** expand the quadratic form. **Sig**
`firstOrderInducedVariance(input: {a, ea, ec, varA, varEa, varEc, covAEa?, covAEc?, covEaEc?}): number`.
**Kid** A fast estimate of how wobbly the answer is. **Analogy** Surveyor's error
budget. **Warn** Underreports structure when the alternative world is "either/or"
— use B2 for anything published.

### B2. simulateInducedEnergy
**Q** Full uncertainty by simulation. **Eq** draws \(\Delta^{(i)}=a^{(i)}(E_A^{(i)}-E_C^{(i)})\).
**Deriv** Monte Carlo expectation. **In** sampler callbacks or pre-drawn arrays
(dependence encoded by joint draws); n. **Out** array of J draws (summaries computed
by caller: median, interval, \(\Pr(\Delta<0)\)). **Dim** ✓. **Assume** input
distributions honest; RNG injected (core stays deterministic — no Math.random
inside). **CF/Bound** per draw. **U** it is the model. **DC** n/a. **Edge**
mixtures/bimodality handled natively — the reason it exists. **Ex** 03 §4 row 2:
median 195 MJ, 95% [−160, 582], \(\Pr(<50\text{ MJ})=0.36\). **ExtT** n=10⁷ memory
bound — document. **ZeroT** degenerate samplers → constant. **InvT** n≤0 →
RangeError. **Pseudo** loop draws, collect. **Sig**
`simulateInducedEnergy(samplers: {a: () => number, ea: () => number, ec: () => number}, n: number): number[]`
(or a joint sampler `() => {a, ea, ec}` for correlated draws — preferred).
**Kid** Roll the dice thousands of times over everything you're unsure about and
look at the whole pile of answers. **Analogy** Weather ensemble forecasting.
**Warn** Garbage priors in, confident-looking garbage out; publish the inputs.

### B3. inducedEnergySensitivityGrid
**Q** \(\Delta(a, E_C)\) surface for display. **Eq** grid of \(a_i(E_A-E_{C,j})\)
with \(\partial\Delta/\partial a=E_A{-}E_C\), \(\partial\Delta/\partial E_C=-a\).
**Deriv** 03 §5. **In** \(E_A\); arrays of \(a\), \(E_C\) (scenario-labeled). **Out**
matrix J + partials. **Dim** ✓. **Assume** none new. **CF** the grid *is* the
counterfactual family. **Bound** caller's. **U** exact given inputs. **DC** n/a.
**Edge** empty arrays → empty. **Ex** recurring case: rows 03 §5 (−389…+579 MJ).
**ExtT** 10⁶ cells memory. **ZeroT** \(a=[0]\) → zeros. **InvT** \(a>1\) →
RangeError. **Pseudo** nested map. **Sig**
`inducedEnergySensitivityGrid(eaJoules: number, attributions: number[], counterfactuals: {label: string, joules: number}[]): {label: string, byAttribution: number[]}[]`.
**Kid** A table showing the answer under every honest combination of "how sure" and
"which other evening." **Analogy** A topographic map instead of one altitude.
**Warn** The spread across the grid is the finding; quoting one cell is cherry-picking.

### B4. integratePowerSamples
**Q** Energy from sampled power. **Eq** trapezoidal \(\sum\frac{P_k+P_{k+1}}{2}\Delta t_k\).
**Deriv** Riemann/trapezoid. **In** timestamps (s, strictly increasing), power (W);
gap policy ('hold'|'drop'|'error'; max-gap seconds). **Out** J + coverage fraction.
**Dim** W·s=J ✓. **Assume** power between samples behaves per policy; clock sync
(05 §3). **CF** none. **Bound** the meter. **U** discretization + gap share —
returned as coverage metadata, never silently. **DC** overlapping sample streams of
one circuit. **Edge** unsorted → error; single sample → error; DST/clock jumps →
error on negative dt. **Ex** [0 s: 40 W, 3600 s: 60 W] → 180,000 J. **ExtT** 10⁷
samples streaming. **ZeroT** empty → 0 with coverage 0. **InvT** negative dt →
RangeError. **Pseudo** fold trapezoids, track gaps. **Sig**
`integratePowerSamples(samples: {tSeconds: number, watts: number}[], policy: GapPolicy): {joules: number, coverage: number}`.
**Kid** Add up the meter readings over time, honestly reporting any minutes the
meter missed. **Analogy** Odometer from speedometer readings. **Warn** Coverage
< 1 means the total is partly assumption; the metadata is part of the result.

### B5. attributionNecessityBounds
**Q** Tian–Pearl bounds on PN from combinable data. **Eq** 04 §3 display. **Deriv**
[tianpearl2000]. **In** \(\Pr(A{=}1\mid M{=}1)\), \(\Pr(A{=}1\mid M{=}0)\) proxy,
\(\Pr(A{=}1, M{=}1)\), flags {exogeneity, monotonicity}. **Out** \([\pi_{lo},\pi_{hi}]\subseteq[0,1]\).
**Dim** 1 ✓. **Assume** the do(M=0) proxy's quality is the load-bearing assumption —
carried as a labeled input, widening bounds per declared proxy error. **CF**
motive-removal world. **Bound** n/a. **U** bounds *are* the uncertainty; optionally
add sampling CIs on the bounds. **DC** n/a. **Edge** inconsistent probabilities →
error; monotonicity+exogeneity → point (interval collapses). **Ex** obs act rate
with commitment .9, proxy without .3, joint .45 → PN bounds ≈ [0.67, 1] under
exogeneity ((.9−.3)/.9=0.667). **ExtT** proxy=0 → PN=1. **ZeroT** identical rates →
lower bound 0. **InvT** probabilities >1 → RangeError. **Pseudo** clamp the two
mandated expressions. **Sig**
`attributionNecessityBounds(input: {pActGivenM: number, pActGivenNoM: number, pActAndM: number, exogeneity: boolean, monotonicity: boolean}): {lower: number, upper: number}`.
**Kid** From how often people do this with and without the reason, we can trap "was
the reason necessary?" between two honest fences. **Analogy** Bracketing a fish's
weight between two scale limits. **Warn** The fences come from a *stand-in* for the
impossible experiment; a bad stand-in silently moves both fences.

### B6. assertScenarioCoherence *(fixes defect D1)*
**Q** Do all flows in a ledger draw counterfactuals from one world? **Eq**
structural check: each flow carries `scenarioId`; one id per summary; scenario
declares device/body states. **Deriv** 03 §2 double-counting mode (ii). **In**
flows + scenario declaration. **Out** void | throw. **Dim** n/a. **Assume**
scenario declaration truthful (the function enforces consistency, not truth).
**Edge** flows without scenarioId → error listing them. **Ex** body CF "resting"
+ computer CF "off" under scenario "quiet rest" → pass; adding a TV-scenario flow →
throw. **ExtT/ZeroT** empty ledger passes. **InvT** two scenario ids → throw.
**Pseudo** collect ids; compare; validate states. **Sig**
`assertScenarioCoherence(flows: readonly EnergyFlow[], scenario: CounterfactualScenario): void`.
**Kid** All the "instead" numbers must describe the *same* imaginary evening.
**Analogy** All witnesses must describe the same night, or the story is invalid.
**Warn** Passing means consistent, not correct.

### B7. assertFlowConservation *(fixes defect D2)*
**Q** Do child subdivisions exceed their parent? **Eq** for each parent \(p\):
\(\sum_{c\in ch(p)} E_c \le E_p(1+\tau)\), τ tolerance. **Deriv** conservation:
subdivisions of a flow cannot outsum it. **In** flows, τ (default 1e-9 relative).
**Out** void | throw with the violating chain. **Assume** children marked
`subdivision` (typed edges, 11 §4) — transformations with losses use ≤ too;
independent inputs exempt. **Ex** brain 155,520,000 ≤ body 822,407,040 ✓; a child of
900 MJ under an 822 MJ body → throw. **ZeroT** childless → pass. **InvT** τ<0 →
RangeError. **Sig**
`assertFlowConservation(flows: readonly EnergyFlow[], relativeTolerance?: number): void`.
**Kid** The slices cannot add up to more than the pizza. **Analogy** Pizza.
**Warn** Catches impossible ledgers, not wrong-but-possible ones.

### B8. costElasticityFromChoices
**Q** The flagship lab quantity: how acceptance falls as energetic cost rises.
**Eq** logistic slope: fit \(\text{logit}\Pr(\text{accept})=\alpha+\beta\log c\);
elasticity profile \(\varepsilon(c)=\beta\,(1-\Pr)\) reported at reference costs, or
report \(\beta\) directly as log-odds cost sensitivity. **Deriv** discrete choice.
**In** trials {costJoules>0, accepted}. **Out** {beta, se, elasticityAtMedianCost},
dimensionless. **Dim** ✓ (log-ratios). **Assume** logistic form (check fit);
stationarity across trials. **CF** within-experiment randomized costs — the one
place attribution is clean. **Bound** task energy (ergometer-calibrated). **U**
MLE covariance. **DC** n/a. **Edge** separation (all-accept) → report bound not
estimate (Firth or refuse). **Ex** synthetic: accept 95% at 1 kJ, 50% at 10 kJ →
β≈−1.28 per log-J. **ExtT** huge costs → \(\Pr\to0\), finite β. **ZeroT** constant
acceptance → β≈0. **InvT** cost≤0 → RangeError. **Sig**
`costElasticityFromChoices(trials: {costJoules: number, accepted: boolean}[]): {beta: number, standardError: number}`.
**Kid** How quickly does "yes" fade as the task gets heavier — and for whom does it
fade slower? **Analogy** A spring constant for willingness. **Warn** Person- and
context-specific; a slope, never a love score.

### B9. deliveryEfficiency
**Q** Fraction of independent input energy usefully delivered to the recipient
domain. **Eq** \(\eta=E_{delivered}/\sum E_{roots}\). **Deriv** definition, with
`delivered` boundary flows only in the numerator, independent roots only in the
denominator. **In** ledger with boundary tags. **Out** 1, \([0,\ \sim1]\) (>1 →
bookkeeping error → throw). **Dim** ✓. **Assume** delivered flows genuinely reach
the recipient (meals eaten, heat in their room). **CF** none. **Bound** the two
tags. **U** propagate flow errors. **DC** delivered flows must be roots or
subdivisions counted once — enforced. **Edge** zero roots → error. **Ex** meals
120 MJ delivered / 600 MJ inputs → 0.2. **ExtT** all delivered → 1. **ZeroT** none
delivered → 0. **InvT** delivered > inputs → throw (conservation). **Sig**
`deliveryEfficiency(flows: readonly EnergyFlow[]): number`.
**Kid** Of all the energy spent, how much actually arrived as something they could
use? **Analogy** Boiler efficiency. **Warn** Efficiency is not virtue: hard
circumstances lower it through no fault of anyone (05 §6 fairness).

### B10. compareScenarios
**Q** One call that produces the whole honest headline: throughput + scenario
family + attribution interval. **Eq** for each scenario \(s\):
\(\Delta(s)=E_A-E_C(s)\); attributed interval \([\pi_{lo}\Delta,\pi_{hi}\Delta]\)
(order-normalized when Δ<0). **Deriv** 03 §5 + 04 §3. **In** \(E_A\); scenarios
{label, ecJoules}; bounds {lower, upper}. **Out** rows {label, delta, attributedLow,
attributedHigh}. **Dim** ✓. **Assume** scenario coherence upstream (B6). **CF**
the family. **Bound** caller's. **U** callers feed posterior draws via B2 for full
treatment. **DC** n/a. **Edge** empty scenarios → empty. **Ex** recurring case,
π∈[0.3,0.9]: rest → Δ=578.6 MJ, attributed [173.6, 520.7]; television → Δ=−388.8,
attributed [−349.9, −116.6]. **ExtT** many scenarios fine. **ZeroT** \(E_C=E_A\) →
zeros. **InvT** bounds inverted → RangeError. **Sig**
`compareScenarios(eaJoules: number, scenarios: {label: string, ecJoules: number}[], attribution: {lower: number, upper: number}): ScenarioComparison[]`.
**Kid** The full answer is a short table of honest "it depends," not one big number.
**Analogy** A weather forecast's ensemble table. **Warn** Dropping rows you dislike
converts science back into rhetoric.

### Rejected: shapleyMotiveDecomposition
Fails the mandate's own §XV rule ("reject any function whose output looks precise
but cannot be identified"): requires \(2^{|\mathcal M|}\) unobservable coalition
propensities (04 §4). Not implemented in core; permitted only in a clearly labeled
research sandbox with simulated inputs.
