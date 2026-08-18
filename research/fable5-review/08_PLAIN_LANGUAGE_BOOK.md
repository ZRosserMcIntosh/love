# 08 — The plain-language book

Every central concept at five levels (mandate §XVI): **ten words → child → general
adult → undergraduate → graduate**. The child version is never allowed to be false.
The recurring example runs through everything: a 70 kg person, 12 hours a day for 180
days (2,160 hours), desk work at 1.3 MET, a 50-watt computer, and a dial \(a\) for
how sure we are the commitment was the deciding reason.

---

## 1. Energy versus power

- **Ten words:** Energy is the total; power is how fast it flows.
- **Child:** A bathtub holds water (energy). The tap decides how fast it fills
  (power). A firehose and a dripping tap can move the same water — one in a second,
  one in a year.
- **Adult:** The project used about 1.21 billion joules over 2,160 hours. Average
  power = energy ÷ time = 1,211,207,040 J ÷ 7,776,000 s ≈ **156 watts** — two bright
  light bulbs, held for six months.
- **Undergraduate:** \(\bar P=E/T\); [J]/[s]=[W]. Identical energies with different
  time profiles are physically incomparable in effect: peak power, not energy,
  determines most damage and most thresholds.
- **Graduate:** Reporting an energy without its power spectrum invites the
  bomb-comparison fallacy (03 §7): time-integrated dissipation at ~10² W is
  seventeen orders of magnitude from prompt release at ~10¹⁹ W. Any public artifact
  showing joules must show power alongside.

## 2. Throughput (what we used to call "allocated")

- **Ten words:** What the meters actually counted during the committed work.
- **Child:** While you built the gift, your body and computer were using energy the
  whole time. We can add it up honestly — like counting every scoop of flour that
  went through the kitchen while you baked.
- **Adult:** Body ≈ 822 MJ plus computer ≈ 389 MJ → about **1.21 GJ flowed through
  the work**. That is a real, measured number. It does *not* say the work *caused*
  that much extra energy use — your body would have burned most of it anyway, doing
  anything at all.
- **Undergraduate:** \(E_A=\int P^A dt\) over the declared boundary. It is a
  descriptive flow integral. Multiplying it by an attribution probability produces
  an expectation with no physical referent (03 §3) — hence the rename from
  "allocated" to **boundary throughput**, reported beside attribution, never
  multiplied into it for headlines.
- **Graduate:** \(aE_A=\mathbb E[E_A\mathbb 1(\text{necessity})]\) under the gating
  model — an epistemic functional, fine inside computations, misleading as a
  point-valued public quantity because its distribution is two-spiked, not centered.

## 3. The counterfactual (the other evening)

- **Ten words:** Compared with what? Every "extra" needs a stated alternative.
- **Child:** To know what the gift-building *changed*, imagine the same evening
  without it — maybe you'd have watched TV. Nobody can see that evening. We have to
  say out loud which pretend evening we mean, and we're only guessing about it —
  carefully.
- **Adult:** Against "quiet rest, computer off," the project caused about **+579 MJ**
  extra. Against "TV on for those hours," it caused about **−389 MJ** — the project
  *saved* energy. Same project, opposite sign. The choice of comparison is not a
  detail; it is half the answer.
- **Undergraduate:** \(\Delta(s)=E_A-E_C(s)\); \(s\) indexes a complete alternative
  world. \(\partial\Delta/\partial E_C=-a\): every joule the alternative would have
  burned reduces the attributed extra, in proportion to attribution.
- **Graduate:** Scenario declaration is estimand definition, not estimation; there
  is no data-driven "true" \(s\). Report the labeled family and robustness curve;
  refuse unweighted model averaging over scenarios (03 §5).

## 4. The attribution dial \(a\) (how sure the reason was necessary)

- **Ten words:** The chance the act would not have happened otherwise.
- **Child:** Imagine one hundred rerun copies of that month. In some copies —
  without the love — you'd still have built it (maybe for money). Count the copies
  where you *wouldn't* have. If that's 70 copies, the dial reads 0.70. Nobody can
  watch the reruns, so we only ever know a range, like "somewhere between 30 and 90."
