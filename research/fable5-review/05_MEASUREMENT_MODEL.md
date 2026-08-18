# 05 — Measurement model

Covers mandate §IX (bioenergetics), §XI (probabilistic model), §XII (normalization
and fairness). Governing principle: **uncertainty must grow monotonically along the
inference chain** wall-meter → whole-body → activity-specific → motive-attributed;
any pipeline in which reported precision *increases* down that chain is broken by
construction.

## 1. Definitions, formally distinguished (mandate §IX)

| Quantity | Definition | Typical magnitude (70 kg adult) | Measurement |
|---|---|---|---|
| BMR | Energy rate, postabsorptive, thermoneutral, awake, at complete rest, morning | ~65–80 W | Direct/indirect calorimetry under strict protocol |
| RMR | As BMR, relaxed conditions | ≈ BMR + a few % | Indirect calorimetry [weir1949] |
| TDEE | Total daily expenditure | ~90–130 W averaged | Doubly labelled water (DLW) over 1–3 weeks [lifson1966; speakman1997; iaea-dlw] |
| TEF | Thermic effect of food | ~10% of intake | Post-meal calorimetry |
| AEE | Activity energy expenditure | TDEE − RMR − TEF | Derived |
| Gross vs net activity energy | Total during activity vs. total minus resting baseline | — | Convention must be declared; MET arithmetic is *gross* |
| Standard vs measured MET | 1 MET := 1 kcal·kg⁻¹·h⁻¹ (≈3.5 mL O₂·kg⁻¹·min⁻¹) vs. individual RMR | — | The standard was derived from **one 70 kg, 40-year-old man** [byrne2005] |
| Whole-brain metabolism | ~20% of resting metabolism | ~15–20 W | PET/whole-body partition [raichle2002; attwell2001] |
| Regional task-evoked change | Local metabolic increase during tasks | small; global change ~1% | fMRI/PET contrasts |
| Subjective cognitive effort | Felt exertion | not an energy | Self-report; **do not convert to joules** |
| Stress physiology | Cortisol, sleep loss, appetite change | — | Recorded as *harm-side* covariates (see §5) |

**The MET approximation, derived and demoted.**
\(E=M\cdot m\cdot h\cdot4184\): \([\mathrm{kcal\,kg^{-1}h^{-1}}][\mathrm{kg}][\mathrm h][\mathrm{J\,kcal^{-1}}]=\mathrm J\).
Why it is not individualized precision: (i) measured resting metabolism deviates from
the 1 kcal·kg⁻¹·h⁻¹ convention by ±20%+ across body compositions — in Byrne et al.'s
sample (769 adults) the convention *overestimated* measured RMR substantially
[byrne2005]; (ii) compendium METs are population means for activity *labels*, not
your activity [ainsworth2011; herrmann2024]; (iii) RMR does not scale linearly with
mass. Individual error easily ±20–30%. Ruling: MET arithmetic is for illustration and
priors; any published human number uses measured RMR or DLW anchoring.

## 2. The mandate's ten §IX questions, answered

1. **Months-long project energy:** anchor TDEE with DLW in 2+ windows; continuously
   classify activity (time-use log + wearable); allocate AEE to activity classes;
   meter external devices directly. Never sum wearable-EE with DLW (double counting;
   DLW is the constraint, wearables the interpolator).
2. **DLW appropriate when:** free-living totals over 1–3 weeks matter and ~$1k-order
   per-measurement cost is affordable; it gives totals, not activity resolution.
3. **Indirect calorimetry necessary when:** session-level precision or individual
   MET/RMR calibration is claimed (S1 lab tasks; RMR anchoring in S3/S4).
4. **Consumer-wearable error:** energy-expenditure MAPE commonly **>30%**, direction
   inconsistent across brands/activities [odriscoll2020]. Model: multiplicative
   device bias × activity-class bias × noise (§7); never use manufacturer kcal as
   ground truth.
5. **Sleep loss, stress, altered eating:** measure (actigraphy, EMA, cortisol
   subsample) and report **only in the harm/burden column**. They increase energy
   *cost* of the commitment while degrading the actor — a devotion score that grows
   with self-destruction is prohibited (00 F5b); protocols carry welfare stopping
   rules (06).
