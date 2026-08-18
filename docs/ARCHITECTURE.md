# Repository and data architecture

## Principle

The scientific core should remain independent of any landing-page framework,
database vendor, hosting provider, or AI model.

The deterministic functions in src have no runtime dependencies and can later
be imported into a Vercel web application, a notebook, a command-line tool, or a
research data pipeline.

## Current layers

### 1. Theory

Definitions, axioms, boundaries, nonclaims, and falsifiability live in docs.

### 2. Deterministic mathematics

Exact conversions and declared approximations live in src. Every function
requires tests and a plain-language explanation.

### 3. Examples

Synthetic worked cases live in examples. They are educational fixtures, not
evidence.

### 4. Research governance

The claim ledger and model prompts live in research.

## Future application layers

### Public web

A future app may provide:

- layered explanation;
- interactive calculator;
- assumption and counterfactual controls;
- uncertainty ranges;
- claim ledger;
- citations;
- research protocol downloads.

The calculator should call the same core functions rather than reimplementing
formulas inside user-interface components.

### Research API

Possible endpoints:

- POST /v1/metabolic-energy
- POST /v1/electrical-energy
- POST /v1/ledger/summarize
- POST /v1/reference-equivalence
- GET /v1/claims
- GET /v1/methods

Version formulas and constants. A published result must record the exact engine
version used.

### Database

Using the same physical Postgres service as Railgun is acceptable for an early
prototype, but use a separate logical schema and access boundary:

~~~text
agapodynamics.claims
agapodynamics.citations
agapodynamics.studies
agapodynamics.protocols
agapodynamics.participants
agapodynamics.events
agapodynamics.energy_flows
agapodynamics.measurements
agapodynamics.counterfactual_models
agapodynamics.attribution_estimates
agapodynamics.outcomes
~~~

Recommended rules:

- migrations belong to this repository;
- public educational data and private participant data are separated;
- row-level access is deny-by-default;
- personally identifying data is encrypted or stored in a separate vault;
- public pages never query raw participant records;
- relationship messages and private AI memories are not research data unless
  separately consented and governed;
- every numerical output stores units, boundary, source, uncertainty, and
  engine version.

If the research becomes public or multi-institutional, separate infrastructure
is preferable even if it began on the Railgun database.

## Suggested event record

~~~json
{
  "id": "synthetic-project-001",
  "boundary": "operational",
  "actualJoules": 388800000,
  "counterfactualJoules": 0,
  "causalAttribution": {
    "estimate": 0.9,
    "lower": 0.6,
    "upper": 1.0,
    "model": "prospective-plus-behavioral-v1"
  },
  "measurement": {
    "method": "wall-meter",
    "device": "synthetic",
    "uncertaintyFraction": 0.02
  },
  "engineVersion": "0.1.0"
}
~~~

## Security boundary

This public repository must never become a warehouse for intimate private data.
The public science, calculation engine, and personal love story may be related
without being placed in the same database tables or access context.
