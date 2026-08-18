# 10 — Revised claim ledger

Statuses after this review. Changes from `research/CLAIM_LEDGER.md` are **bolded**;
unchanged rows are carried with their rationale re-verified. Status vocabulary
unchanged (Established / Adapted / Proposed / Speculative / Falsified / Unresolved).

| ID | Claim | Status after review | Notes / required action |
|---|---|---|---|
| C-001 | Physical energy is conserved. | Established | Cite standard text at publication. |
| C-002 | 1 thermochemical kcal = 4,184 J. | Established | [nist-sp811]. |
| C-003 | 1 conventional ton TNT = 4.184 GJ. | Established | [nist-sp811]; "conventional" must always accompany it. |
| C-004 | MET values give population-level approximations. | Established | [herrmann2024; ainsworth2011] **with the Byrne caveat now mandatory:** individual error ±20–30% [byrne2005]. |
| C-005 | Actual and counterfactual energy should be reported separately. | Adapted → **strengthened** | Now derived, not just asserted: the two quantities answer different estimands (03 §2–3). |
| C-006 | Allocated energy \(aE_A\) is a useful quantity. | **Proposed → Falsified as a headline scalar; Adapted as labeled expectation** | No causal referent; two-spiked distribution; gameable by inefficiency (03 §3). Survives only as \(\mathbb E\)-notation inside computations. Public replacement: \((E_A,\ \pi\text{-bounds})\) pair. |
| C-007 | Induced energy \(a(E_A-E_C)\) is a useful quantity. | **Proposed → Adapted (conditionally established as mathematics)** | Derivable as expected causal effect under gating model with \(a=\)PN (03 §2). Empirical usefulness still requires G1–G3. |
| C-008 | A love-attribution coefficient can be estimated reliably. | **Unresolved → Partially falsified / narrowed** | Point estimation: no (04 §3, Tian–Pearl). Bounded estimation: open, testable (G4). Claim rewritten as C-008′: "PN bounds informative enough to matter" — Unresolved. |
| C-009 | Shapley decomposition may allocate energy among motives. | **Speculative → Rejected for core** | Coalition counterfactuals unobservable; efficiency axiom inappropriate; crowding violates monotonicity (04 §4). Sandbox-only. |
| C-010 | Relationship category changes energetic cost elasticity. | Proposed | Now the flagship claim; S1 designed; priors from [lockwood2017; jones2006]. |
| C-011 | Energetic behavior adds predictive information beyond self-report. | Proposed | Gate G2 (S5); the program's survival claim. |
| C-012 | High expenditure indicates stronger/better love. | Falsified as general inference | Reinforced by counterexample table (09 §A) and signaling theory (cost-inflation under observation). |
| C-013 | Love is a new physical energy/force. | Falsified / prohibited | Unchanged. |
| C-014 | "Constructive joules" differ physically from destructive ones. | Falsified as physics | Reaffirmed with the thermodynamic analysis (03 §6.3): "constructive" is goal-relative annotation. |
| C-015 | Downstream energy gain can measure causal energetic leverage. | Proposed | Legitimate with two-boundary discipline and rebound netting (03 §6.9–10, 07 A16); never summed with initiating energy. |
| C-016 | Agapodynamics is a novel scientific field. | **Unresolved → Narrowed** | Components: not novel. Integration + two protocols: plausibly novel (01 §Novelty decomposition). "Field" status unearned until G1–G2 pass; until then it is a *research program*. |
| C-017 | The name is available and appropriate. | **Unresolved → Partially resolved** | No prior academic usage found (2026-08-18 search); trademark/theological review still open; "-dynamics" suffix carries new-physics misreading risk (01 §21). General machinery renamed **causal motivational energetics** (00 F3). |
| C-018 | Framework can stay useful without reducing love to a scalar. | Proposed → **strengthened** | The result-vector + bounds format is now the only permitted public output (05 §8); scalar collapse is structurally blocked. |
| **C-019** | **Thought-content energy ("joules spent thinking of a person") is attributable with current methods.** | **Falsified (methodological)** | Task-evoked increments are ~0.2–1 W and content-attribution does not exist (05 §2.7–8). The program formally refuses such estimates. |
| **C-020** | **All flows summed in one ledger must share a single coherent counterfactual scenario.** | **Established (bookkeeping requirement)** | Violation = double-counting mode (ii) (03 §2); enforcement function specified (07 B6); current code lacks it (11 §2 D1). |
| **C-021** | **Effort investment causally increases commitment (reverse arrow).** | **Established (imported)** | Effort justification [aronson1959], investment model [rusbult1980]. Consequence: cross-sectional attribution upward-biased; time-indexed estimands required (02 DAG-3). |
| **C-022** | **Consent, benefit-sensitivity, and refusal-response distinguish love-directed from obsession-directed persistence.** | **Proposed** | Operational signatures defined (02 §Q5); needs validation study alongside S5. |
| **C-023** | **Negative induced energy (commitment as energy-saving) occurs in realistic scenarios.** | **Established (analytically) / Proposed (empirically)** | Television scenario yields −389 MJ on the recurring example; field prevalence unknown (S3). Connects to social baseline theory [beckes2011]. |
| **C-024** | **Public outputs: median + interval + scenario + attribution bounds + boundary + chain position, or nothing.** | **Established (program law)** | 05 §8; the pseudo-precision guard makes it mechanical. |
