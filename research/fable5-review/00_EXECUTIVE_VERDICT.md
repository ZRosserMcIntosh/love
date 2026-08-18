# 00 — Executive verdict

**Reviewer:** Claude Fable 5, acting as principal investigator and hostile red-team chair
**Date:** 2026-08-18
**Scope:** Full repository at branch `agent/establish-agapodynamics-core`, all docs, source, tests, and the foundational mandate in `research/FABLE_5_FOUNDATIONAL_PROMPT.md`
**Companion files:** 01–11 in this directory, plus `references.bib`

---

## Verdict

> **Proceed only after major narrowing.**

Not "proceed substantially as proposed": the program as drafted contains a headline
quantity with no defensible causal meaning, a motive-decomposition method whose required
counterfactuals are unobservable, and an individual-level estimand that is at best
partially identifiable. Not "merge and disappear": two components survive hostile review
with genuine empirical content, one of which is not currently being measured by any
existing field. Not "abandon": the falsifiable core is real, cheap to test, and has
explicit kill criteria.

The narrowing is not cosmetic. It removes roughly half of the program's apparent surface
area and renames its general machinery.

---

## The five findings that force the verdict

### F1. The mathematics is salvageable, but only under one specific interpretation — and it kills "allocated energy" as a headline number.

The induced-energy formula \(E_L^{induced}=a(E_A-E_C)\) **can** be derived rigorously
(03_FORMAL_MATHEMATICS §2): it is the expected causal effect of motive removal on energy
expenditure, **if and only if** \(a\) is interpreted as the *probability of necessity*
(PN) of the motive for the act, the act is all-or-nothing (the motive gates whether you
act, not how hard), and \(E_C\) is the energy of the substitute world. Under that
derivation the formula is exactly the "excess energy" analogue of the attributable
fraction in epidemiology. This is the program's soundest piece of mathematics.

The allocated-energy formula \(E_L^{allocated}=aE_A\) does **not** survive the same
treatment. It multiplies a probability by a physical throughput that includes energy the
person would have burned in any possible world (basal metabolism), producing a number
that is neither a causal effect, nor a physical quantity, nor a share of anything
well-defined. Its honest reading — "expected value of a quantity that is actually either
\(0\) or \(E_A\)" — is an epistemic expectation dressed as a measurement.
**Recommendation:** report the pair \((E_A,\ \text{PN bounds})\) — throughput plus
attribution — and never their product as a headline scalar. Details and counterexamples
in 03 §4.

### F2. The individual-level attribution coefficient is not point-identifiable. Ever, in realistic designs.

\(a\) as probability of necessity is bounded, not identified, even with combined
experimental and observational data (Tian & Pearl 2000). In naturalistic settings with
mixed motives, reverse causation (effort itself creates attachment — effort
justification, the investment model), and strategic self-report, the honest product is
an **identified set**, not a number. Every public output must therefore be an interval
or a scenario-indexed family, and the software core must gain first-class support for
bounds (04_CAUSAL_IDENTIFICATION, 11_IMPLEMENTATION_SPEC). Any UI slider that lets a
user set \(a=0.9\) and read off "your love caused 1.09 GJ" is pseudo-precision and must
be redesigned to show the whole sensitivity surface.

### F3. Nothing in the mathematics is specific to love. That is a finding, not an insult.

Run the substitution test of mandate §XIX: replace "love" with "spite," "ambition," or
"fear of my manager" and every equation, identifiability result, measurement protocol,
and software function goes through unchanged. Love enters only through (i) the label on
the motive variable and (ii) the ethical constraints. Therefore the general framework
should be named for what it is — **causal motivational energetics** (the study of how
much measurable energy a motive causally redirects) — and **Agapodynamics survives only
as its flagship application domain** (love-, care-, and commitment-related motives),
where the hard construct problems (02) and the ethics (06, 09) genuinely are distinctive.
This matches the outcome the mandate itself anticipated.

### F4. Novelty is real but narrow: one measurement protocol and one integration, not a new science.

The systematic map (01_NOVELTY_AND_LITERATURE_MAP) finds every *component* already
occupied: bioenergetics owns the joules; effort-based decision neuroscience and social
discounting own recipient-dependent effort; behavioral ecology owns energy budgets under
motive-like drives; economics of the family owns resource allocation from caring
preferences; epidemiology owns probability-of-causation; LCA owns embodied-energy
bookkeeping. Two residues are genuinely unclaimed:

