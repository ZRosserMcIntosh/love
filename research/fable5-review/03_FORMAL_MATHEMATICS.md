# 03 — Formal mathematics

Every equation here carries its plain-language reading inline (mandate §XVI). All
numerical results were recomputed independently during this review (mandate §XX.2)
with the recurring example: 70 kg person, 12 h/day × 180 days = 2,160 h, 1.3 MET desk
work, 50 W computer, thermochemical kilocalorie 4,184 J.

## 1. Objects and notation

Fix a **system boundary** \(\mathcal B\) (a list of metered flows: body, devices,
vehicles, embodied inputs) and an observation interval \([t_0,t_1]\). For flow \(i\):

- \(P_i^A(t)\) — actual power through \(\mathcal B\), watts. Measurable.
- \(s\) — a **counterfactual scenario**: a complete, internally consistent description
  of the alternative world ("the same person, same interval, watching television in a
  lit, heated room with the television on"). Scenarios are *declared*, not observed.
- \(P_i^C(t\mid s)\) — power in scenario \(s\). Estimated, never measured.
- \(E_i^A=\int P_i^A\,dt\), \(E_i^C(s)=\int P_i^C(\cdot\mid s)\,dt\) — joules.
- \(M\) — the focal motive complex (a commitment, per 02 §3), treated as a binary
  treatment "present/absent" at the level of the act.
- \(A\) — act indicator: 1 if the focal act pattern is performed, 0 if the scenario
  substitute is performed.

> **Child reading.** \(E^A\) is what the meter actually said. \(E^C\) is our best
> honest guess of what the meter would have said in a different life. \(s\) is which
> different life we mean. You cannot check \(E^C\) with any meter, ever. That is the
> whole difficulty, and we say it out loud.

## 2. Derivation of the induced-energy equation (mandate §VI items 1–4)

The repository asserts \(E_L^{induced}=a(E_A-E_C)\). Here is the only derivation under
which it is correct.

**Gating model (structural assumptions G1–G4).**
- G1 (*gate, not throttle*): \(M\) affects energy only through act selection \(A\);
  given \(A\), energy is unaffected by \(M\). Formally \(E = A\,E_A + (1-A)\,E_C(s)\)
  with \(E_A, E_C\) independent of \(M\) given \(A\).
- G2 (*factual*): in the observed world, \(M=1\) and \(A=1\).
- G3 (*substitute world*): under \(A=0\) the person performs scenario \(s\); \(E_C(s)\)
  is its energy.
- G4 (*necessity probability*): define
  \(\pi \equiv \Pr\big(A(M{=}0)=0 \mid A=1, M=1\big)\)
  — the probability the act would **not** have occurred but for the motive. This is
  Pearl's **probability of necessity** (PN) [pearl2009; tianpearl2000].

Then the expected energy under motive removal is a mixture:

\[
\mathbb E\big[E \mid do(M{=}0)\big]
=(1-\pi)\,E_A+\pi\,E_C(s)
\]

and the expected causal effect of the motive on boundary energy is

\[
\Delta \;=\; E_A-\mathbb E\big[E\mid do(M{=}0)\big]
\;=\;\pi\,\big(E_A-E_C(s)\big).
\]

**Conclusion.** \(E_L^{induced}=a(E_A-E_C)\) is exactly the expected causal effect of
the motive on energy, **iff** \(a=\pi=\text{PN}\), G1–G4 hold, and \(E_C\) is the
energy of the declared substitute. The equation is not physics; it is an
attributable-effect computation with joules as the outcome — the energy analogue of
the epidemiologist's excess fraction.

> **Child reading.** Imagine 100 copies of the same evening. In \(a\) of them, without
> the love, you would have done something else. Only those evenings get counted, and
> for them we count the *difference* between the two evenings. Average over all 100
> copies: that is the formula.

**Identifiability conditions (item 3).** \(\pi\) is a counterfactual probability. From
data alone it is **partially identified**: with combined experimental and
observational data, sharp bounds exist [tianpearl2000]; point identification requires
monotonicity (the motive never *prevents* the act) plus exogeneity — plausible in
randomized lab designs, indefensible in field data (02 DAG-2/3). Consequence: field
results must be reported as
\(\Delta \in [\pi_{lo},\pi_{hi}]\times(E_A-E_C(s))\). Full treatment in 04.

**Boundary assumptions (item 4).** \(\Delta\) is defined per boundary \(\mathcal B\)
and scenario \(s\); changing either changes the estimand, not the error bar. Every
published \(\Delta\) must carry \((\mathcal B, s, M\text{-definition})\) as part of the
*name* of the quantity.

**Sign (item 5).** \(\Delta<0\) iff \(E_C(s)>E_A\): the commitment caused a
*lower*-energy world. Verified example below (television scenario, −388.8 MJ). The
software must preserve the sign (it does).

**Double counting (item 6).** Three modes: (i) parent/child flows (brain inside body)
— handled by the ledger; (ii) **scenario incoherence** — summing flows whose
counterfactuals come from *different* scenarios (body counterfactual "resting in the
dark" + device counterfactual "television on" describes no single world; the current
API permits this — defect, see 11 §2); (iii) motive overlap — attributing the same
joules fully to love and fully to duty; prevented only by treating \(M\) as one
declared complex or by bounds (04 §5).

**Is multiplying by \(a\) defensible? (item 7).** Yes for \(\Delta\), under G1–G4,
because the multiplication *is* the expectation over the necessity event — not a
"share" being painted onto joules. It fails when:
- G1 fails (*throttle case*): the motive changes intensity/duration rather than
  act occurrence (love makes you polish for three extra hours). Then the correct
  object is a dose–response \(E_A(m)\) and \(\Delta=E_A(m_1)-E_A(m_0)\) directly;
  inserting an \(a\) is a category error.
- Multiple substitutes: replace \(E_C\) with the substitute *mixture mean*
  \(\bar E_C=\sum_k \Pr(s_k\mid A{=}0)E_C(s_k)\); reporting a single scenario as if
  certain understates uncertainty (see §7, Case B).
- \(a\) is reinterpreted mid-report as "share of motivation" (a psychological
  weight): then \(a\Delta\) has no causal meaning at all. The repository's own
  README text ("half of the causal credit") flirts with this reading; strike it.

**Counterexample where the equation misleads (item 9).** *The devoted throttler:* a
parent would drive to school in any world (\(A\) unchanged, \(\pi=0\)), but love makes
them drive 20% farther to the better school. True causal effect: 20% of fuel energy.
Gating formula: \(\pi(E_A-E_C)=0\). The equation reports **zero** for a real effect
because the margin is intensity, not occurrence. Cure: model the act at finer grain
(route choice as the act) or use dose–response. Every application must state the act
grain explicitly.

## 3. The allocated-energy equation, interrogated — and rejected as a headline

\(E_L^{allocated}=aE_A\).

**Derivation attempt.** Under G1–G4, \(aE_A=\mathbb E[E_A\cdot\mathbb 1(\text{motive
necessary})]\): the expected value of a quantity that is *either* \(0\) *or* \(E_A\).
Dimensionally sound (item 2: \([1]\times[\mathrm J]=\mathrm J\)); causally it is **not
an effect of anything** — it includes basal metabolism the person burns in every
possible world, weighted by an epistemic probability.

**How it misleads (item 9).** Two workers, identical projects, identical evidence
\(a=0.5\). Worker 1's actual world burned 1,000 MJ. Report: "500 MJ allocated to
love." No world exists in which 500 MJ flowed because of love: either ~1,000 MJ was
motive-necessary throughput or ~0 was. The point estimate is an average over worlds of
which one is real, presented in physical units that imply a meter could check it. It
cannot. Worse: it is maximized by *inefficiency* (raise \(E_A\) by working badly and
"allocated love energy" grows) — a gameable metric (mandate §XII).

**When the result can be negative (item 5).** Never (both factors nonnegative) — which
is itself diagnostic: a quantity that cannot be negative cannot represent a causal
effect on energy, since motives can save energy.

**Disposition.** Keep \(E_A\) under the honest name **boundary throughput** —
genuinely useful (it is what the meters say, it is the denominator for delivery
efficiency, and its time series is the raw material for everything else). Report
attribution *beside* it, as bounds: \((E_A;\ \pi\in[\pi_{lo},\pi_{hi}])\). The product
may appear only inside expected-value computations that are labeled as expectations,
never as a headline "energy of love."

> **Child reading.** The old number multiplied "all the energy of the evening" by
> "how sure we are love was the reason." That mixes a meter reading with a feeling of
> sureness into one number that looks like a meter reading. We now keep them side by
> side instead: what the meter said, and how sure we are — as a range.

## 4. Uncertainty propagation for \(\Delta=a(E_A-E_C)\) (mandate §VI item 10, §XI)

First-order (delta method), independent errors:

\[
\sigma_\Delta^2\approx(E_A-E_C)^2\sigma_a^2+a^2\sigma_{E_A}^2+a^2\sigma_{E_C}^2 .
\]

Correlated errors require the full \(\nabla f^\top\Sigma\nabla f\); in practice \(a\)
and \(E_C\) share evidence (both come from the counterfactual model), so
\(\mathrm{cov}(a,E_C)\neq0\) and independence is generically false.

**Honest numerical audit** (recomputed this review, 400k Monte Carlo draws):

| Case | First-order | Monte Carlo | Ruling |
|---|---|---|---|
| Smooth: \(a\sim\)Beta(mean .9, sd .10), \(E_A\) ±5%, \(E_C\) ±15% | mean 520.7 MJ, sd 116.7, 95% CI [292, 749] | mean 520.7 MJ, sd 117.2, [293, 751] | First-order is *adequate* for smooth unimodal inputs — do not over-sell Monte Carlo |
| Scenario mixture: \(E_C\) = rest (632.6 MJ) or "would have done it anyway" (\(E_C{=}E_A\)), 50/50; \(a\sim\)Beta(mean .7, sd .15) | mean±sd meaningless (bimodal) | mean 202 MJ, sd 227, 95% [−160, +582], \(\Pr(\Delta<50\text{ MJ})=0.36\) | Only simulation conveys the structure; an interval symmetric about the mean would be false |

**Ruling.** First-order for internal checks; posterior/Monte Carlo simulation for
anything published, because (i) scenario mixtures are the *normal* case, (ii) users
need event probabilities (\(\Pr(\Delta<0)\)), (iii) correlations are the rule. Public
format: median, central interval, scenario conditioning, attribution bounds — as
mandated. Full hierarchical model: 05 §7.

## 5. Counterfactual architecture (mandate §X)

All values recomputed; \(a\equiv1\) to isolate the scenario effect; boundary = body +
computer.

| Scenario \(s\) | Assumptions | \(E_C(s)\) [MJ] | Induced \(\Delta(s)\) [MJ] |
|---|---|---|---|
| Quiet rest, devices off | 1.0 MET, 0 W | 632.6 | **+578.6** |
| Television leisure | 1.3 MET (sitting, TV), 100 W television | 1,600.0 | **−388.8** |
| Television, resting-MET variant | 1.0 MET, 100 W | 1,410.2 | −199.0 |
| Different paid work | 1.5 MET office+commute, no home computer | 948.9 | +262.3 |
| Unrelated personal project | 1.3 MET, 50 W | 1,211.2 | 0 |
| Same project for money | 1.3 MET, 50 W | 1,211.2 | 0 |
| Same project, other recipient | 1.3 MET, 50 W | 1,211.2 | 0 (energy identical; only attribution semantics change) |
| No project, unchanged computer use | 1.3 MET, 50 W (browsing) | 1,211.2 | 0 |
| Lower-energy implementation of same benefit | 6 h/day at 1.3 MET + rest, 25 W laptop | 824.7 | +386.5 (relative to the *efficient* world) |

Same allocated throughput (1,211.2 MJ) in every row; induced energy spans **−389 MJ to
+579 MJ** across defensible scenarios. This is the central scientific fact and must be
displayed, not hidden: the sensitivity *is* the result.

**Sensitivity surface.** \(\Delta(a,E_C)=a(E_A-E_C)\):

\[
\frac{\partial\Delta}{\partial a}=E_A-E_C
\qquad
\frac{\partial\Delta}{\partial E_C}=-a .
\]

Scientific meaning: attribution uncertainty matters *in proportion to the energy
contrast* (if the two worlds burn alike, being wrong about motive costs nothing);
counterfactual uncertainty matters *in proportion to attribution* (if the motive was
probably not necessary, being wrong about the other world costs little).

> **Child reading.** Two dials. The love dial matters more when the two possible
> evenings are very different. The other-evening dial matters more when we are quite
> sure love was the reason. If the evenings are almost the same, no dial matters —
> and the honest answer is "about zero either way."

**Reporting ruling.** Report counterfactuals as a **labeled scenario family plus a
robustness curve** (\(\Delta\) as a function of \(E_C\) with scenario markers), and an
identified set when substitute probabilities are unknown. **Reject** default Bayesian
model averaging across scenarios: the mixture weights \(\Pr(s_k\mid A{=}0)\) are
precisely what cannot be observed, and averaging launders scenario uncertainty into a
falsely singular posterior. (Averaging is permitted only when substitute probabilities
are themselves elicited or experimentally estimated, and then the mixture must still be
displayed, per §4 Case B.)

## 6. Thermodynamics, exergy, entropy (mandate §VIII, answers 1–10)

1. **Energy or exergy?** For machine flows, **exergy**: electricity is ~pure exergy;
   40 °C waste heat is nearly none. For metabolizing humans, food chemical exergy ≈
   its enthalpy for bookkeeping purposes, and all bodily energy ends as low-grade
   heat; exergy adds little discrimination within body flows. Ruling: ledger stores
   joules; machine flows *may* carry an exergy annotation; cross-flow "usefulness"
   comparisons use exergy where defined.
2. **Food and fuel chemical exergy:** use standard chemical exergy tables
   [szargut1988] when needed; for this program's precision, food energy (Atwater) is
   adequate and exergy corrections are noise.
3. **Can "constructive" be physical?** No. Work done *on* a system against a gradient
   is definable; "constructive" additionally requires a goal specification (what
   counts as the intended assembly). It is a functional/teleonomic label. Ruling:
   C-014 stays falsified; use the annotation pair (physical work done, declared goal
   function) instead.
4. **Local entropy reduction for a project/meal/home/caregiving:** thermodynamic
   entropy bookkeeping is dominated by dissipated heat (\(\Delta S_{univ}>0\)
   always); configurational "tidiness" has no canonical microstate ensemble.
   Statements like "love decreases entropy" are **prohibited** as physics.
5. **Measurable entropy of functional organization?** Not non-arbitrarily, outside
   formal spaces. Refuse.
6. **Functional information:** rigorous where configuration space + function assay
   are explicit [hazen2007]; usable for code artifacts (test suite = function assay);
   not for homes or care. Narrow import only.
7. **Relations among dissipation, work, information, benefit:** independent axes.
   Energy dissipated bounds nothing about benefit; a result vector, not a formula.
8. **When does low-energy/high-information dominate?** Whenever benefit is
   information-limited, not work-limited: a 30-second warning phone call (~kJ)
   outperforms a day of manual labor (~MJ) if the information gates a large outcome.
   The framework must therefore never rank acts by joules — established by
   construction in the result vector.
9. **Rebound effects:** efficiency gains induce consumption [jevons1865-unv];
   downstream accounting must use preregistered boundaries and report gross and
   net-of-rebound separately.
10. **Downstream gain \(G_E>1\) without energy creation:** yes — control-signal
    logic. A relay's coil energy gates a circuit carrying vastly more power; the
    downstream energy has its own sources. \(G_E\) is a *causal leverage ratio* over
    flows with independent supplies, not a conversion efficiency; conservation is
    untouched because the numerator's energy never passes through the initiating act.

**Energy-flow graph (marked as mandated):**

```text
[I] food chemical energy ──T──▶ metabolism & ATP ──T──▶ neural + muscular processes
                                      │                        │
                                      L──▶ body heat           T──▶ mechanical/electrical interaction
                                                               │            │
[I] grid electricity ──T──▶ device operation ──▶ computation   L──▶ heat    U──▶ information-bearing output
                                      │                                         │
                                      L──▶ device heat                          U──▶ downstream technical/human action
                                                                                    (own [I] sources — DO NOT SUM with upstream)
[I] = independent input (summable roots)     T = transformation (never re-sum with its parent)
L = loss (contained in parent)               U = useful output (annotate; not an energy source)
```

Summation rule: total input = Σ[I] roots only. Adding ATP to food, or downstream
energy to initiating energy, violates conservation bookkeeping; the ledger encodes
this via parent/child (11 upgrades it to typed edges).

## 7. Reference comparisons and the TNT question (mandate §XIII)

Derivations (exact, conventional): \(1\) ton TNT \(=4.184\times10^9\) J, so
\(Y_{TNT}=E/4.184\times10^9\) and \(N_R=E_R/E_{project}\).
Recurring example: \(E=1.2112\) GJ → \(Y_{TNT}=0.2895\) tons; against a nominal 15 kt
reference, \(N_R=51{,}816\) projects; average power \(=1.2112\times10^9/7.776\times10^6\,\mathrm s=155.8\) W.

**The attack, sustained:** the comparison equates time-integrated metabolic
dissipation with prompt stored-energy release; the powers differ by ~17 orders of
magnitude; the project's energy is never stored or releasable; reference yields are
themselves conventional; the rhetorical pull ("my love = fraction of a bomb") is
exactly the moral-valence-on-joules error the axioms forbid; and sensational framing
would be the program's epitaph in peer review.

**Most accurate language for "the opposite of a bomb":** not negative energy —
*opposite direction of organization and opposite time-structure*: "the same physical
currency spent seventeen orders of magnitude more slowly, doing assembly instead of
disassembly — six months at the power of two light bulbs."

**Placement ruling:** nowhere in scientific reporting; on the site only as a
collapsed, off-hero thought experiment with the power-contrast warning *inside* the
same view (amend `docs/LANDING_PAGE_SPEC.md` §5 accordingly). Prefer human-scale
references, which carry no valence: 1.2112 GJ ≈ **336 kWh ≈ ~100 marathons of body
energy ≈ ~207 hot showers ≈ ~22,000 phone charges** (all recomputed this review).

## 8. Dimensional audit (mandate §XX.1)

| Quantity | Expression | Dimensions | Pass |
|---|---|---|---|
| \(E_A, E_C, \Delta\) | \(\int P\,dt\) | J | ✓ |
| \(a,\pi\) | probability | 1 | ✓ |
| \(\bar P\) | \(E/T\) | W | ✓ |
| MET energy | \(M\,[\mathrm{kcal\,kg^{-1}h^{-1}}]\cdot m\,[\mathrm{kg}]\cdot h\,[\mathrm h]\cdot4184\,[\mathrm{J\,kcal^{-1}}]\) | J | ✓ |
| \(Y_{TNT}, f_R, N_R, G_E\) | energy ratios | 1 | ✓ |
| Cost elasticity (04) | \(\partial\log\Pr / \partial\log E\) | 1 | ✓ |
| \(\sigma_\Delta^2\) | §4 | J² | ✓ |
| Delivery efficiency \(\eta\) | J/J | 1 | ✓ (only with declared boundary; else ill-posed) |

No dimensional failures found in the repository. The failures found here are semantic
(what the numbers *mean*), which is the more dangerous kind.
