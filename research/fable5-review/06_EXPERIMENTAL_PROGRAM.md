# 06 — Experimental program

Five studies, laboratory → naturalistic, each with the mandate's full protocol
skeleton. Ethical floor for all: no induced emotional distress beyond minimal-risk
questionnaires; no gesture is ever delivered to a recipient who has not opted in; no
deception about recipients; participants may not be told any score that ranks their
relationship; welfare stopping rules override science. Confirmatory analyses are
those preregistered with alpha allocation; everything else is labeled exploratory.

---

## S1 — Recipient-randomized calibrated physical-effort task (flagship; Gate G1)

- **Hypothesis (H1, sharpened):** with delivered benefit held constant, the effort
  supply curve shifts with recipient category: partner/child > close friend >
  acquaintance > stranger ≥ self-baseline ordering on willingness at high cost.
- **Estimand:** \(\varepsilon(R)-\varepsilon(\text{stranger})\), the difference in
  cost elasticity of acceptance probability (04 §T1); secondary: force exerted
  (superficiality margin, following [lockwood2017]).
- **Design:** within-person 5 (recipient) × 6 (cost level, calibrated % of measured
  maximum on cycle ergometer / grip dynamometer, converted to joules via
  ergometer work) × 2 (audience: private vs. experimenter-visible choice), fully
  randomized trial order; benefit = fixed voucher to the named recipient
  (recipient pre-consented).
- **Causal graph:** randomization severs recipient ← person traits; audience arm
  identifies signaling contribution; force sensor gives a non-self-report DV.
- **Inclusion/exclusion:** adults 18–65 with a consenting partner/close friend;
  exclusion: cardiovascular contraindications (PAR-Q+), current relationship-abuse
  indicators (safety), grip pathology.
- **Power:** within-person designs on prosocial-effort contrasts have detected
  self/other effects with n≈50–100; for the smaller partner-vs-friend contrast
  assume d≈0.25 → n≈120 completers for 90% power at α=.005 (confirmatory contrast
  pre-specified); simulate from a pilot of 20 before locking n.
- **Instruments:** ergometer with work readout (J); calibrated dynamometer; indirect
  calorimetry subsample (n=30) to convert external work to metabolic cost.
- **Randomization/blinding:** computerized; analysts blinded to recipient labels
  (coded); hypotheses not disclosed to participants.
- **Statistical model:** hierarchical logistic acceptance model
  \(\text{logit}\Pr=\alpha_j+\beta_R+\gamma\log c+\delta_R\log c+\text{audience terms}\);
  Bayesian fit; confirmatory posterior contrast on \(\delta_{partner}-\delta_{stranger}\).
- **Missing data:** trial-level MCAR plausible (equipment); person dropout modeled;
  sensitivity: worst-case imputation on confirmatory contrast.
- **Negative control:** recipient shown but reward delivered to self on 20% of
  trials (labeled) — recipient effects should vanish; if they persist, demand
  characteristics are driving results.
- **Falsification checks:** no recipient×cost interaction in two adequately powered
  preregistered samples → **G1 fails**.
- **Ethics/consent:** recipients consent to being named and to receiving vouchers;
  no feedback comparing recipients is ever shown; effort capped at moderate
  intensity; stop on any adverse event.
- **Stopping rules:** sequential Bayes factor monitoring with preregistered
  thresholds; hard stop at n_max.
