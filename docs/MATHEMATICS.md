# Mathematical specification

## 1. Continuous-time formulation

Let \(P_i^A(t)\) be the actual physical power of energy flow \(i\), and let
\(P_i^C(t)\) be its counterfactual power over interval \([t_0,t_1]\). Let
\(a_i(t)\in[0,1]\) be the time-varying causal-attribution estimate.

Allocated energy:

\[
E_{L,i}^{allocated}
=
\int_{t_0}^{t_1}a_i(t)P_i^A(t)\,dt
\]

Induced energy:

\[
E_{L,i}^{induced}
=
\int_{t_0}^{t_1}a_i(t)
\left(P_i^A(t)-P_i^C(t)\right)\,dt
\]

If attribution is treated as constant:

\[
E_{L,i}^{allocated}=a_iE_i^A
\qquad
E_{L,i}^{induced}=a_i(E_i^A-E_i^C)
\]

Dimensional check:

\[
[a]=1,\quad [P]=\mathrm{J\,s^{-1}},\quad [dt]=\mathrm{s}
\]

therefore:

\[
[E_L]=\mathrm{J}
\]

## 2. Discrete measurements

For intervals \(k=1,\ldots,n\) with duration \(\Delta t_k\):

\[
\widehat E_L^{allocated}
=
\sum_{k=1}^{n}\widehat a_k
\widehat P_k^A\Delta t_k
\]

\[
\widehat E_L^{induced}
=
\sum_{k=1}^{n}\widehat a_k
\left(\widehat P_k^A-\widehat P_k^C\right)\Delta t_k
\]

Sampling intervals must be short enough to capture material changes in
activity, devices, and attribution.

## 3. Causal interpretation

Let \(Y_i(1)\) denote energy under the observed love-directed action and
\(Y_i(0)\) denote energy under a specified comparison condition. Then the
individual causal effect is:

\[
\tau_i=Y_i(1)-Y_i(0)
\]

Only \(Y_i(1)\) is observed for the same person and moment. \(Y_i(0)\) must be
estimated using design and assumptions. Agapodynamics therefore inherits the
fundamental problem of causal inference.

The coefficient \(a_i\) should be interpreted as an attribution weight derived
from a causal model and evidence:

\[
a_i=\Pr(\text{the targeted motive was necessary for action }i\mid D,M)
\]

where \(D\) is observed data and \(M\) is the declared causal model. This is a
proposed operational interpretation, not an established psychological
measurement.

## 4. Mixed motives

Suppose action \(i\) has motive set:

\[
\mathcal M=\{love,duty,money,status,fear,habit,\ldots\}
\]

Naively assigning independent percentages can violate causal interactions.
Love and duty may each be insufficient alone but jointly sufficient.

Candidate methods to investigate include:

1. Structural causal models with explicit interaction terms
2. Shapley-value decomposition over counterfactual motive coalitions
3. Bayesian latent-variable models
4. Bounds rather than point estimates when motives are not identifiable

For motive-coalition value function \(v(S)\), a Shapley attribution for motive
\(m\) is:

\[
\phi_m
=
\sum_{S\subseteq\mathcal M\setminus\{m\}}
\frac{|S|!(|\mathcal M|-|S|-1)!}{|\mathcal M|!}
\left[v(S\cup\{m\})-v(S)\right]
\]

This ensures additive allocation under the Shapley axioms, but whether those
axioms are psychologically appropriate is an open research question.

## 5. Energy ledger and double counting

Let physical energy flows form a directed acyclic graph. A child node may be:

- a transformation of the parent;
- an informational subdivision of the parent; or
- an additional independent input.

Only independent root inputs should be summed for total input energy unless a
different conserved-flow boundary is explicitly derived.

Example:

\[
E_{food}
\rightarrow
E_{ATP}
\rightarrow
(E_{neural}+E_{mechanical}+E_{heat})
\]

Adding every node would count the same energy repeatedly. The software ledger
therefore excludes children marked as contained in a parent.

## 6. MET approximation

The conventional population approximation is:

\[
1\ \mathrm{MET}
\approx
1\ \frac{\mathrm{kcal}}{\mathrm{kg\,h}}
\]

For mass \(m\), duration \(h\), and activity intensity \(M\):

\[
E_{met}
=
Mmh(4184)
\]

with \(E_{met}\) in joules.

Increment relative to counterfactual intensity \(M_C\):

\[
\Delta E_{met}
=
(M_A-M_C)mh(4184)
\]

This is illustrative. Precision studies should measure individual resting
metabolism and oxygen/carbon-dioxide exchange rather than treating one MET as
universal.

## 7. Electrical energy

For approximately constant electrical power \(P\) watts over \(h\) hours:

\[
E_{electrical}=P(3600h)
\]

For sampled power:

\[
E_{electrical}
\approx
\sum_kP_k\Delta t_k
\]

Measured wall power should not be added again as estimated component power
unless the boundary explicitly separates losses.

## 8. TNT reference equivalence

The conventional energy equivalent is:

\[
1\ \mathrm{ton\ TNT}=4.184\times10^9\ \mathrm{J}
\]

Therefore:

\[
Y_{TNT}
=
\frac{E}{4.184\times10^9}
\]

This compares energy magnitude only. It does not imply blast behavior, storage
inside the project, equal power, or moral equivalence.

For a reference yield \(E_R\), the fraction is:

\[
f_R=\frac{E}{E_R}
\]

and the number of equal projects required is:

\[
N_R=\frac{E_R}{E_{project}}
\]

## 9. Uncertainty propagation

For result \(z=f(x_1,\ldots,x_n)\) with covariance matrix \(\Sigma\), a
first-order approximation is:

\[
\operatorname{Var}(z)
\approx
\nabla f^\mathsf T\Sigma\nabla f
\]

For:

\[
E_L=a(E_A-E_C)
\]

and independent errors:

\[
\sigma_{E_L}^2
\approx
(E_A-E_C)^2\sigma_a^2
+a^2\sigma_{E_A}^2
+a^2\sigma_{E_C}^2
\]

The independence assumption will often be false. Monte Carlo propagation from
a joint posterior is preferable when attribution and counterfactual estimates
share evidence.

## 10. Bayesian form

A complete result should integrate uncertainty in actual energy,
counterfactual energy, and attribution:

\[
p(E_L\mid D)
=
\iiint
\delta\left(E_L-a(E_A-E_C)\right)
p(a,E_A,E_C\mid D)
\,da\,dE_A\,dE_C
\]

Report posterior medians, credible intervals, and sensitivity to alternative
priors and counterfactual models.

## 11. Normalization candidates

Raw energy favors larger bodies, longer intervals, and energy-inefficient
behavior. Report raw values alongside carefully named normalizations:

\[
F_{discretionary}
=
\frac{E_L^{allocated}}{E_{discretionary\,budget}}
\]

\[
P_{persistence}
=
\frac{E_L^{allocated}}{T}
\]

\[
\eta_{delivery}
=
\frac{E_{usefully\,delivered}}{E_{independent\,inputs}}
\]

No normalization should be called “amount of love.”

## 12. Optimization is ethically constrained

A possible engineering objective is:

\[
\max_\pi
\mathbb E[B_R(\pi)]
\]

subject to:

\[
E(\pi)\le E_{budget},
\quad H(\pi)\le H_{max},
\quad C(\pi)=1
\]

where \(B_R\) is recipient benefit, \(H\) is harm, and \(C\) is valid consent or
authorization. Maximizing energy expenditure itself would reward waste and can
produce dangerous conclusions.
