---
title: "Sequential Learning"
weight: 40
math: true
---


# Sequential Learning

This section covers sequential learning approaches including multi-armed
bandits, contextual bandits, best arm identification, and black-box
optimization.

- [Prediction, Learning and
  Games](https://www.ii.uni.wroc.pl/~lukstafi/pmwiki/uploads/AGT/Prediction_Learning_and_Games.pdf),
  Cesa-Bianchi N., Lugosi G. (2006).

## Multi-Armed Bandit

- **`TS`** [On the Likelihood that One Unknown Probability Exceeds
  Another in View of the Evidence of Two
  Samples](https://www.jstor.org/stable/pdf/2332286.pdf), Thompson W.
  (1933).
- [Exploration and Exploitation in Organizational
  Learning](https://www3.nd.edu/~ggoertz/abmir/march1991.pdf), March J.
  (1991).
- **`UCB1 / UCB2`** [Finite-time Analysis of the Multiarmed Bandit
  Problem](https://homes.di.unimi.it/~cesabian/Pubblicazioni/ml-02.pdf),
  Auer P., Cesa-Bianchi N., Fischer P. (2002).
- **`Empirical Bernstein / UCB-V`** [Exploration-exploitation tradeoff
  using variance estimates in multi-armed
  bandits](https://hal.inria.fr/hal-00711069/), Audibert J-Y, Munos R.,
  Szepesvari C. (2009).
- [Empirical Bernstein Bounds and Sample Variance
  Penalization](https://arxiv.org/abs/0907.3740), Maurer A., Ponti M.
  (2009).
- [An Empirical Evaluation of Thompson
  Sampling](https://papers.nips.cc/paper/4321-an-empirical-evaluation-of-thompson-sampling),
  Chapelle O., Li L. (2011).
- **`kl-UCB`** [The KL-UCB Algorithm for Bounded Stochastic Bandits and
  Beyond](https://arxiv.org/abs/1102.2490), Garivier A., Cappé O.
  (2011).
- **`KL-UCB`** [Kullback-Leibler Upper Confidence Bounds for Optimal
  Sequential
  Allocation](https://projecteuclid.org/euclid.aos/1375362558), Cappé O.
  et al. (2013).
- **`IDS`** [Information Directed Sampling and Bandits with
  Heteroscedastic Noise](https://arxiv.org/abs/1801.09667) Kirschner J.,
  Krause A. (2018).

### Contextual Bandits

- **`LinUCB`** [A Contextual-Bandit Approach to Personalized News
  Article Recommendation](https://arxiv.org/abs/1003.0146), Li L. et
  al. (2010).
- **`OFUL`** [Improved Algorithms for Linear Stochastic
  Bandits](https://papers.nips.cc/paper/4417-improved-algorithms-for-linear-stochastic-bandits),
  Abbasi-yadkori Y., Pal D., Szepesvári C. (2011).
- [Contextual Bandits with Linear Payoff
  Functions](http://proceedings.mlr.press/v15/chu11a.html), Chu W. et
  al. (2011).
- [Self-normalization techniques for streaming confident
  regression](https://hal.archives-ouvertes.fr/hal-01349727v2), Maillard
  O.-A. (2017).
- [Learning from Delayed Outcomes via Proxies with Applications to
  Recommender Systems](https://arxiv.org/abs/1807.09387) Mann T. et
  al. (2018). (prediction setting)
- [Weighted Linear Bandits for Non-Stationary
  Environments](https://arxiv.org/abs/1909.09146), Russac Y. et
  al. (2019).
- [Linear bandits with Stochastic Delayed
  Feedback](http://proceedings.mlr.press/v119/vernade20a.html),
  Vernade C. et al. (2020).

## Best Arm Identification

- **`Successive Elimination`** [Action Elimination and Stopping
  Conditions for the Multi-Armed Bandit and Reinforcement Learning
  Problems](http://jmlr.csail.mit.edu/papers/volume7/evendar06a/evendar06a.pdf),
  Even-Dar E. et al. (2006).
- **`LUCB`** [PAC Subset Selection in Stochastic Multi-armed
  Bandits](https://www.cse.iitb.ac.in/~shivaram/papers/ktas_icml_2012.pdf),
  Kalyanakrishnan S. et al. (2012).
- **`UGapE`** [Best Arm Identification: A Unified Approach to Fixed
  Budget and Fixed
  Confidence](https://hal.archives-ouvertes.fr/hal-00747005), Gabillon
  V., Ghavamzadeh M., Lazaric A. (2012).
- **`Sequential Halving`** [Almost Optimal Exploration in Multi-Armed
  Bandits](http://proceedings.mlr.press/v28/karnin13.pdf), Karnin Z. et
  al (2013).
- **`M-LUCB / M-Racing`** [Maximin Action Identification: A New Bandit
  Framework for Games](https://arxiv.org/abs/1602.04676), Garivier A.,
  Kaufmann E., Koolen W. (2016).
- **`Track-and-Stop`** [Optimal Best Arm Identification with Fixed
  Confidence](https://arxiv.org/abs/1602.04589), Garivier A.,
  Kaufmann E. (2016).
- **`LUCB-micro`** [Structured Best Arm Identification with Fixed
  Confidence](https://arxiv.org/abs/1706.05198), Huang R. et al. (2017).

## Black-box Optimization

- **`GP-UCB`** [Gaussian Process Optimization in the Bandit Setting: No
  Regret and Experimental Design](https://arxiv.org/abs/0912.3995),
  Srinivas N., Krause A., Kakade S., Seeger M. (2009).
- **`HOO`** [X–Armed Bandits](https://arxiv.org/abs/1001.4475), Bubeck
  S., Munos R., Stoltz G., Szepesvari C. (2009).
- **`DOO/SOO`** [Optimistic Optimization of a Deterministic Function
  without the Knowledge of its
  Smoothness](https://papers.nips.cc/paper/4304-optimistic-optimization-of-a-deterministic-function-without-the-knowledge-of-its-smoothness),
  Munos R. (2011).
- **`StoOO`** [From Bandits to Monte-Carlo Tree Search: The Optimistic
  Principle Applied to Optimization and
  Planning](https://hal.archives-ouvertes.fr/hal-00747575v4/), Munos R.
  (2014).
- **`StoSOO`** [Stochastic Simultaneous Optimistic
  Optimization](http://proceedings.mlr.press/v28/valko13.pdf), Valko M.,
  Carpentier A., Munos R. (2013).
- **`POO`** [Black-box optimization of noisy functions with unknown
  smoothness](https://hal.inria.fr/hal-01222915v4/), Grill J-B., Valko
  M., Munos R. (2015).
- **`EI-GP`** [Bayesian Optimization in
  AlphaGo](https://arxiv.org/abs/1812.06855), Chen Y. et al. (2018)