- **Adult:** \(a\) is not "percent of your heart." It is the estimated probability
  that the commitment was *necessary* for the act. Evidence that moves it: what you
  said you'd do before outcomes were known; what similar people without the
  commitment do; whether payment would have produced the same act.
- **Undergraduate:** \(a=\Pr(A(M{=}0)=0\mid A{=}1,M{=}1)\) — the probability of
  necessity. Expected induced energy \(=a\,(E_A-E_C)\) follows from a two-branch
  mixture (03 §2). It is estimable only via proxies for the impossible experiment
  "remove the commitment."
- **Graduate:** PN is partially identified; sharp bounds under combined data
  [tianpearl2000]; point identification needs exogeneity + monotonicity, both
  suspect here (protective non-action violates monotonicity). Output format:
  intervals; robust-Bayes over the identified set (04 §3, 05 §7).

## 5. Uncertainty (why every answer is a range)

- **Ten words:** Honest numbers carry their wobble; fake ones hide it.
- **Child:** If you measure a puppy with a floppy tape measure, you say "about 40 to
  45 centimeters." Our tape measures here are floppy in three ways: the meters, the
  pretend evening, and the dial. So the answer is always an "about."
- **Adult:** A published result looks like: "induced energy under the rest scenario:
  most likely ~520 MJ, honestly between ~290 and ~750." When the alternative evening
  is genuinely uncertain (rest *or* would-have-done-it-anyway), the honest answer can
  even be "somewhere between −160 and +580" — and that width *is* the finding.
- **Undergraduate:** First-order propagation
  \(\sigma_\Delta^2\approx(E_A{-}E_C)^2\sigma_a^2+a^2\sigma_{E_A}^2+a^2\sigma_{E_C}^2\)
  works for smooth cases (checked numerically: matches simulation to ~1%); it fails
  structurally for scenario mixtures, where the distribution is two-humped.
- **Graduate:** Simulation from the joint posterior with correlated \((a,E_C)\);
  posterior predictive checks against utility meters and DLW windows;
  simulation-based calibration before first data; a mechanical rule that interval
  widths must grow along the chain meter→body→activity→motive (05 §7).

## 6. Boundaries and double counting

- **Ten words:** Count each joule once, inside a fence you named.
- **Child:** Your brain's energy is already inside your body's energy — counting
  both is counting the same sandwich twice. And you must say which things you're
  counting at all: body? computer? the electricity that made the computer?
- **Adult:** The ledger adds independent roots only (body + wall-socket); the brain
  row is shown but not added. Embodied energy (making the laptop) is a different
  fence — you may use it, but you must say so, and never mix fences mid-result.
- **Undergraduate:** Flows form a DAG: transformations and subdivisions re-express
  their parent (never re-summed); only independent inputs sum. Downstream energy has
  its own sources and its own fence; the leverage ratio \(G_E\) may exceed 1 with no
  conservation anxiety (relay logic).
- **Graduate:** The subtle failure is *scenario incoherence*: summing flows whose
  counterfactuals come from different worlds (body-CF "resting in the dark" +
  device-CF "TV on"). The current code permits it; the fix (B6, 11 §2) binds every
  summary to one declared scenario object.

## 7. Negative induced energy (love that saves energy)

- **Ten words:** Sometimes the committed choice uses less than the alternative.
- **Child:** If, instead of driving somewhere fun, you stayed to read to your little
  sister, your evening used *less* energy than the drive would have. The math says
  "minus" — and minus is allowed. Staying can be the loving thing *and* the smaller
  thing.
- **Adult:** Under the television scenario the six-month project shows **−389 MJ**:
  the commitment redirected hours *away* from a higher-energy default. A framework
  that only produced positive numbers would secretly be a devotion scoreboard; the
  minus sign is proof this one isn't.
- **Undergraduate:** \(\Delta<0\iff E_C(s)>E_A\). Sign survives attribution
  weighting (\(a\ge0\)). Tests must cover it (11 vectors V5).