6. **Brain vs body double counting:** whole-brain (~20% RMR) is *contained in* body
   totals — display as child flow only (the ledger already supports this; keep).
7. **Defensible task-specific incremental brain energy:** regional task-evoked
   changes are small; global increments over rest ~O(1%) of brain energy — for a
   ~18 W brain, single-digit-percent increments ≈ **0.2–1 W** order. Any claim above
   ~1 W sustained incremental "thinking energy" for a cognitive task is presumptively
   wrong [raichle2002].
8. **Can thought-about-a-person be energetically attributed?** **No.** Current
   methods cannot assign joules to thought *content*. The program must refuse this
   estimate (and does, after this review: revised C-ledger, new claim C-019).
9. **How should uncertainty grow along the chain?** Multiplicatively, and it must be
   *shown*: wall-meter ±2% → whole-body (DLW) ±5–8% → activity-allocated ±15–30% →
   motive-attributed: **interval-valued** (bounds from 04). Publishing rule: every
   figure displays its chain position.
10. **Useful claims while refusing thought-energy?** Yes: all four estimand classes
    T1–T4 (04 §1) are behavior-level. The refusal costs nothing but rhetoric.

## 3. Instrument hierarchy (confirming and hardening `docs/MEASUREMENT_AND_FALSIFIABILITY.md`)

Body: calorimetry > DLW > individually calibrated HR+accelerometry > population MET >
consumer wearables (with modeled error only). External: revenue-grade meters >
device-level watt meters > utility/cloud records > engineering estimates (declared
uncertainty). Embodied: documented LCA boundary [iso14040], never mixing average and
marginal intensities without justification. **Addition:** all device clocks NTP-synced;
time-base misalignment is a first-order error source in interval attribution.

## 4. What is measured vs. modeled vs. declared (the honesty ledger)

| Layer | Status |
|---|---|
| Device energy, fuel, meals-as-delivered | **Measured** |
| Body energy | **Measured-with-model** (calibration anchors + interpolation) |
| Activity classification | **Modeled** (misclassification matrix estimated) |
| Counterfactual scenario energy \(E_C(s)\) | **Declared + modeled** (scenario is an assumption; its energy is then estimated) |
| Attribution \(\pi\) | **Bounded** (04) |
| Benefit \(B\), harm \(H\), consent \(C\) | **Measured in their own units** (recipient-reported outcomes, validated scales, documented authorization) — never joules |

## 5. Ethics-of-measurement constraints (binding on every protocol)

1. No published quantity may increase monotonically with self-harm markers.
2. Recipients are participants: consent for recipient-linked data, separately.
3. No cross-person rankings; within-person time series only.
4. Raw location/message/content data stay out of the research record (repo data
   policy affirmed); energy features only.
5. A participant's data become unpublishable on withdrawal — design pipelines for
   deletion.

## 6. Normalization and fairness (mandate §XII, each candidate adjudicated)

Raw joules confound body mass, disability, climate, wealth (delegation), duration,
and inefficiency. Candidates:

| Normalization | Definition / units | Question it answers | Unfairness mode | Gaming mode | In core? |
|---|---|---|---|---|---|
| Share of TDEE | \(E_{attr}/E_{TDEE}\), 1 | "What fraction of this life's energy throughput?" | Penalizes high-TDEE laborers (denominator inflation) | Lower your TDEE | **Yes** (descriptive) |
| Share of discretionary energy | \(E_{attr}/E_{disc}\), 1 | "Of energy you could steer, how much went here?" | Requires defining "discretionary" — normative smuggling | Reclassify obligations | Yes, **only** with published discretionary definition |
| Energy per unit time | W | "How intense?" | Penalizes the time-rich poor; favors burst gestures | Compress bursts | Yes (physics, neutral) |
| Energy per unit benefit | J per benefit-unit | "Efficiency of care" | **Punishes hard cases** (severe disability care yields low measured B per J) | Choose easy recipients | **No** — anti-recommended for any evaluative use |
| Relative to own baseline | percentile of person's history, 1 | "Unusual for *this* person?" | Fair across bodies/disability — the best fairness property in the table | Sandbag your baseline | **Yes** (primary within-person display) |
| Cost elasticity | \(\partial\log\Pr(\text{act})/\partial\log c\), 1 | "How does willingness respond as cost rises?" | Lab-bound; needs many observations | Hard to game (behavioral) | **Yes** — the flagship lab quantity |
| Opportunity-energy frontier | distance from efficient frontier | "How much more than necessary?" | Frontier rarely identifiable | Define frontier conveniently | No (research-only) |
| Exergy efficiency | \(\eta_{ex}\), 1 | "Useful work per exergy input" (machines) | Ill-defined for human care | — | Machine flows only |