1. **Recipient-identity effects on *energetic* cost tolerance measured in
   calibrated physical-energy units** — the lab paradigms exist (grip-force,
   ergometer) but the relationship-category × joule-denominated cost-elasticity
   estimand has not been systematically mapped. This is publishable inside existing
   fields; it needs no new banner.
2. **Long-duration, instrumented, counterfactual-explicit "commitment energy
   ledgers"** — nobody currently measures what a sustained commitment makes a
   person and their machines do, in joules, against preregistered alternatives.
   This is a genuinely new *measurement protocol* (feasibility unproven; that is
   what pilots are for).

The name "agapodynamics" itself: no prior scientific usage found (web search
2026-08-18); nearest antecedents are Peirce's *agapism* (1893) and Sorokin's
five-dimensional love research (1954), which must be cited as intellectual ancestors.

### F5. The gravest risks are ethical, and two of them are structural, not incidental.

(a) **The metric invites the inference it forbids.** The repository says, correctly and
repeatedly, that joules do not measure love — and then proposes to publish
per-relationship joule totals. Audiences will make the prohibited inference anyway;
stalkers and coercive partners score highly on every energetic axis (09 §counterexamples
1–2). Mitigation cannot be a disclaimer; it must be architectural: no individual
rankings, no cross-person comparisons in public outputs, consent and harm as first-class
fields that gate publication, and prohibited-use terms.
(b) **Optimization pressure rewards self-harm.** Any score that grows with expenditure
valorizes exhausting yourself (mandate §IX.5). The framework must never emit a scalar
that a user could maximize; the ethical constraint set in `docs/MATHEMATICS.md` §12 is
correct and must be load-bearing in any application, not decorative.

---

## What dies (kill list)

| Item | Disposition |
|---|---|
| \(aE_A\) ("allocated energy") as a headline scalar | **Killed.** Replace with the pair \((E_A,\ a\text{-bounds})\); rename \(E_A\) "boundary throughput." (03 §4) |
| Shapley decomposition of motives as a primary method | **Demoted to speculative.** Required coalition counterfactuals are unobservable; efficiency axiom forces fake additivity. Keep only as a labeled sensitivity exercise. (04 §5) |
| Thought-specific brain energy ("joules spent thinking of her") | **Refused.** Not measurable with current methods; the field can and must make its claims without it. (05 §4) |
| "Constructive joule" | **Confirmed dead** (already falsified in the repo, C-014). "Constructive" is a functional label relative to a declared goal, not a property of energy. (03 §7, 09) |
| TNT comparison in the landing-page hero flow | **Demoted.** Only as an expandable example with the power-versus-energy warning inline; never in scientific reporting; prefer human-scale references (the same 1.21 GJ ≈ 336 kWh ≈ ~100 marathons ≈ ~207 hot showers). (03 §8) |
| Any normalized score named or interpretable as "love intensity" | **Prohibited**, per mandate §XII. Two normalizations survive as descriptive statistics only. (05 §6) |
| Individual-level point estimates of \(a\) | **Killed.** Bounds, scenario families, or posterior intervals only. (04) |
| Public per-person energy rankings or leaderboards | **Prohibited** on ethics grounds. (06 §ethics, 09) |

## What survives (keep list)

- The **allocated/induced distinction** — reborn as *throughput vs. expected causal
  effect*, which is what it always secretly was. Empirically distinct (H4 is nearly
  guaranteed to hold, and that is fine).
- **Negative induced energy** — love that prevents expenditure. Under the
  television counterfactual the six-month example's induced energy is **−389 MJ**
  (the project used *less* external energy than the alternative). This is the
  single best pedagogical result in the repository: the framework's headline
  quantity can be negative, which no love-flattering metric would permit. Keep it
  prominent.
- The **ledger with anti-double-counting**, upgraded to require *scenario
  coherence*: all flows in one summary must draw their counterfactuals from the
  same declared world (the current API allows silently mixing incompatible
  counterfactuals — the most serious defect found in the code; 11 §2).
