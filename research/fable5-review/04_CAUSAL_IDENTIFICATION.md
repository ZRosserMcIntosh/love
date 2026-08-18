# 04 — Causal identification

This file does the load-bearing statistical work: what, exactly, can be known about
\(a\), from what designs, and what must be reported when point knowledge is
impossible. Conclusion up front: **\(a\) is a probability of necessity; it is
partially identified in every realistic design; the program survives by reporting
bounds and by moving its headline claims to estimands that do not require \(a\) at
all** (category contrasts from randomized designs).

## 1. Estimands, stated properly

Let \(A\) = act, \(M\) = focal commitment (02 §3), \(E\) = boundary energy,
\(R\) = recipient category. Potential outcomes \(A(m)\), \(E(a\text{-level})\).

- **T1 (lab, primary): recipient-category effect on energetic cost tolerance.**
  \(\theta(c,R)=\Pr\big(A=1\mid \text{energy cost }c,\ R\big)\) and the elasticity
  \(\varepsilon(R)=\partial\log\theta/\partial\log c\). Contrast
  \(\varepsilon(\text{partner})-\varepsilon(\text{stranger})\), benefit held fixed.
  Identified by randomization of \(R\) and \(c\) within person. **No \(a\) anywhere.**
- **T2 (field): scenario-conditional induced energy.**
  \(\Delta(s)=E_A-E_C(s)\) per declared scenario. Identified up to measurement error
  *given the scenario declaration* (the scenario is an assumption, not an estimate —
  honesty lives in the label).
- **T3 (field): motive-necessity weight.** \(\pi=\text{PN}\) as in 03 §2. Partially
  identified; the subject of this file.
- **T4 (longitudinal): incremental predictive validity.** Out-of-sample gain in
  predicting commitment-relevant outcomes from energetic behavior beyond self-report
  (a prediction claim, not a causal one — deliberately, since it survives DAG-3
  feedback).

## 2. What the attribution coefficient is (and the menu from mandate §VI, adjudicated)

| Candidate representation | Ruling |
|---|---|
| Potential-outcome contrast | **Adopted** as the definition layer: \(\Delta=E(A{=}1)-E(A{=}0)\), with §3's PN weighting for necessity. |
| Stochastic interventions | **Adopted for realism** where "remove the commitment" is ill-defined: define soft interventions (shift commitment salience/opportunity) and report policy-relevant contrasts \(\mathbb E[E\mid\sigma_1]-\mathbb E[E\mid\sigma_0]\). This is the honest version of "what if less in love" — a *distributional* shift, not annihilation. |
| Mediation analysis | **Adopted narrowly**: decomposes *pathways* (commitment → time reallocation → device energy vs. commitment → intensity), needed for the throttle case (03 §2 item 9). Sequential-ignorability assumptions are strong; label accordingly. |
| Attributable fractions | **Adopted** as the population analogue (share of aggregate energy attributable to commitment across a cohort) [levin1953-unv; robins1989-unv]. |
| Structural causal models | **Adopted** as the formalism in which G1–G4 and all failure modes are stated [pearl2009]. |
| Causal Shapley values | **Demoted** — §5. |
| Principal stratification | **Adopted as the clarifying lens** — §3. |
| Partial identification / bounds | **Adopted as the default output form** [manski1990; tianpearl2000]. |
| Bayesian model averaging | Permitted for parametric *measurement* models; **rejected** for averaging over counterfactual scenarios (03 §5) — weights unidentifiable. |
| Information-theoretic responsibility | **Rejected for weighting energy** (degree-of-responsibility schemes à la structural-model blame [chockler2004-unv] are ordinal conventions; multiplying joules by them manufactures precision). May inform qualitative discussion only. |

## 3. Partial identification of \(\pi\) (probability of necessity)

Principal-strata reading: among observed committed actors \((M{=}1, A{=}1)\), the
population splits into **always-actors** (would act anyway: money, habit, duty
suffice) and **motive-compliers** (act only with the commitment). Then

\[
\pi=\frac{\Pr(\text{complier})}{\Pr(\text{complier})+\Pr(\text{always-actor})}.
\]

