# 01 — Novelty and literature map

**Method.** Each neighboring literature is answered on the mandate's five questions:
(1) what it already measures, (2) what mathematics it uses, (3) what Agapodynamics
would duplicate, (4) what distinct residue remains, (5) whether the residue yields a
testable prediction. Citation keys refer to `references.bib`, where every entry carries
a **verification status**: `verified-2026-08-18` (checked against the live record during
this review), `repo-verified` (stable URL/PMID already recorded in `docs/SOURCES.md`),
or `unverified` (bibliographic details from reviewer knowledge; confirm before any
publication). No citation here is fabricated; unverified entries are labeled, per
mandate §IV.

**Search coverage caveat (mandate honesty rule).** This is a broad expert map with
spot-verification of load-bearing sources, not a funded PRISMA systematic review.
Residual risk: a direct predecessor could exist in caregiving-energetics, time-use, or
non-English literatures. C-016 therefore stays *unresolved* in the revised ledger.

---

## 1. Human bioenergetics

- **Measures:** BMR/RMR, TDEE, activity energy expenditure; via direct/indirect
  calorimetry [weir1949], doubly labelled water [lifson1966; speakman1997; iaea-dlw],
  MET compendia [ainsworth2011; herrmann2024].
- **Math:** respiratory gas exchange stoichiometry (Weir equation), isotope dilution
  kinetics, regression-based prediction equations.
- **Duplicates:** every joule-measurement method Agapodynamics would use. All of §IX of
  the mandate is this field.
- **Distinct residue:** bioenergetics measures *how much*; it has no machinery for *for
  whom* or *but-for what motive*. Recipient identity and counterfactual worlds are not
  variables in any compendium.
- **Testable residue prediction:** yes — TDEE partitioned by commitment-attributed
  activity classes is measurable (S3) and no bioenergetics study reports it.

## 2. Social and behavioral energetics / economy of action

- **Measures:** how social resources alter effort perception and energy budgeting:
  hills look steeper without a friend [schnall2008], hand-holding damps threat response
  [coan2006], **social baseline theory** claims proximity to others is the brain's
  default energy-saving regime [beckes2011].
- **Math:** mostly ANOVA/regression on psychophysical and neural outcomes; no joule
  accounting.
- **Duplicates:** the *qualitative* thesis that relationships restructure energy
  allocation — this is the closest existing theoretical neighbor and must be cited as
  such.
- **Distinct residue:** social baseline theory predicts love *saves* energy
  (load-sharing); Agapodynamics adds the ledger that could quantify the saving in
  joules. Negative induced energy is the natural meeting point.
- **Prediction:** partnered individuals show lower motive-attributed induced energy for
  equivalent delivered benefit (load-sharing hypothesis) — testable in S4.

## 3. Energy-budget models in behavioral ecology

- **Measures:** organismal energy intake/allocation among growth, maintenance,
  reproduction; optimal foraging [stephens1986]; Dynamic Energy Budget theory
  [kooijman2010]; field metabolic rates via DLW.
- **Math:** ODE compartment models, optimization under constraint — mathematically the
  most mature "energy allocated by drives" formalism in existence.
- **Duplicates:** the entire concept of motive-directed energy allocation, for
  non-human animals, with better math than this repository currently has.
- **Distinct residue:** ecology never needs causal *attribution* because it assumes
  fitness-maximization; humans with mixed, reportable, manipulable motives create the
  attribution problem that is this program's actual subject.
- **Prediction:** yes, via the human-specific attribution machinery (04).

## 4. Parental investment theory

- **Measures:** fitness costs of parental care [trivers1972]; empirical energetics of
  gestation and lactation (~steady measurable energy transfer to offspring).
- **Math:** evolutionary game theory, life-history trade-off models.
- **Duplicates:** "energy directed by bonded commitment" is literally parental
  investment; lactation is the cleanest existing *delivered-energy* measurement
  (milk energy output is routinely quantified in kcal/day).