- **Recipient-dependent energetic cost elasticity** as the flagship lab estimand
  (06, studies S1–S2). Identifiable, powered, preregisterable, and connected to an
  existing literature that gives it priors.
- The **result vector** \((E,\ \Delta E,\ T,\ a\text{-bounds},\ B,\ H,\ C,\ U)\)
  with benefit, harm, and consent never converted to joules.
- The **claim-ledger governance model** and falsification culture. It is the best
  part of the repository and the reason this review could be productive.

---

## Gates (the narrowing, made operational)

| Gate | Test | Kill criterion |
|---|---|---|
| **G1 — Construct** | Preregistered S1 (recipient-randomized calibrated effort task): does relationship category shift the energetic cost-elasticity curve with benefit held constant? (H1) | No reproducible recipient effect in two adequately powered preregistered samples → the love-specific application collapses into generic prosocial-effort research. Merge. |
| **G2 — Increment** | S5 out-of-sample test: does measured energetic behavior predict commitment-relevant outcomes beyond questionnaires? (H2, C-011) | No incremental validity → the joule denomination is decorative. Keep only the lab estimand, publish in existing venues, retire the program name. |
| **G3 — Feasibility** | S3 naturalistic ledger pilot: can allocated/induced be measured with total uncertainty < the effect sizes of interest, with tolerable participant burden? | Ledger uncertainty swamps every contrast of interest → field measurement dies; program becomes lab-only. |
| **G4 — Identification** | Formal result + simulation (04 §6): do PN bounds from realistic designs exclude enough of \([0,1]\) to be informative? | Bounds are vacuous in every realistic design → drop attribution entirely; report only scenario contrasts \(E_A-E_C(s)\) with \(a\equiv1\) labeling. |

Pass G1–G2 and the program has earned its name. Fail them and this repository becomes
what it would otherwise merely be accused of being: existing bioenergetics plus motive
labels.

## Unresolved contradictions (mandate §XX.5)

1. **The identification paradox.** The program needs attribution to be interesting
   and cannot point-identify it to be honest. Bounds are the compromise; whether
   they are ever narrow enough to matter is exactly Gate G4, and is genuinely open.
2. **Name vs. content.** The machinery is motive-generic (F3) while the name claims
   the love domain. The rename resolves the science; the repository, domain plan,
   and public identity still carry the specific name — a branding-vs-precision
   tension the founder must own consciously.
3. **The consent-measurement circularity.** The consent gate protects against
   celebrating coercion, but recipient-side measurement is least available exactly
   where coercion is likeliest (09 #24, #31). Not solved; only surfaced.
4. **Honesty-by-labeling.** Scenario labels carry the epistemics, yet audiences
   predictably read the number and skip the label. The reporting format (05 §8)
   mitigates; it cannot eliminate. Rhetorical misuse remains an expected failure
   mode of any published figure.
5. **Pedagogy vs. practice.** The recurring MET example is load-bearing for
   teaching while MET arithmetic is demoted for measurement (05 §1). Acceptable
   only while every public example carries the "illustration, not measurement" tag.
6. **Scenario conventions.** Small defensible choices (television at 1.0 vs 1.3
   MET; 100 W vs 60 W set) move induced energy by ~190 MJ (03 §5). Until a
   convention body exists, every published scenario needs its parameter table
   attached — there is no neutral default.

## Confidence statement (mandate §XX.9)

- F1 (derivation and the death of \(aE_A\) as headline): **high**.
- F2 (partial identification only): **high** — this is established causal-inference
  theory applied straightforwardly.
- F3 (motive-generic machinery; rename): **high**.
- F4 (novelty map): **moderate** — based on a broad but finite search; a funded
  systematic review could surface a predecessor, especially in caregiving
  energetics or Soviet-era "scientific altruism" literatures.
- F5 (ethics as structural risk): **high**.
- Verdict robustness: if forced to a second choice it would be "merge into existing
  fields," never "proceed substantially." **Abandonment is not warranted** while
  G1–G4 remain untested and cheap.

The remaining files execute the mandate section by section: 01 (novelty), 02
(ontology), 03 (mathematics), 04 (causal identification), 05 (measurement), 06
(experiments), 07 (function reference), 08 (plain-language book), 09 (failure modes
and counterexamples), 10 (revised claim ledger), 11 (implementation spec),
`references.bib` (sources with verification status).