Monotonicity = "no defiers" = commitment never *prevents* the act. **Not safe in
general**: love sometimes prevents contact (protective no-contact during a
recipient's recovery; respecting a refusal). Where defiers are plausible, use the
no-assumption bounds.

**Tian–Pearl bounds** (combined experimental + observational data) [tianpearl2000],
transcribed to this setting with \(x=M{=}1\), \(y=A{=}1\):

\[
\max\left\{0,\ \frac{\Pr(A{=}1)-\Pr(A{=}1\mid do(M{=}0))}{\Pr(A{=}1,M{=}1)}\right\}
\ \le\ \pi\ \le\
\min\left\{1,\ \frac{\Pr(A{=}0\mid do(M{=}0))-\Pr(A{=}0,M{=}0)}{\Pr(A{=}1,M{=}1)}\right\}
\]

with point identification under exogeneity + monotonicity. The practical obstruction
is stark: **\(do(M{=}0)\) — removing a real commitment — cannot be randomized.**
Feasible surrogates, in decreasing credibility:

1. **Recipient/beneficiary randomization (lab):** vary who benefits; treats
   commitment *activation* as the manipuland. Identifies category-level effects (T1)
   cleanly; calibrates the *response surface* used to bound \(\pi\) in the field.
2. **Incentive augmentation:** experimentally add/remove payment for the same act;
   maps \(\Pr(A\mid \text{incentive level})\). If a person performs the act at zero
   external incentive and matched controls (no commitment) require \(\lambda^*\) of
   incentive to act, \(\lambda^*\) measures the commitment's *incentive-equivalent
   margin* (§5, Alternative B) and bounds the always-actor share.
3. **Matched-population base rates:** \(\Pr(A\mid do(M{=}0))\approx\) act frequency
   among matched persons without the commitment (or the same person's pre-commitment
   history). Transparency requirement: this is an *assumption-laden proxy*
   (selection on unobservables), so it widens the bounds rather than replacing them.
4. **Prospective self-prediction** ("would you have built this anyway?"): admissible
   as prior evidence only; retrospective versions are contaminated by effort
   justification (02 DAG-3).

**G4 simulation duty (from 00):** before any field study, simulate realistic designs
(sample sizes, proxy quality) and check the resulting bound widths. If
\([\pi_{lo},\pi_{hi}]\) spans most of \([0,1]\) in every feasible design, drop \(\pi\)
from field reporting and publish scenario contrasts \(\Delta(s)\) only. The framework
must prefer honest coarseness to fake resolution.

## 4. Mixed motives: the decomposition problem (mandate §VII)

Setup: motive set \(\mathcal M=\{\text{love},\text{duty},\text{money},\text{status},
\text{fear},\text{guilt},\text{habit},\text{reciprocity}\}\), coalition value
\(v(S)\) = propensity of the act when exactly the motives in \(S\) are active.

**The seven Shapley questions, answered:**

1. **What should \(v(S)\) be?** The only version compatible with 03's derivation is
   \(v(S)=\Pr(A{=}1\mid \text{motive profile }S)\); energy then enters as
   \(\Delta\cdot\phi_m/\sum\phi\) or via \(v(S)=\mathbb E[E\mid S]\). Both require
   knowing behavior under \(2^{|\mathcal M|}\) counterfactual motive profiles
   (256 here).
2. **Are the axioms appropriate?** Efficiency (credits sum to the whole effect)
   forces additive allocation over motives that are *jointly necessary* — splitting
   credit for an outcome no subset could produce. That split is a convention with no
   psychological or causal referent. Symmetry is fine; **linearity/dummy are fine;
   efficiency is the poison pill.**
3. **Can motive-coalition counterfactuals be observed?** No. Motives cannot be
   switched independently (removing "duty" while keeping "love" fixed is not an
   executable intervention; the motives are not modular — they share causes and
   constitute one another, 02 §1). Lab proxies exist for two knobs only (incentive,
   audience); the rest are fiction.
4. **Would it create false precision?** Yes — eight decimal-placed \(\phi_m\) from
   256 unobservable cells is the definition of false precision.
5. **Can monotonicity be assumed?** (adding a motive never lowers act propensity) —
   No: motivation crowding is documented (adding payment can *reduce* intrinsic
   helping [frey1997-unv; gneezy2000-unv]). Crowding is precisely a violated
   monotonicity, and it is central to this domain.
6. **Bounds without monotonicity:** with only observable margins (act propensity
   under observed profiles) the linear-programming relaxation gives wide but honest
   bounds on each \(\phi_m\)-analogue; expect near-vacuity — which is the finding.
7. **Experiments for interaction terms:** within-person factorial: recipient
   (commitment activation) × payment (0/low/high) × audience (private/observed) on
   calibrated effort supply (S1 design). Identifies two-way interactions among the
   three manipulable motives; the rest stay latent. Preregister the interaction
   contrasts.

**Verdict on Shapley:** demote to *speculative sensitivity exercise*; never a primary
output (revises C-009 toward rejection). The LCA precedent (01 §18) predicts the end
state: standardized *disclosure* of allocation assumptions, not a true allocation.

**Two non-Shapley alternatives (mandated):**

- **A. Necessity–sufficiency profile.** For each motive (or declared complex):
  report \((\text{PN}_m, \text{PS}_m)\) bounds — was it necessary? would it have
  sufficed alone? No additivity is forced; jointly-necessary coalitions show up
  honestly as "each necessary, none sufficient." Data needs: the §3 surrogates.
- **B. Incentive-equivalent margin (compensating variation).** Use the one
  dose-controllable motive — money — as a measuring rod: \(\lambda^*_m\) = external
  incentive change that reproduces the behavioral effect of activating/deactivating
  motive \(m\) (e.g., "her presence on the beneficiary line moves this person's
  effort supply as much as +$X"). Fully identifiable in the lab; interpretable;
  makes no claim to decompose joules. Cost: money-metric framing invites its own
  misreading ("your love is worth $X") — mitigate with labeling; and crowding
  effects make \(\lambda^*\) context-dependent — report per context.

| Property | Shapley | A: PN/PS profile | B: incentive margin |
|---|---|---|---|
| Counterfactuals required | \(2^{|\mathcal M|}\), unobservable | pairwise, partially proxied | one controllable dial |
| Identifiable today | no | bounds | yes (lab) |
| Forces additivity | yes (efficiency) | no | no |
| Robust to crowding | no (monotonicity) | yes (bounds absorb it) | measures it directly |
| False-precision risk | high | low | medium (money framing) |
| Recommended role | sensitivity appendix | **default field output** | **default lab output** |

## 5. Identification failure modes to preregister against

1. **Reverse causation (DAG-3):** effort builds commitment; cross-sectional \(a\)
   estimates are upward-biased for long relationships. Cure: time-indexed estimands,
   pre-commitment baselines, g-methods for time-varying confounding [hernan-robins].
2. **Selection on acts:** studying only performed acts conditions on \(A=1\)
   (collider). Denominators need opportunity sets (acts *not* taken), which field
   protocols must log — a hard but non-negotiable requirement.
3. **Strategic reporting:** motives are presented, not just reported — especially
   under observation. Audience randomization and prospective records are the only
   partial cures; retrospective motive interviews are inadmissible as primary
   evidence (upgrades `docs/MEASUREMENT_AND_FALSIFIABILITY.md` "insufficient" to
   "inadmissible").
4. **Construct drift:** \(M\) redefined mid-study (love→attachment→habit) silently
   changes the estimand. The claim ledger must pin the \(M\)-definition per study.
5. **Boundary shopping:** choosing \(\mathcal B\) after seeing results to maximize
   the headline. Boundaries preregistered, deviations reported.

## 6. What may be claimed at each evidence tier

| Tier | Design | Claimable |
|---|---|---|
| 1 | Randomized lab (S1–S2) | Category-level causal effects on energetic behavior; incentive margins; interactions among manipulable motives |
| 2 | Instrumented field with preregistered scenarios (S3–S4) | \(E_A\) (measured), \(\Delta(s)\) per scenario, \(\pi\)-bounds; **no point** \(\pi\) |
| 3 | Longitudinal cohort (S5) | Predictive (not causal) incremental validity; time-ordered associations |
| 4 | Retrospective/self-report only | Nothing quantitative about causation; hypothesis generation only |

This table is the enforcement mechanism for F2 and belongs in the public methods page
verbatim.