- **Distinct residue:** parental investment is fitness-denominated and
  evolutionary-timescale; it does not ask the within-person counterfactual ("what
  would this parent's energy have done absent the bond") because the bond is
  evolutionarily given.
- **Prediction:** weak — mostly Agapodynamics should *import* lactation/gestation
  energetics as its calibration domain (the one place energy transfer to a loved one is
  already measured to research grade).

## 5. Costly signaling / honest signaling

- **Measures:** signal cost as guarantor of honesty [zahavi1975; grafen1990]; human
  applications [bird2005].
- **Math:** ESS models; signaling equilibria.
- **Duplicates:** the intuition that energetic cost carries information about
  commitment. Critically, this field also supplies the sharpest *anti*-lesson: cost is
  informative only in equilibrium and only about strategic stakes — **not** proof of
  the signaled state. This is C-012's theoretical foundation.
- **Distinct residue:** signaling theory predicts *observable* cost inflation when
  signaling motives are active — which is a confounder Agapodynamics must model (a
  grand gesture is partly a signal, so its energy attributes partly to status/retention
  motives, not "love" simpliciter).
- **Prediction:** yes — audience manipulation (private vs. observed helping) should
  shift the energy-cost curve; a clean S1 factor.

## 6. Costly helping / altruistic effort

- **Measures:** willingness to expend money/effort for others [raihani2015;
  bhogal2016]; competitive helping.
- **Math:** discrete choice, GLMMs.
- **Duplicates:** helping-cost paradigms.
- **Residue:** costs are usually monetary or abstract; joule-calibrated physical cost
  with relationship-category structure is the unclaimed cell.
- **Prediction:** yes (S1).

## 7. Attachment and caregiving research

- **Measures:** attachment styles and caregiving behavior [bowlby1969; ainsworth1978;
  hazan1987]; compassionate love scales [sprecher2005]; caregiver burden and its
  economics [arno1999].
- **Math:** psychometrics (factor models), survey statistics.
- **Duplicates:** the construct side — every latent-variable distinction 02 needs
  already has instruments here.
- **Distinct residue:** attachment research has essentially **no behavioral-energetic
  dependent variables**; its outcomes are self-report and observation. The proposed
  incremental-validity test (H2/C-011) is exactly a bet against this field's
  measurement sufficiency — which is what makes it falsifiable and interesting.
- **Prediction:** yes — the central one (G2).

## 8. Effort discounting / neuroeconomics of effort

- **Measures:** subjective devaluation of reward by required effort [westbrook2015;
  chong2017-unv]; prosocial effort: people work less hard for others than themselves
  ("prosocial apathy") [lockwood2017]; aging increases prosocial effort motivation
  [lockwood2021].
- **Math:** parametric discount functions (linear, parabolic, hyperbolic in effort),
  drift-diffusion and computational models, hierarchical Bayesian fitting.
- **Duplicates:** the entire S1/S2 experimental technology — force calibration as % MVC
  (maximum voluntary contraction), choice-based elicitation, discount-parameter
  inference. Agapodynamics' lab program is a *parameterization* of this field, not a
  replacement.
- **Distinct residue:** existing work contrasts self/stranger/charity; systematic
  mapping across *close-relationship categories* (partner, child, parent, friend
  gradations) with effort expressed in calibrated joules appears unoccupied
  (moderate confidence; a targeted review before S1 is mandatory).
- **Prediction:** yes — the flagship (H1).

## 9. Social discounting / revealed preference / economics of the family

- **Measures:** generosity as a hyperbolic function of social distance [jones2006];
  time allocation to household production [becker1965]; altruistic resource allocation
  within families [becker1981]; relationship commitment predicted by investment size
  [rusbult1980].
- **Math:** hyperbolic discount functions; household production functions;
  interdependent utility \(U_i = u(c_i) + \alpha u(c_j)\) — note that Becker's
  \(\alpha\) is a caring weight that plays *precisely* the role of \(a\) as a
  preference parameter rather than a causal attribution.
- **Duplicates:** "how much of your budget does caring redirect" is solved economics —
  in money and time. Rusbult's investment model already shows resource investment
  predicts commitment (note the direction!).
- **Distinct residue:** the energy denomination and the causal (rather than
  preference-revealed) attribution. Also the reverse arrow: economics treats
  investment→commitment as selection; Agapodynamics needs the causal decomposition
  both ways (02 DAG-3).
- **Prediction:** yes — cost-elasticity in joules should correlate with, but not
  reduce to, social-distance discounting in money (S2 tests the cross-currency
  correlation).

## 10. Social thermoregulation

- **Measures:** links between physical warmth and social bonding; distributed
  thermoregulation as a function of relationships [ijzerman2009-unv; ijzerman2015-unv].
- **Math:** mixed models; some actual thermal physiology.
- **Duplicates:** the one literature that already connects *literal joules*
  (thermoregulatory cost) to *relationship closeness* — penguin-huddle logic applied to
  humans. Must be cited; it is the nearest thing to an existing "relationship
  energetics."
- **Residue:** it concerns inbound thermal economy, not outbound motivated allocation.
  Complementary, not competing.
- **Prediction:** shared-household heating energetics in S4 borrows directly from it.

## 11. Ecological energetics / emergy / metabolic economics

- **Measures:** energy flows through ecosystems and economies; "emergy" attempts a
  universal embodied-energy currency [odum1996].
- **Math:** flow networks, input–output analysis.
- **Duplicates:** the ledger/flow-graph formalism (05, 11). Emergy is also the chief
  *cautionary tale*: a field marginalized partly because it over-claimed a universal
  currency — exactly the failure mode C-018 guards against.
- **Residue:** none conceptually; adopt the network math, refuse the universal
  currency.

## 12. Thermodynamics of living systems / exergy

- **Measures:** dissipative structures [nicolis1977; schrodinger1944]; exergy = maximum
  useful work extractable relative to an environment [rant1956-unv; szargut1988].
- **Math:** nonequilibrium thermodynamics; exergy balances.
- **Duplicates:** the "order out of energy throughput" framing.
- **Residue and ruling (mandate §VIII):** exergy is the right concept for the *machine
  side* of ledgers (electricity is pure exergy; low-grade heat is not), and 03 §7
  adopts it there. For human acts, "constructive" cannot be operationalized
  thermodynamically without a goal specification — see F1/kill-list. Physical entropy
  of "a tidy home" has no non-arbitrary microstate ensemble; refuse such claims.
- **Prediction:** none love-specific.

## 13. Functional information / information theory

- **Measures:** \(I(E_x)=-\log_2 F(E_x)\), the improbability of achieving function
  level \(E_x\) [hazen2007]; original proposal [szostak2003-unv].
- **Math:** well-defined only when the configuration space and function assay are
  explicit (RNA pools, Avida programs).
- **Duplicates:** n/a.
- **Ruling:** rigorous in formal spaces, **not import-ready** for meals, homes, or
  caregiving. Permitted narrow use: code/artifact domains where a test suite defines
  the function and the configuration space is enumerable. Otherwise it is metaphor;
  exclude from the core (this answers mandate §VIII.6).

## 14. Teleodynamics

- **Measures:** nothing quantitatively; a philosophical framework for end-directed
  organization [deacon2011].
- **Ruling (mandate's "special skepticism"):** cite as philosophy of the explanatory
  gap; import zero formalism. Any equation borrowed from teleodynamics would be
  decoration.

## 15. Social physics

- **Measures:** aggregate human interaction patterns from digital traces
  [pentland2014].
- **Ruling:** brand, not physics; overlap is nominal. Its relevant lesson is
  sociological: physics-flavored naming attracts both attention and justified
  suspicion. This bears on C-017 (naming) more than on content.

## 16. Causal attribution of resource use / attributable fractions

- **Measures:** fraction of outcomes attributable to an exposure [levin1953-unv;
  robins1989-unv]; probability of necessity/sufficiency with sharp bounds
  [tianpearl2000; pearl2009]; partial identification [manski1990].
- **Math:** potential outcomes, bounds, sensitivity analysis.
- **Duplicates:** the *entire logical skeleton* of \(a\). Agapodynamics' central
  equation is an attributable-fraction calculation with joules as the outcome scale.
- **Residue:** applying PN bounds to continuous energy outcomes with motive
  "exposures" is a new application with real technical content (04 §3–4). This is a
  methods contribution to causal inference, and it is where the program's
  mathematical novelty actually lives.
- **Prediction:** identifiability results are theorems, not predictions; the empirical
  content arrives via G4.

## 17. Time-use and household production

- **Measures:** national time-use surveys; household labor accounting.
- **Duplicates:** duration × activity classification — the backbone of any field
  ledger. Joules are largely derivable from time-use × MET; this is why G2
  (incremental validity beyond time) is a survival condition, not a nicety.
- **Residue:** machine energy (devices, vehicles, servers) attributed to commitments is
  absent from time-use accounting and is cheap to meter. Genuine gap.

## 18. Embodied energy / life-cycle assessment

- **Measures:** cradle-to-boundary energy of goods and services [iso14040].
- **Math:** process-based and input–output LCA; allocation rules for co-products.
- **Duplicates:** boundary discipline, allocation conventions, double-counting rules —
  import wholesale for the `embodied` boundary. LCA's allocation controversies
  (mass vs. economic value) are the exact analogue of motive allocation, and its
  lesson is sobering: after 30 years the field standardized *disclosure*, not a
  single true allocation. Expect the same for motives (04 §5 uses this).
- **Residue:** none; adopt.

## 19. Neuroscience of love and brain energetics

- **Measures:** neural correlates of romantic love [aron2005]; whole-brain energy
  budget ~20% of resting metabolism [raichle2002]; signaling costs [attwell2001];
  task-evoked changes are small and regional.
- **Duplicates/ruling:** supplies the *refusal* in F5/05 §4 — person-specific thought
  energy is not attributable with current methods, and the field's claims must be
  built to survive without it (mandate §IX.10: answer is yes, they can).

## 20. Prior "science of love" programs

- **Measures:** Sorokin's five dimensions of love — intensity, extensivity, duration,
  purity, adequacy — with explicit talk of time/energy/resources under "intensity"
  [sorokin1954]; Peirce's agapism as cosmological principle [peirce1893-unv];
  compassionate/companionate love psychometrics [sprecher2005]; positivity-resonance
  theory [fredrickson2013-unv].
- **Duplicates:** Sorokin anticipated the *dimensional* strategy (never collapse love
  to one number) and even the energetic gloss on intensity — without measurement
  theory or causal inference. Agapodynamics is, historically, **Sorokin's intensity
  axis rebuilt with modern instrumentation and causal mathematics**. Say so in public
  materials; claiming ancestry is both honest and protective against novelty
  challenges.
- **Residue:** everything quantitative.

## 21. Terminology audit

- **"Agapodynamics" / "agapic energetics":** no established academic usage found
  (search 2026-08-18). Nearest existing terms: *agapism* (Peirce, philosophy),
  *agapeic/agapic* (theology, e.g., Desmond's "agapeic" metaphysics), a consumer
  health app named "Agapic" (namespace noise, not a field). Trademark and theological
  review (C-017) remain open — the Greek-Christian valence of *agape* imports a
  specific love-concept (selfless, unconditional) that the ontology (02) must either
  own or disclaim.
- **Collision risk:** low academically; moderate rhetorically ("-dynamics" suffix
  invites the new-physics misreading the repo forbids; the name works against
  constraint I.1 and will require constant policing).

---

## Novelty decomposition (mandate §IV, separated as required)

| Axis | Verdict | Basis |
|---|---|---|
| Novelty of the **name** | Novel (unused), with rhetorical liabilities | §21 |
| Novelty of the **equations** | Not novel as mathematics: attribution-weighted counterfactual contrast = attributable-fraction logic [tianpearl2000] on an energy outcome. Novel only as an *application class* | §16, 03 |
| Novelty of the **measurement protocol** | **Novel:** counterfactual-explicit, motive-attributed, multi-source energy ledgers over months (S3); joule-calibrated recipient-varying effort tasks (S1) are a novel cell in an occupied matrix | §1, §8, §17 |
| Novelty of the **combination** | Real but fragile: integration across bioenergetics + causal inference + relationship science is unoccupied, plausibly because incentives and difficulty, not ignorance, kept it empty. The burden is to show the integration *predicts* something | §7 |
| Novelty of any **empirical prediction** | Two candidate novel predictions: (i) relationship-category-specific energetic cost elasticity with benefit held constant (H1, sharpened beyond existing self/other contrasts); (ii) energetic behavior's incremental predictive validity over attachment self-report (H2). Both currently unverified | §7, §8 |

**Bottom line.** One unclaimed measurement protocol, one methods application, two
testable predictions, zero new physics, and an honorable ancestry (Sorokin → attachment
research → effort neuroscience) that the program should embrace rather than obscure.
