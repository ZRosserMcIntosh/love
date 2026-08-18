# Agapodynamics

> Love does not create energy. Love selects its destination.

Agapodynamics is a pre-paradigmatic research program for measuring the physical
energy that a relationship or love-motivated commitment causally allocates,
induces, transfers, or redirects.

This repository is deliberately conservative about its claims:

- Love is **not** proposed as a new physical form of energy.
- Joules measure physical energy, not moral worth or emotional depth.
- High expenditure cannot, by itself, prove love.
- Every result must declare its system boundary and counterfactual.
- Allocated energy and additionally induced energy are different quantities.

The aim is to make the measurable part rigorous without pretending that the
measurable part is the whole of love.

## The two core quantities

For event or energy flow \(i\), let:

- \(E_i^A\) be actual physical energy;
- \(E_i^C\) be counterfactual energy that would have been expended anyway; and
- \(a_i \in [0,1]\) be the estimated causal-attribution coefficient.

Then:

\[
E_{L,i}^{allocated}=a_iE_i^A
\]

\[
E_{L,i}^{induced}=a_i(E_i^A-E_i^C)
\]

Allocated energy answers, “How much existing energy throughput was directed
toward this action?” Induced energy answers, “How much additional energy did
this action cause relative to the stated alternative?”

## What exists in version 0.1

- A dependency-free TypeScript calculation core
- Exact unit conversions for kilocalories, kilowatt-hours, joules, and TNT
- MET-based illustrative metabolic calculations
- Causal-attribution and counterfactual calculations
- A hierarchy-aware ledger that prevents known parent/child double counting
- A fully worked six-month project example
- Unit tests
- Scientific foundations, plain-language explanations, and falsifiability rules
- A domain and landing-page architecture for a future public site
- A hostile, high-mathematics prompt for Claude Fable 5

## Run it

Node 22.6 or newer is required for native TypeScript type stripping.

~~~bash
npm test
npm run example
~~~

There are no runtime or development dependencies in the initial scaffold.

## Repository map

~~~text
src/        Unit-safe deterministic calculation functions
test/       Exact examples, invariants, and failure cases
examples/   Executable worked examples
docs/       Theory, mathematics, measurement, public explanation, web plan
research/   Research prompts and claim ledger
~~~

## Research status

The integration proposed here may be novel; its components are not. Human
bioenergetics, calorimetry, causal inference, behavioral economics, attachment
research, thermodynamics, exergy, information theory, and costly-helping
research all predate this project. Novelty remains an open research question
until a systematic literature review and human peer review are completed.

## Data policy

The public repository uses synthetic examples only. Do not commit private
messages, names of relationship partners, medical information, location
history, or personally identifying behavioral records.

## License

No license is granted at this stage. All rights are reserved pending an
explicit licensing decision.
