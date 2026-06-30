---
title: "Optimal Control"
weight: 10
math: true
---


# Optimal Control

This section covers fundamental approaches to optimal control, including
dynamic programming, linear programming, tree-based planning, control
theory, and model predictive control.

## Dynamic Programming

- (book) [Dynamic
  Programming](https://press.princeton.edu/titles/9234.html), Bellman R.
  (1957).
- (book) [Dynamic Programming and Optimal Control, Volumes 1 and
  2](http://web.mit.edu/dimitrib/www/dpchapter.html), Bertsekas D.
  (1995).
- (book) [Markov Decision Processes - Discrete Stochastic Dynamic
  Programming](http://eu.wiley.com/WileyCDA/WileyTitle/productCd-1118625870.html),
  Puterman M. (1995).
- [An Upper Bound on the Loss from Approximate Optimal-Value
  Functions](https://www.cis.upenn.edu/~mkearns/teaching/cis620/papers/SinghYee.pdf),
  Singh S., Yee R. (1994).
- [Stochastic optimization of sailing trajectories in an upwind
  regatta](https://link.springer.com/article/10.1057%2Fjors.2014.40),
  Dalang R. et al. (2015).

## Linear Programming

- (book) [Markov Decision Processes - Discrete Stochastic Dynamic
  Programming](http://eu.wiley.com/WileyCDA/WileyTitle/productCd-1118625870.html),
  Puterman M. (1995).
- **`REPS`** [Relative Entropy Policy
  Search](https://www.aaai.org/ocs/index.php/AAAI/AAAI10/paper/viewFile/1851/2264),
  Peters J. et al. (2010).

## Tree-Based Planning

- **`ExpectiMinimax`** [Optimal strategy in games with chance
  nodes](http://www.inf.u-szeged.hu/actacybernetica/edb/vol18n2/pdf/Melko_2007_ActaCybernetica.pdf),
  Melkó E., Nagy B. (2007).
- **`Sparse sampling`** [A sparse sampling algorithm for near-optimal
  planning in large Markov decision
  processes](https://www.cis.upenn.edu/~mkearns/papers/sparsesampling-journal.pdf),
  Kearns M. et al. (2002).
- **`MCTS`** [Efficient Selectivity and Backup Operators in Monte-Carlo
  Tree Search](https://hal.inria.fr/inria-00116992/document), Rémi
  Coulom, *SequeL* (2006).
- **`UCT`** [Bandit based Monte-Carlo
  Planning](http://ggp.stanford.edu/readings/uct.pdf), Kocsis L.,
  Szepesvári C. (2006).
- [Bandit Algorithms for Tree
  Search](https://hal.inria.fr/inria-00136198v2), Coquelin P-A.,
  Munos R. (2007).
- **`OPD`** [Optimistic Planning for Deterministic
  Systems](https://hal.inria.fr/hal-00830182), Hren J., Munos R. (2008).
- **`OLOP`** [Open Loop Optimistic
  Planning](http://sbubeck.com/COLT10_BM.pdf), Bubeck S., Munos R.
  (2010).
- **`SOOP`** [Optimistic Planning for Continuous-Action Deterministic
  Systems](http://researchers.lille.inria.fr/munos/papers/files/adprl13-soop.pdf),
  Buşoniu L. et al. (2011).
- **`OPSS`** [Optimistic planning for sparsely stochastic
  systems](https://www.dcsc.tudelft.nl/~bdeschutter/pub/rep/11_007.pdf), L.
  Buşoniu, R. Munos, B. De Schutter, and R. Babuska (2011).
- **`HOOT`** [Sample-Based Planning for Continuous ActionMarkov Decision
  Processes](https://www.aaai.org/ocs/index.php/ICAPS/ICAPS11/paper/viewFile/2679/3175),
  Mansley C., Weinstein A., Littman M. (2011).
- **`HOLOP`** [Bandit-Based Planning and Learning inContinuous-Action
  Markov Decision
  Processes](https://pdfs.semanticscholar.org/a445/d8cc503781c481c3f3c4ee1758b862b3e869.pdf),
  Weinstein A., Littman M. (2012).
- **`BRUE`** [Simple Regret Optimization in Online Planning for Markov
  Decision
  Processes](https://www.jair.org/index.php/jair/article/view/10905/26003),
  Feldman Z. and Domshlak C. (2014).
- **`LGP`** [Logic-Geometric Programming: An Optimization-Based Approach
  to Combined Task and Motion
  Planning](https://ipvs.informatik.uni-stuttgart.de/mlr/papers/15-toussaint-IJCAI.pdf),
  Toussaint M. (2015). [🎞️](https://www.youtube.com/watch?v=B2s85xfo2uE)
- **`AlphaGo`** [Mastering the game of Go with deep neural networks and
  tree search](https://www.nature.com/articles/nature16961), Silver D.
  et al. (2016).
- **`AlphaGo Zero`** [Mastering the game of Go without human
  knowledge](https://www.nature.com/articles/nature24270), Silver D. et
  al. (2017).
- **`AlphaZero`** [Mastering Chess and Shogi by Self-Play with a General
  Reinforcement Learning Algorithm](https://arxiv.org/abs/1712.01815),
  Silver D. et al. (2017).
- **`TrailBlazer`** [Blazing the trails before beating the path:
  Sample-efficient Monte-Carlo
  planning](https://papers.nips.cc/paper/6253-blazing-the-trails-before-beating-the-path-sample-efficient-monte-carlo-planning.pdf),
  Grill J. B., Valko M., Munos R. (2017).
- **`MCTSnets`** [Learning to search with
  MCTSnets](https://arxiv.org/abs/1802.04697), Guez A. et al. (2018).
- **`ADI`** [Solving the Rubik’s Cube Without Human
  Knowledge](https://arxiv.org/abs/1805.07470), McAleer S. et
  al. (2018).
- **`OPC/SOPC`** [Continuous-action planning for discounted
  inﬁnite-horizon nonlinear optimal control with Lipschitz
  values](http://busoniu.net/files/papers/aut18.pdf), Buşoniu L., Pall
  E., Munos R. (2018).
- [Real-time tree search with pessimistic scenarios: Winning the NeurIPS
  2018 Pommerman
  Competition](http://proceedings.mlr.press/v101/osogami19a.html),
  Osogami T., Takahashi T. (2019)

## Control Theory

- (book) [The Mathematical Theory of Optimal
  Processes](https://books.google.fr/books?id=kwzq0F4cBVAC&printsec=frontcover&redir_esc=y#v=onepage&q&f=false), L. S.
  Pontryagin, Boltyanskii V. G., Gamkrelidze R. V., and Mishchenko E. F.
  (1962).
- (book) [Constrained Control and
  Estimation](http://www.springer.com/gp/book/9781852335489), Goodwin G.
  (2005).
- **`PI²`** [A Generalized Path Integral Control Approach to
  Reinforcement
  Learning](http://www.jmlr.org/papers/volume11/theodorou10a/theodorou10a.pdf),
  Theodorou E. et al. (2010).
- **`PI²-CMA`** [Path Integral Policy Improvement with Covariance Matrix
  Adaptation](https://arxiv.org/abs/1206.4621), Stulp F., Sigaud O.
  (2010).
- **`iLQG`** [A generalized iterative LQG method for locally-optimal
  feedback control of constrained nonlinear stochastic
  systems](http://maeresearch.ucsd.edu/skelton/publications/weiwei_ilqg_CDC43.pdf),
  Todorov E. (2005). [:octocat:](https://github.com/neka-nat/ilqr-gym)
- **`iLQG+`** [Synthesis and stabilization of complex behaviors through
  online trajectory
  optimization](https://homes.cs.washington.edu/~todorov/papers/TassaIROS12.pdf),
  Tassa Y. (2012).

## Model Predictive Control

- (book) [Model Predictive
  Control](http://een.iust.ac.ir/profs/Shamaghdari/MPC/Resources/),
  Camacho E. (1995).
- (book) [Predictive Control With
  Constraints](https://books.google.fr/books/about/Predictive_Control.html?id=HV_Y58c7KiwC&redir_esc=y),
  Maciejowski J. M. (2002).
- [Linear Model Predictive Control for Lane Keeping and Obstacle
  Avoidance on Low Curvature
  Roads](http://ieeexplore.ieee.org/document/6728261/), Turri V. et
  al. (2013).
- **`MPCC`** [Optimization-based autonomous racing of 1:43 scale RC
  cars](https://arxiv.org/abs/1711.07300), Liniger A. et al. (2014).
  [🎞️](https://www.youtube.com/watch?v=mXaElWYQKC4) \|
  [🎞️](https://www.youtube.com/watch?v=JoHfJ6LEKVo)
- **`MIQP`** [Optimal trajectory planning for autonomous driving
  integrating logical constraints: An MIQP
  perspective](https://hal.archives-ouvertes.fr/hal-01342358v1/document),
  Qian X., Altché F., Bender P., Stiller C. de La Fortelle A. (2016).