- **Expected failure modes:** ceiling effects (costs too easy) — pilot the cost
  grid; partner-voucher fungibility (money returns to household) — add non-fungible
  benefit arm (donated hours to recipient's chosen cause).
- **What would change my mind:** clean null on the flagship contrast with
  demonstrated manipulation checks → I would conclude relationship category does
  not act on the *energetic* margin and the love-specific program should merge into
  generic prosocial-effort research.

## S2 — Effort discounting across recipients with joule calibration

- **Hypothesis:** effort-discount parameters are recipient-dependent and correlate
  with, but are not reducible to, monetary social discounting [jones2006].
- **Estimand:** per-recipient discount parameter \(k_R\) in a parabolic/hyperbolic
  effort-cost model, effort expressed in calibrated joules; cross-currency
  correlation \(\rho(k_R^{effort}, k_R^{money})\).
- **Design:** choice titration (small reward for recipient at low effort vs. larger
  at high effort), interleaved money-frame block; within-person recipients as S1.
- **Key inference:** if \(\rho\to1\), the energy denomination is redundant with
  money — a *cheap early warning for G2* before any field spending.
- **Power:** parameter-recovery simulation targeting SE(\(k\)) < 25% of expected
  between-recipient spread; n≈80.
- **Negative control:** computer-recipient trials (no human beneficiary).
- **Stopping/ethics:** as S1 (choices only; execution of a random subset to keep
  choices incentive-compatible).
- **Failure modes:** discount-model misspecification (fit family comparison,
  preregistered); choice-execution decoupling.
- **Changes my mind:** \(\rho>0.9\) with tight interval → joule framing adds nothing
  in the lab; program narrows to field feasibility only.

## S3 — Naturalistic project ledger with power metering and preregistered counterfactuals (Gate G3)

- **Hypothesis (H4 + feasibility):** allocated throughput and induced energy are
  empirically distinct (projects with similar \(E_A\) diverge in \(\Delta(s)\));
  total uncertainty is small enough to make between-scenario differences visible.
- **Estimands:** \(E_A\) (posterior), \(\Delta(s)\) for a preregistered 4-scenario
  menu (rest / typical-leisure / paid-work / project-for-money), \(\pi\)-bounds from
  prospective evidence (04 §3 surrogates 2–4).
- **Design:** n=20 adults each pursuing one voluntarily chosen commitment-linked
  project ≥8 weeks; wall-meters on named devices; wearable + weekly diary
  time-use; RMR calorimetry at intake; **prospective** motive records (daily 2-item
  EMA before outcomes known); blinded attribution panel codes evidence to interval
  \([\pi^{lo},\pi^{hi}]\) per act class.
- **Causal status:** Tier-2 (04 §6): scenario-conditional descriptive causality;
  **no point \(\pi\)** will be published.
- **Inclusion/exclusion:** projects with meterable device footprint; exclude
  projects whose recipient has not consented to be referenced.
- **Power/precision target:** posterior SD(\(E_A\)) ≤ 8%; scenario contrasts
  separated at 90% for scenarios differing by ≥150 MJ (from 03 §5 grid, differences
  of interest are 200–970 MJ — feasible on paper; that is what the pilot tests).
- **Missing data:** meter dropout interpolated by device-state model; wearable gaps
  by activity-class prior; all gaps flagged in the published chain.
- **Negative controls:** (i) a matched non-commitment project per participant
  (hobby for self) — the attribution panel should assign it low \(\pi^{hi}\); (ii) a
  no-project control week per person (baseline drift check).
- **Falsification checks:** if \(\Delta(s)\) intervals for all scenario pairs
  overlap ~completely for most participants → the allocated/induced distinction is
  empirically idle (H4 fails — would be genuinely surprising and important).
- **Ethics:** household members consent to home metering; data minimization per 05
  §5; no publication of identifiable project descriptions.
- **Stopping:** per-person hard stop on welfare flags (sleep <6h sustained,
  self-reported strain) — the study must not incentivize overwork (payment is
  flat, not effort-contingent).
- **Failure modes:** scenario menu too coarse; device attribution ambiguity
  (shared computers); reactivity (metering changes behavior — quantify via
  first-week discontinuity).
- **Changes my mind:** total uncertainty swamping scenario contrasts → field
  program dies (G3), lab program continues.

## S4 — Caregiving energy transfer study

- **Hypothesis:** caregiver-to-recipient *delivered* energy (meals, heating share,
  transport) and caregiver bodily expenditure are measurable to useful precision,
  and load-sharing (partnered caregivers) reduces per-caregiver induced energy for
  equivalent delivered benefit (social-baseline prediction [beckes2011]).
- **Estimands:** delivered energy (J, by category); caregiver TDEE (DLW subsample
  n=12); induced energy vs. preregistered no-caregiving scenario; benefit (recipient
  ADL/QoL instruments), burden (Zarit), consent/authorization documentation as
  first-class data.
- **Design:** n=30 caregiver–recipient dyads (eldercare), 4-week windows ×2;
  household submetering; food-energy by photographed-meal analysis; fuel from
  vehicle telemetry.
- **Power:** precision-targeted (CI on delivered energy ≤15%); dyad-level
  load-sharing contrast powered by simulation from pilot variance.
- **Negative control:** delivered-energy accounting for a boarder/tenant
  relationship (transfer without commitment) — separates logistics from care.
- **Ethics (heaviest here):** recipient capacity assessment; assent + proxy consent
  protocols; caregiving is never manipulated — observational energetics only;
  immediate referral pathways if burden scores cross clinical thresholds.
- **Falsification:** delivered-energy measurement unreliable (test–retest ICC<0.6)
  → the "energy transfer" construct is not field-measurable.
- **Changes my mind:** if delivered energy tracks nothing about benefit or burden
  in any direction, the transfer ledger is bookkeeping without science.

## S5 — Longitudinal motive-and-behavior cohort (Gate G2)

- **Hypothesis (H2/C-011):** baseline energetic behavior (S1-style task parameters
  + 2-week passive ledger features) adds out-of-sample predictive value for
  12-month commitment-relevant outcomes (relationship persistence, enacted support
  during partner illness/exams, investment acts) beyond validated self-report
  (attachment, investment-model scales [rusbult1980]).
- **Estimand:** \(\Delta\)AUC / \(\Delta R^2\) (preregistered) of model B (self-report
  + energetics) over model A (self-report), evaluated on a held-out season.
- **Design:** n≈300 couples/dyads; quarterly bursts (task + 2-week ledger + EMA);
  outcomes adjudicated by blinded coders; DAG-3 honesty: analyses are predictive,
  time-ordered, with cross-lagged models exploratory only.
- **Power:** for detecting \(\Delta\)AUC ≈ 0.04 at 80%: n≈300 with ~20% outcome base
  rate (simulate before lock).
- **Missing data:** attrition modeled (IPW + pattern-mixture sensitivity);
  attrition itself reported as an outcome (differential attrition by energetic
  behavior would be informative and must not be discarded).
- **Negative control outcome:** prediction of an unrelated outcome (job change) —
  energetic features should *not* add value there; if they do, they are proxying
  general conscientiousness/energy, not commitment (construct-validity check).
- **Falsification:** \(\Delta\)AUC ≤ 0 in the confirmatory season → **G2 fails**;
  the joule denomination is decorative and the program merges.
- **Ethics:** couple data governance (each partner controls own streams; breakup
  protocol pre-specified — data use pauses pending re-consent).
- **Changes my mind:** this is the study most likely to kill the program, and it is
  designed so that its null is publishable and dignified.

---

## Program-level rules

1. **Order:** S1→S2 before any field spend; S2's cross-currency correlation is the
   cheap kill-switch. S3 before S4/S5 commit serious money.
2. **Preregistration:** OSF, with the claim-ledger IDs each study bears on (C-006,
   C-007, C-010, C-011) named in the registration.
3. **All nulls published.** The roadmap's gate rule ("claims advance only when
   evidence does") is affirmed and extended: *the program's continuation itself* is
   contingent on G1–G3 outcomes, per the executive verdict.
4. **No study output ever displays a per-person or per-relationship ranking.**