- **Graduate:** Negative induced energy is the quantitative bridge to social
  baseline theory — proximity and bonds as energy-*saving* regulation [beckes2011] —
  and grounds the load-sharing hypothesis in S4.

## 8. Why joules never measure love

- **Ten words:** Meters see energy; they cannot see reasons or worth.
- **Child:** A person could spend a mountain of energy showing off, or scaring
  someone — that isn't love. And a grandmother who just sits beside you in the
  hospital spends almost nothing — and it can be the most loving thing in the world.
  So the energy number is *never* a love score. We always keep kindness, permission,
  and help as their own separate answers.
- **Adult:** The framework outputs a vector — energy, extra energy, time,
  attribution range, benefit, harm, consent, uncertainty — and refuses to collapse
  it. High expenditure with no benefit-tracking and no consent is the signature of
  obsession, not devotion (02 §Q5).
- **Undergraduate:** \(E\) is one coordinate of
  \((E,\Delta,T,a\text{-bounds},B,H,C,U)\); \(B,H,C\) live in their own units.
  Cost is informative about commitment only in equilibrium-signaling terms, and
  cost-inflation under observation is a confound, not a measurement [zahavi1975;
  bird2005].
- **Graduate:** "More joules ⇒ more love" fails as inference (inverse fallacy), as
  measurement (no construct validity), and as ethics (it rewards waste, coercion,
  and self-harm). The program's falsifiable content lives in cost-*elasticity*
  differences and incremental predictive validity — never in magnitudes per se.

---

## The recurring example, every step shown

**Body energy during the work.**
\[
1.3\ \tfrac{\mathrm{kcal}}{\mathrm{kg}\cdot\mathrm h}\times70\ \mathrm{kg}
=91\ \tfrac{\mathrm{kcal}}{\mathrm h}
\qquad
91\ \tfrac{\mathrm{kcal}}{\mathrm h}\times2160\ \mathrm h=196{,}560\ \mathrm{kcal}
\]
\[
196{,}560\ \mathrm{kcal}\times4184\ \tfrac{\mathrm J}{\mathrm{kcal}}
=822{,}407{,}040\ \mathrm J\approx822\ \mathrm{MJ}
\]
(kg cancels kg, h cancels h, kcal cancels kcal: joules remain.)

**Body energy in the quiet-rest evening.**
\(1.0\times70\times2160\times4184=632{,}620{,}800\ \mathrm J\approx633\ \mathrm{MJ}\).

**Extra body energy caused (rest scenario).**
\(822{,}407{,}040-632{,}620{,}800=189{,}786{,}240\ \mathrm J\approx190\ \mathrm{MJ}\).

**Computer.**
\(50\ \mathrm W\times2160\ \mathrm h\times3600\ \tfrac{\mathrm s}{\mathrm h}
=388{,}800{,}000\ \mathrm J\approx389\ \mathrm{MJ}\)
(W·s = J; hours cancel).

**Throughput (fence: body + computer).**
\(822{,}407{,}040+388{,}800{,}000=1{,}211{,}207{,}040\ \mathrm J\approx1.21\ \mathrm{GJ}\approx336\ \mathrm{kWh}\).

**Induced energy, scenario family (\(a=1\)):** rest → **+578.6 MJ**; television
(1.3 MET, 100 W TV) → **−388.8 MJ**; same-project-for-money → **0** (identical
worlds); paid office job (1.5 MET, no home computer) → **+262.3 MJ**.

**Attribution dial.** Suppose the evidence brackets necessity between 0.3 and 0.9.
Rest scenario: extra energy attributable to the commitment lies between
\(0.3\times578.6=173.6\) and \(0.9\times578.6=520.7\) MJ. Television scenario:
between \(0.9\times(-388.8)=-349.9\) and \(0.3\times(-388.8)=-116.6\) MJ.

**Human-scale references (no bombs needed).** 1.21 GJ ≈ 336 kWh ≈ ~100 marathons of
body energy ≈ ~207 hot showers ≈ ~22,000 phone charges — spread over 180 days at the
power of two light bulbs.

**And the sentence that keeps everything honest:** these joules say what the
commitment *moved*, under stated assumptions — never what the love is worth.