**Never** name any of these "love intensity" (mandate; enforced in 07's warnings).

## 7. The joint probabilistic model (mandate §XI)

Hierarchical candidate (person \(j\), interval \(k\), activity class \(c\), device
\(d\), scenario \(s\)):

**Measurement layer**
\[
P^{meter}_{jkd}=P^{true}_{jk}\cdot\beta_d\cdot(1+\varepsilon_{jkd}),\quad
\varepsilon\sim\mathcal N(0,\sigma_d^2),\ \ \beta_d\sim\text{LogNormal}(0,\tau_d^2)
\]
\[
z_{jk}\sim\text{Categorical}(\rho_j)\ \text{(true activity)},\qquad
\hat z_{jk}\mid z_{jk}\sim\text{Confusion}(\Theta)\ \text{(classifier)}
\]
**Body-energy layer**
\[
\mathrm{RMR}_j\sim\mathcal N\big(\mu_{\text{pred}}(m_j,\text{age},\text{sex}),\sigma_{\mathrm{RMR}}^2\big)
\ \text{(anchored by calorimetry where available)}
\]
\[
P^{body}_{jk}=\mathrm{RMR}_j\cdot M_{z_{jk}},\qquad M_c\sim\text{LogNormal}(\log \hat M_c,\sigma_M^2)\ \text{(compendium prior)}
\]
**Counterfactual layer** (per declared scenario \(s\); no averaging across \(s\))
\[
E^C_{j}(s)=\textstyle\sum_k \mathrm{RMR}_j M_{c_s(k)}\Delta t_k + E^{dev}_s,\quad
\text{with scenario-internal coherence enforced (one world per } s)
\]
**Attribution layer** — *not* a prior-to-posterior update pretending identification:
\(\pi_j\) enters as an **interval** \([\pi^{lo}_j,\pi^{hi}_j]\) from 04 §3 evidence;
where a hierarchical prior is used for sensitivity, \(\pi_j\sim\text{Beta}(\alpha,\beta)\)
with hyperpriors spanning the identified set, and results reported across the prior
family (robust-Bayes), because the likelihood is flat in \(\pi\) over the set.

**Error correlations** (mandated): device biases shared within brand; MET priors
shared across persons; \(\mathrm{cov}(\pi, E^C)\) induced by shared scenario evidence —
represented by joint draws, never independent sampling.

**Deliverables of the model:** posterior for \(E_A\); scenario-indexed posteriors for
\(\Delta(s)\); *set-valued* summaries for \(\pi\)-weighted quantities:
\(\big[\pi^{lo}\Delta(s),\ \pi^{hi}\Delta(s)\big]\) with \(\Delta(s)\) uncertainty
propagated by simulation (03 §4 shows why: mixtures are bimodal).

**Checks (mandated):**
- *Posterior predictive:* reconstruct daily kWh vs. utility meter; daily kcal vs. DLW
  window totals; misclassification-adjusted activity marginals vs. diary audits.
- *Simulation-based calibration:* simulate full pipelines from priors, refit, check
  rank-uniformity of posterior quantiles; run **before** first real participant.
- *Pseudo-precision guard:* automated check that reported interval widths are
  non-decreasing along the §2.9 chain; any violation blocks the report. This
  single mechanical rule prevents the field's most likely self-deception.

## 8. Public reporting format (binding)

Every public quantity: **median, central 90% interval, scenario label, attribution
bounds, boundary, chain position, engine version.** Example (recurring case, television
scenario, illustrative bounds \(\pi\in[0.3,0.9]\)):

> Boundary throughput 1,211 MJ [meters ±2%]. Induced energy under scenario
> "television evening": −389 MJ (the commitment *saved* energy). Motive-necessity
> bounds [0.30, 0.90] → attributed induced energy between −350 and −117 MJ.
> No point estimate exists; the width is the finding.
