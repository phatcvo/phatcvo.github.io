---
title: "Safe-Optimal Control for Motion Planning"
description: "A survey of safe-optimal control for motion planning based on reinforcement learning — optimal and safe control, game theory, sequential and demonstration learning, and motion planning."
date: 2023-01-01
weight: 30
math: true
collection_type: Article
toc: true
---

A survey of safe-optimal control for motion planning based on reinforcement learning — covering optimal and safe control, game theory, sequential and demonstration-based learning, and motion planning. The sections below collect the key references for each topic.

## Optimal Control

This section covers fundamental approaches to optimal control, including
dynamic programming, linear programming, tree-based planning, control
theory, and model predictive control.

### Dynamic Programming

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
  Dalang R. et al. (2015).

### Linear Programming

- (book) [Markov Decision Processes - Discrete Stochastic Dynamic
  Programming](http://eu.wiley.com/WileyCDA/WileyTitle/productCd-1118625870.html),
  Puterman M. (1995).
- **`REPS`** [Relative Entropy Policy
  Search](https://www.aaai.org/ocs/index.php/AAAI/AAAI10/paper/viewFile/1851/2264),
  Peters J. et al. (2010).

### Tree-Based Planning

- **`ExpectiMinimax`** [Optimal strategy in games with chance
  nodes](http://www.inf.u-szeged.hu/actacybernetica/edb/vol18n2/pdf/Melko_2007_ActaCybernetica.pdf),
  Melkó E., Nagy B. (2007).
- **`Sparse sampling`** [A sparse sampling algorithm for near-optimal
  planning in large Markov decision
  processes](https://www.cis.upenn.edu/~mkearns/papers/sparsesampling-journal.pdf),
  Kearns M. et al. (2002).
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
  Buşoniu L. et al. (2011).
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
  et al. (2016).
- **`AlphaGo Zero`** [Mastering the game of Go without human
  knowledge](https://www.nature.com/articles/nature24270), Silver D. et
  al. (2017).
- **`AlphaZero`** [Mastering Chess and Shogi by Self-Play with a General
  Reinforcement Learning Algorithm](https://arxiv.org/abs/1712.01815),
  Silver D. et al. (2017).
- **`TrailBlazer`** [Blazing the trails before beating the path:
  Sample-efficient Monte-Carlo
  planning](https://papers.nips.cc/paper/6253-blazing-the-trails-before-beating-the-path-sample-efficient-monte-carlo-planning.pdf),
  Grill J. B., Valko M., Munos R. (2017).
- **`MCTSnets`** [Learning to search with
  MCTSnets](https://arxiv.org/abs/1802.04697), Guez A. et al. (2018).
- **`ADI`** [Solving the Rubik’s Cube Without Human
  Knowledge](https://arxiv.org/abs/1805.07470), McAleer S. et
  al. (2018).
- **`OPC/SOPC`** [Continuous-action planning for discounted
  inﬁnite-horizon nonlinear optimal control with Lipschitz
  values](http://busoniu.net/files/papers/aut18.pdf), Buşoniu L., Pall
  E., Munos R. (2018).
- [Real-time tree search with pessimistic scenarios: Winning the NeurIPS
  2018 Pommerman
  Competition](http://proceedings.mlr.press/v101/osogami19a.html),
  Osogami T., Takahashi T. (2019)

### Control Theory

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
  Theodorou E. et al. (2010).
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

### Model Predictive Control

- (book) [Model Predictive
  Control](http://een.iust.ac.ir/profs/Shamaghdari/MPC/Resources/),
  Camacho E. (1995).
- (book) [Predictive Control With
  Constraints](https://books.google.fr/books/about/Predictive_Control.html?id=HV_Y58c7KiwC&redir_esc=y),
  Maciejowski J. M. (2002).
- [Linear Model Predictive Control for Lane Keeping and Obstacle
  Avoidance on Low Curvature
  Roads](http://ieeexplore.ieee.org/document/6728261/), Turri V. et
  al. (2013).
- **`MPCC`** [Optimization-based autonomous racing of 1:43 scale RC
  cars](https://arxiv.org/abs/1711.07300), Liniger A. et al. (2014).
  [🎞️](https://www.youtube.com/watch?v=mXaElWYQKC4) \|
  [🎞️](https://www.youtube.com/watch?v=JoHfJ6LEKVo)
- **`MIQP`** [Optimal trajectory planning for autonomous driving
  integrating logical constraints: An MIQP
  perspective](https://hal.archives-ouvertes.fr/hal-01342358v1/document),
  Qian X., Altché F., Bender P., Stiller C. de La Fortelle A. (2016).

## Safe Control

This section covers approaches to ensuring safety in control systems,
including robust control, risk-averse control, value-constrained
control, state-constrained control and stability, and uncertain
dynamical systems.

### Robust Control

- [Minimax analysis of stochastic
  problems](https://www2.isye.gatech.edu/~anton/MinimaxSP.pdf), Shapiro
  A., Kleywegt A. (2002).
- **`Robust DP`** [Robust Dynamic
  Programming](https://www.researchgate.net/publication/220442530/download),
  Iyengar G. (2005).
- [Robust Planning and
  Optimization](https://www.researchgate.net/profile/Francisco_Perez-Galarce/post/can_anyone_recommend_a_report_or_article_on_two_stage_robust_optimization/attachment/59d62578c49f478072e9a500/AS%3A272164542976002%401441900491330/download/2011+-+Robust+planning+and+optimization.pdf),
  Laumanns M. (2011). (lecture notes)
- [Robust Markov Decision
  Processes](https://pubsonline.informs.org/doi/pdf/10.1287/moor.1120.0566),
  Wiesemann W., Kuhn D., Rustem B. (2012).
- [Safe and Robust Learning Control with Gaussian
  Processes](http://www.dynsyslab.org/wp-content/papercite-data/pdf/berkenkamp-ecc15.pdf),
  Berkenkamp F., Schoellig A. (2015).
  [🎞️](https://www.youtube.com/watch?v=YqhLnCm0KXY)
- **`Tube-MPPI`** [Robust Sampling Based Model Predictive Control with
  Sparse Objective
  Information](http://www.roboticsproceedings.org/rss14/p42.pdf),
  Williams G. et al. (2018).
  [🎞️](https://www.youtube.com/watch?v=32v-e3dptjo)
- [Safe Learning in Robotics: From Learning-Based Control to Safe
  Reinforcement Learning](https://arxiv.org/abs/2108.06266), Lukas
  Bronke et al. (2021).
  [:octocat:](https://github.com/utiasDSL/safe-control-gym)

### Risk-Averse Control

- [A Comprehensive Survey on Safe Reinforcement
  Learning](http://jmlr.org/papers/v16/garcia15a.html), García J.,
  Fernández F. (2015).
- **`RA-QMDP`** [Risk-averse Behavior Planning for Autonomous Driving
  under Uncertainty](https://arxiv.org/abs/1812.01254), Naghshvar M. et
  al. (2018).
- **`StoROO`** [X-Armed Bandits: Optimizing Quantiles and Other
  Risks](https://arxiv.org/abs/1904.08205), Torossian L., Garivier A.,
  Picheny V. (2019).
- [Worst Cases Policy Gradients](https://arxiv.org/abs/1911.03618),
  Tang Y. C. et al. (2019).
- [Model-Free Risk-Sensitive Reinforcement
  Learning](https://arxiv.org/abs/2111.02907), Delétang G. et
  al. (2021).
- [Optimal Thompson Sampling strategies for support-aware CVaR
  bandits](https://proceedings.mlr.press/v139/baudry21a.html), Baudry
  D., Gautron R., Kaufmann E., Maillard O. (2021).

### Value-Constrained Control

- **`ICS`** [Will the Driver Seat Ever Be
  Empty?](https://hal.inria.fr/hal-00965176), Fraichard T. (2014).
- **`SafeOPT`** [Safe Controller Optimization for Quadrotors with
  Gaussian Processes](https://arxiv.org/abs/1509.01066), Berkenkamp F.,
  Schoellig A., Krause A. (2015).
  [🎞️](https://www.youtube.com/watch?v=GiqNQdzc5TI)
  [:octocat:](https://github.com/befelix/SafeOpt)
- **`SafeMDP`** [Safe Exploration in Finite Markov Decision Processes
  with Gaussian Processes](https://arxiv.org/abs/1606.04753), Turchetta
  M., Berkenkamp F., Krause A. (2016).
  [:octocat:](https://github.com/befelix/SafeMDP)
- **`RSS`** [On a Formal Model of Safe and Scalable Self-driving
  Cars](https://arxiv.org/abs/1708.06374), Shalev-Shwartz S. et
  al. (2017).
- **`CPO`** [Constrained Policy
  Optimization](https://arxiv.org/abs/1705.10528), Achiam J., Held D.,
  Tamar A., Abbeel P. (2017).
  [:octocat:](https://github.com/jachiam/cpo)
- **`RCPO`** [Reward Constrained Policy
  Optimization](https://arxiv.org/abs/1805.11074), Tessler C., Mankowitz
  D., Mannor S. (2018).
- **`BFTQ`** [A Fitted-Q Algorithm for Budgeted
  MDPs](https://hal.archives-ouvertes.fr/hal-01867353), Carrara N. et
  al. (2018).
- **`SafeMPC`** [Learning-based Model Predictive Control for Safe
  Exploration](https://arxiv.org/abs/1803.08287), Koller T, Berkenkamp
  F., Turchetta M. Krause A. (2018).
- **`CCE`** [Constrained Cross-Entropy Method for Safe Reinforcement
  Learning](https://papers.nips.cc/paper/7974-constrained-cross-entropy-method-for-safe-reinforcement-learning),
  Wen M., Topcu U. (2018).
  [:octocat:](https://github.com/liuzuxin/safe-mbrl)
- **`LTL-RL`** [Reinforcement Learning with Probabilistic Guarantees for
  Autonomous Driving](https://arxiv.org/abs/1904.07189), Bouton M. et
  al. (2019).
- [Safe Reinforcement Learning with Scene Decomposition for Navigating
  Complex Urban Environments](https://arxiv.org/abs/1904.11483v1),
  Bouton M. et al. (2019).
  [:octocat:](https://github.com/sisl/AutomotivePOMDPs.jl)
- [Batch Policy Learning under
  Constraints](https://arxiv.org/abs/1903.08738), Le H., Voloshin C.,
  Yue Y. (2019).
- [Value constrained model-free continuous
  control](https://arxiv.org/abs/1902.04623), Bohez S. et al (2019).
  [🎞️](https://sites.google.com/view/successatanycost)
- [Safely Learning to Control the Constrained Linear Quadratic
  Regulator](https://ieeexplore.ieee.org/abstract/document/8814865),
  Dean S. et al (2019).
- [Learning to Walk in the Real World with Minimal Human
  Effort](https://arxiv.org/abs/2002.08550), Ha S. et al. (2020)
  [🎞️](https://youtu.be/cwyiq6dCgOc)
- [Responsive Safety in Reinforcement Learning by PID Lagrangian
  Methods](https://arxiv.org/abs/2007.03964), Stooke A., Achiam J.,
  Abbeel P. (2020).
  [:octocat:](https://github.com/astooke/rlpyt/tree/master/rlpyt/projects/safe)
- **`Envelope MOQ-Learning`** [A Generalized Algorithm for
  Multi-Objective Reinforcement Learning and Policy
  Adaptation](https://arxiv.org/abs/1908.08342), Yang R. et al (2019).

### State-Constrained Control and Stability

- **`HJI-reachability`** [Safe learning for control: Combining
  disturbance estimation, reachability analysis and reinforcement
  learning with systematic
  exploration](http://kth.diva-portal.org/smash/get/diva2:1140173/FULLTEXT01.pdf),
  Heidenreich C. (2017).
- **`MPC-HJI`** [On Infusing Reachability-Based Safety Assurance within
  Probabilistic Planning Frameworks for Human-Robot Vehicle
  Interactions](https://stanfordasl.github.io/wp-content/papercite-data/pdf/Leung.Schmerling.Chen.ea.ISER18.pdf),
  Leung K. et al. (2018).
- [A General Safety Framework for Learning-Based Control in Uncertain
  Robotic Systems](https://arxiv.org/abs/1705.01292), Fisac J. et al
  (2017).
  [🎞️](https://www.youtube.com/watch?v=WAAxyeSk2bw&feature=youtu.be)
- [Safe Model-based Reinforcement Learning with Stability
  Guarantees](https://arxiv.org/abs/1705.08551), Berkenkamp F. et
  al. (2017).
- **`Lyapunov-Net`** [Safe Interactive Model-Based
  Learning](https://arxiv.org/abs/1911.06556), Gallieri M. et
  al. (2019).
- [Enforcing robust control guarantees within neural network
  policies](https://arxiv.org/abs/2011.08105), Donti P. et al. (2021).
  [:octocat:](https://github.com/locuslab/robust-nn-control)
- **`ATACOM`** [Robot Reinforcement Learning on the Constraint
  Manifold](https://openreview.net/forum?id=zwo1-MdMl1P), Liu P. et al
  (2021).

### Uncertain Dynamical Systems

- [Simulation of Controlled Uncertain Nonlinear
  Systems](https://www.sciencedirect.com/science/article/pii/009630039400112H),
  Tibken B., Hofer E. (1995).
- [Trajectory computation of dynamic uncertain
  systems](https://ieeexplore.ieee.org/iel5/8969/28479/01272787.pdf),
  Adrot O., Flaus J-M. (2002).
- [Simulation of Uncertain Dynamic Systems Described By Interval Models:
  a
  Survey](https://www.sciencedirect.com/science/article/pii/S1474667016362206),
  Puig V. et al. (2005).
- [Design of interval observers for uncertain dynamical
  systems](https://hal.inria.fr/hal-01276439/file/Interval_Survey.pdf),
  Efimov D., Raïssi T. (2016).

## Game Theory

This section covers game-theoretic approaches to multi-agent control and
decision-making.

- [Hierarchical Game-Theoretic Planning for Autonomous
  Vehicles](https://arxiv.org/abs/1810.05766), Fisac J. et al. (2018).
- [Efficient Iterative Linear-Quadratic Approximations for Nonlinear
  Multi-Player General-Sum Differential
  Games](https://arxiv.org/abs/1909.04694), Fridovich-Keil D. et
  al. (2019).
  [🎞️](https://www.youtube.com/watch?v=KPEPk-QrkQ8&feature=youtu.be)

## Sequential Learning

This section covers sequential learning approaches including multi-armed
bandits, contextual bandits, best arm identification, and black-box
optimization.

- [Prediction, Learning and
  Games](https://www.ii.uni.wroc.pl/~lukstafi/pmwiki/uploads/AGT/Prediction_Learning_and_Games.pdf),
  Cesa-Bianchi N., Lugosi G. (2006).

### Multi-Armed Bandit

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
  et al. (2013).
- **`IDS`** [Information Directed Sampling and Bandits with
  Heteroscedastic Noise](https://arxiv.org/abs/1801.09667) Kirschner J.,
  Krause A. (2018).

#### Contextual Bandits

- **`LinUCB`** [A Contextual-Bandit Approach to Personalized News
  Article Recommendation](https://arxiv.org/abs/1003.0146), Li L. et
  al. (2010).
- **`OFUL`** [Improved Algorithms for Linear Stochastic
  Bandits](https://papers.nips.cc/paper/4417-improved-algorithms-for-linear-stochastic-bandits),
  Abbasi-yadkori Y., Pal D., Szepesvári C. (2011).
- [Contextual Bandits with Linear Payoff
  Functions](http://proceedings.mlr.press/v15/chu11a.html), Chu W. et
  al. (2011).
- [Self-normalization techniques for streaming confident
  regression](https://hal.archives-ouvertes.fr/hal-01349727v2), Maillard
  O.-A. (2017).
- [Learning from Delayed Outcomes via Proxies with Applications to
  Recommender Systems](https://arxiv.org/abs/1807.09387) Mann T. et
  al. (2018). (prediction setting)
- [Weighted Linear Bandits for Non-Stationary
  Environments](https://arxiv.org/abs/1909.09146), Russac Y. et
  al. (2019).
- [Linear bandits with Stochastic Delayed
  Feedback](http://proceedings.mlr.press/v119/vernade20a.html),
  Vernade C. et al. (2020).

### Best Arm Identification

- **`Successive Elimination`** [Action Elimination and Stopping
  Conditions for the Multi-Armed Bandit and Reinforcement Learning
  Problems](http://jmlr.csail.mit.edu/papers/volume7/evendar06a/evendar06a.pdf),
  Even-Dar E. et al. (2006).
- **`LUCB`** [PAC Subset Selection in Stochastic Multi-armed
  Bandits](https://www.cse.iitb.ac.in/~shivaram/papers/ktas_icml_2012.pdf),
  Kalyanakrishnan S. et al. (2012).
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
  Confidence](https://arxiv.org/abs/1706.05198), Huang R. et al. (2017).

### Black-box Optimization

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
  AlphaGo](https://arxiv.org/abs/1812.06855), Chen Y. et al. (2018)

## Reinforcement Learning

This section covers the comprehensive landscape of reinforcement
learning, from theoretical foundations to practical applications in
control and decision-making.

- [Reinforcement learning: A
  survey](https://www.jair.org/media/301/live-301-1562-jair.pdf),
  Kaelbling L. et al. (1996).

### Theory

#### Generative Model

- **`QVI`** [On the Sample Complexity of Reinforcement Learning with a
  Generative Model](https://arxiv.org/abs/1206.6461), Azar M., Munos R.,
  Kappen B. (2012).
- [Model-Based Reinforcement Learning with a Generative Model is Minimax
  Optimal](https://arxiv.org/abs/1906.03804), Agarwal A. et al. (2019).

#### Policy Gradient

- [Policy Gradient Methods for Reinforcement Learning with Function
  Approximation](https://papers.nips.cc/paper/1713-policy-gradient-methods-for-reinforcement-learning-with-function-approximation),
  Sutton R. et al (2000).
- [Approximately Optimal Approximate Reinforcement
  Learning](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/KakadeLangford-icml2002.pdf),
  Kakade S., Langford J. (2002).
- [On the Theory of Policy Gradient Methods: Optimality, Approximation,
  and Distribution Shift](https://arxiv.org/abs/1908.00261), Agarwal A.
  et al. (2019)
- [PC-PG: Policy Cover Directed Exploration for Provable Policy Gradient
  Learning](https://arxiv.org/abs/2007.08459), Agarwal A. et al. (2020)
- [Is the Policy Gradient a
  Gradient?](https://arxiv.org/abs/1906.07073), Nota C., Thomas P. S.
  (2020).

#### Linear Systems

- [PAC Adaptive Control of Linear
  Systems](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.49.339&rep=rep1&type=pdf),
  Fiechter C.-N. (1997)
- **`OFU-LQ`** [Regret Bounds for the Adaptive Control of Linear
  Quadratic
  Systems](http://proceedings.mlr.press/v19/abbasi-yadkori11a/abbasi-yadkori11a.pdf),
  Abbasi-Yadkori Y., Szepesvari C. (2011).
- **`TS-LQ`** [Improved Regret Bounds for Thompson Sampling in Linear
  Quadratic Control
  Problems](http://proceedings.mlr.press/v80/abeille18a.html), Abeille
  M., Lazaric A. (2018).

### Value-based Methods

- **`DQN`** [Playing Atari with Deep Reinforcement
  Learning](https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf), Mnih V. et
  al. (2013). [🎞️](https://www.youtube.com/watch?v=iqXKQf2BOSE)
- **`DDQN`** [Deep Reinforcement Learning with Double
  Q-learning](https://arxiv.org/abs/1509.06461), van Hasselt H.,
  Silver D. et al. (2015).
- **`Rainbow`** [Rainbow: Combining Improvements in Deep Reinforcement
  Learning](https://arxiv.org/abs/1710.02298), Hessel M. et al. (2017).

### Policy-based Methods

#### Policy Gradient

- **`REINFORCE`** [Simple Statistical Gradient-Following Algorithms for
  Connectionist Reinforcement
  Learning](http://www-anw.cs.umass.edu/~barto/courses/cs687/williams92simple.pdf),
  Williams R. (1992).
- **`TRPO`** [Trust Region Policy
  Optimization](https://arxiv.org/abs/1502.05477), Schulman J. et
  al. (2015). [🎞️](https://www.youtube.com/watch?v=KJ15iGGJFvQ)
- **`PPO`** [Proximal Policy Optimization
  Algorithms](https://arxiv.org/abs/1707.06347), Schulman J. et
  al. (2017). [🎞️](https://www.youtube.com/watch?v=bqdjsmSoSgI)

#### Actor-Critic

- **`DDPG`** [Continuous Control With Deep Reinforcement
  Learning](https://arxiv.org/abs/1509.02971), Lillicrap T. et
  al. (2015).
- **`A3C`** [Asynchronous Methods for Deep Reinforcement
  Learning](https://arxiv.org/abs/1602.01783), Mnih V. et al 2016.
- **`SAC`** [Soft Actor-Critic : Off-Policy Maximum Entropy Deep
  Reinforcement Learning with a Stochastic
  Actor](https://arxiv.org/abs/1801.01290), Haarnoja T. et al. (2018).
  [🎞️](https://vimeo.com/252185258)

### Model-based Methods

- **`PILCO`** [PILCO: A Model-Based and Data-Efficient Approach to
  Policy Search](http://mlg.eng.cam.ac.uk/pub/pdf/DeiRas11.pdf),
  Deisenroth M., Rasmussen C. (2011).
- **`MPPI`** [Information Theoretic MPC for Model-Based Reinforcement
  Learning](https://ieeexplore.ieee.org/document/7989202/), Williams G.
  et al. (2017).
  [:octocat:](https://github.com/ferreirafabio/mppi_pendulum)
  [🎞️](https://www.youtube.com/watch?v=f2at-cqaJMM)
- **`MuZero`** [Mastering Atari, Go, Chess and Shogi by Planning with a
  Learned Model](https://arxiv.org/abs/1911.08265), Schrittwiese J. et
  al. (2019).
  [:octocat:](https://github.com/werner-duvaud/muzero-general)

### Exploration

- **`HER`** [Hindsight Experience
  Replay](https://arxiv.org/abs/1707.01495), Andrychowicz M. et
  al. (2017). [🎞️](https://www.youtube.com/watch?v=Dz_HuzgMxzo)
- **`RND`** [Exploration by Random Network
  Distillation](https://arxiv.org/abs/1810.12894), Burda Y. et
  al. (OpenAI) (2018).
  [🎞️](https://openai.com/blog/reinforcement-learning-with-prediction-based-rewards/)
- **`Go-Explore`** [Go-Explore: a New Approach for Hard-Exploration
  Problems](https://arxiv.org/abs/1901.10995), Ecoffet A. et al. (Uber)
  (2018). [🎞️](https://www.youtube.com/watch?v=gnGyUPd_4Eo)

### Multi-agent RL

- **`MADDPG`** [Multi-Agent Actor-Critic for Mixed
  Cooperative-Competitive
  Environments](https://arxiv.org/abs/1706.02275), Lowe R. et al (2017).
  [:octocat:](https://github.com/openai/maddpg)
- **`FTW`** [Human-level performance in first-person multiplayer games
  with population-based deep reinforcement
  learning](https://arxiv.org/abs/1807.01281), Jaderberg M. et
  al. (2018). [🎞️](https://www.youtube.com/watch?v=dltN4MxV1RI)
- **`MAPPO`** [The Surprising Effectiveness of MAPPO in Cooperative,
  Multi-Agent Games](https://arxiv.org/abs/2103.01955), Yu C. et
  al. (2021). [:octocat:](https://github.com/marlbenchmark/on-policy)

### Safe Reinforcement Learning

- [A Comprehensive Survey on Safe Reinforcement
  Learning](http://jmlr.org/papers/v16/garcia15a.html), García J.,
  Fernández F. (2015).
- **`CPO`** [Constrained Policy
  Optimization](https://arxiv.org/abs/1705.10528), Achiam J., Held D.,
  Tamar A., Abbeel P. (2017).
  [:octocat:](https://github.com/jachiam/cpo)
- [Safe Learning in Robotics: From Learning-Based Control to Safe
  Reinforcement Learning](https://arxiv.org/abs/2108.06266), Lukas
  Bronke et al. (2021).
  [:octocat:](https://github.com/utiasDSL/safe-control-gym)

### Transfer Learning and Meta-Learning

- **`MAML`** [Model-Agnostic Meta-Learning for Fast Adaptation of Deep
  Networks](https://arxiv.org/abs/1703.03400), Finn C., Abbeel P.,
  Levine S. (2017). [🎞️](https://sites.google.com/view/maml)
- [Sim-to-Real: Learning Agile Locomotion For Quadruped
  Robots](https://arxiv.org/abs/1804.10332), Tan J. et al. (2018).
  [🎞️](https://www.youtube.com/watch?v=lUZUr7jxoqM)
- [Learning Dexterous In-Hand
  Manipulation](https://blog.openai.com/learning-dexterity/), OpenAI
  (2018). [🎞️](https://www.youtube.com/watch?v=DKe8FumoD4E)

### Hierarchical RL

- **`OC`** [The Option-Critic
  Architecture](https://arxiv.org/abs/1609.05140), Bacon P-L., Harb J.,
  Precup D. (2016).
- **`FuNs`** [FeUdal Networks for Hierarchical Reinforcement
  Learning](https://arxiv.org/abs/1703.01161), Vezhnevets A. et
  al. (2017).
- **`DeepLoco`** [DeepLoco: Dynamic Locomotion Skills Using Hierarchical
  Deep Reinforcement
  Learning](https://www.cs.ubc.ca/~van/papers/2017-TOG-deepLoco/),
  Peng X. et al. (2017).
  [🎞️](https://www.youtube.com/watch?v=hd1yvLWm6oA)

### Offline RL

- **`CQL`** [Conservative Q-Learning for Offline Reinforcement
  Learning](https://arxiv.org/abs/2006.04779), Kumar A. et al. (2020).
- [Decision Transformer: Reinforcement Learning via Sequence
  Modeling](https://sites.google.com/berkeley.edu/decision-transformer),
  Chen L., Lu K. et al. (2021).
  [:octocat:](https://github.com/kzl/decision-transformer)

> **Note**
>
> This section provides a comprehensive overview of reinforcement
> learning approaches relevant to safe and optimal control. For the
> complete list of papers and more detailed subsections, please refer to
> the original survey document.

## Learning from Demonstrations

This section covers approaches to learning control policies from expert
demonstrations, including imitation learning and inverse reinforcement
learning.

### Imitation Learning

- **`DAgger`** [A Reduction of Imitation Learning and Structured
  Predictionto No-Regret Online
  Learning](https://www.cs.cmu.edu/~sross1/publications/Ross-AIStats11-NoRegret.pdf),
  Ross S., Gordon G., Bagnell J. A. (2011).
- **`GAIL`** [Generative Adversarial Imitation
  Learning](https://arxiv.org/abs/1606.03476), Ho J., Ermon S. (2016).
- **`DQfD`** [Learning from Demonstrations for Real World Reinforcement
  Learning](https://pdfs.semanticscholar.org/a7fb/199f85943b3fb6b5f7e9f1680b2e2a445cce.pdf),
  Hester T. et al. (2017).
  [🎞️](https://www.youtube.com/watch?v=JR6wmLaYuu4&list=PLdjpGm3xcO-0aqVf--sBZHxCKg-RZfa5T)
- **`Branched`** [End-to-end Driving via Conditional Imitation
  Learning](https://arxiv.org/abs/1710.02410), Codevilla F. et
  al. (2017). [🎞️](https://www.youtube.com/watch?v=cFtnflNe5fM)
- **`DeepMimic`** [DeepMimic: Example-Guided Deep Reinforcement Learning
  of Physics-Based Character
  Skills](https://xbpeng.github.io/projects/DeepMimic/index.html),
  Peng X. B. et al. (2018).
  [🎞️](https://www.youtube.com/watch?v=vppFvq2quQ0&feature=youtu.be)

#### Applications to Autonomous Driving

- [ALVINN, an autonomous land vehicle in a neural
  network](https://papers.nips.cc/paper/95-alvinn-an-autonomous-land-vehicle-in-a-neural-network),
  Pomerleau D. (1989).
- [End to End Learning for Self-Driving
  Cars](https://arxiv.org/abs/1604.07316), Bojarski M. et al. (2016).
  [🎞️](https://www.youtube.com/watch?v=qhUvQiKec2U)
- [Imitating Driver Behavior with Generative Adversarial
  Networks](https://arxiv.org/abs/1701.06699), Kuefler A. et al. (2017).
- **`PS-GAIL`** [Multi-Agent Imitation Learning for Driving
  Simulation](https://arxiv.org/abs/1803.01044), Bhattacharyya R. et
  al. (2018).
  [🎞️](https://github.com/sisl/ngsim_env/blob/master/media/single_multi_model_2_seed_1.gif)
  [:octocat:](https://github.com/sisl/ngsim_env)

### Inverse Reinforcement Learning

- **`Projection`** [Apprenticeship learning via inverse reinforcement
  learning](http://ai.stanford.edu/~ang/papers/icml04-apprentice.pdf),
  Abbeel P., Ng A. (2004).
- **`MEIRL`** [Maximum Entropy Inverse Reinforcement
  Learning](https://www.aaai.org/Papers/AAAI/2008/AAAI08-227.pdf),
  Ziebart B. et al. (2008).
- **`CIOC`** [Continuous Inverse Optimal Control with Locally Optimal
  Examples](http://graphics.stanford.edu/projects/cioc/), Levine S.,
  Koltun V. (2012).
  [🎞️](http://graphics.stanford.edu/projects/cioc/cioc.mp4)
- **`GCL`** [Guided Cost Learning: Deep Inverse Optimal Control via
  Policy Optimization](https://arxiv.org/abs/1603.00448), Finn C. et
  al. (2016). [🎞️](https://www.youtube.com/watch?v=hXxaepw0zAw)

#### Applications to Autonomous Driving

- [Apprenticeship Learning for Motion Planning, with Application to
  Parking Lot Navigation](http://ieeexplore.ieee.org/document/4651222/),
  Abbeel P. et al. (2008).
- [Navigate like a cabbie: Probabilistic reasoning from observed
  context-aware
  behavior](http://www.cs.cmu.edu/~bziebart/publications/navigate-bziebart.pdf),
  Ziebart B. et al. (2008).
- [Learning Autonomous Driving Styles and Maneuvers from Expert
  Demonstration](https://www.ri.cmu.edu/pub_files/2012/6/iser12.pdf),
  Silver D. et al. (2012).
- [Watch This: Scalable Cost-Function Learning for Path Planning in
  Urban Environments](https://arxiv.org/abs/1607.02329), Wulfmeier M.
  (2016). [🎞️](https://www.youtube.com/watch?v=Sdfir_1T-UQ)

## Motion Planning

This section covers fundamental approaches to motion planning, including
search-based methods, sampling-based methods, optimization approaches,
reactive methods, and their applications.

### Search

- **`Dijkstra`** [A Note on Two Problems in Connexion with
  Graphs](http://www-m3.ma.tum.de/foswiki/pub/MN0506/WebHome/dijkstra.pdf),
  Dijkstra E. W. (1959).
- **`A*`** [A Formal Basis for the Heuristic Determination of Minimum
  Cost Paths](http://ieeexplore.ieee.org/document/4082128/), Hart P. et
  al. (1968).
- [Planning Long Dynamically-Feasible Maneuvers For Autonomous
  Vehicles](https://www.cs.cmu.edu/~maxim/files/planlongdynfeasmotions_rss08.pdf),
  Likhachev M., Ferguson D. (2008).
- [Optimal Trajectory Generation for Dynamic Street Scenarios in a
  Frenet
  Frame](https://www.researchgate.net/profile/Moritz_Werling/publication/224156269_Optimal_Trajectory_Generation_for_Dynamic_Street_Scenarios_in_a_Frenet_Frame/links/54f749df0cf210398e9277af.pdf),
  Werling M., Kammel S. (2010).
  [🎞️](https://www.youtube.com/watch?v=Cj6tAQe7UCY)
- [Motion Planning under Uncertainty for On-Road Autonomous
  Driving](https://www.ri.cmu.edu/pub_files/2014/6/ICRA14_0863_Final.pdf),
  Xu W. et al. (2014).
- [Monte Carlo Tree Search for Simulated Car
  Racing](http://julian.togelius.com/Fischer2015Monte.pdf), Fischer J.
  et al. (2015). [🎞️](https://www.youtube.com/watch?v=GbUMssvolvU)

### Sampling

- **`RRT*`** [Sampling-based Algorithms for Optimal Motion
  Planning](https://arxiv.org/abs/1105.1186), Karaman S., Frazzoli E.
  (2011). [🎞️](https://www.youtube.com/watch?v=p3nZHnOWhrg)
- **`LQG-MP`** [LQG-MP: Optimized Path Planning for Robots with Motion
  Uncertainty and Imperfect State
  Information](https://people.eecs.berkeley.edu/~pabbeel/papers/vandenBergAbbeelGoldberg_RSS2010.pdf),
  van den Berg J. et al. (2010).
- [Motion Planning under Uncertainty using Differential Dynamic
  Programming in Belief
  Space](http://rll.berkeley.edu/~sachin/papers/Berg-ISRR2011.pdf), van
  den Berg J. et al. (2011).
- [Rapidly-exploring Random Belief Trees for Motion Planning Under
  Uncertainty](https://groups.csail.mit.edu/rrg/papers/abry_icra11.pdf),
  Bry A., Roy N. (2011).
- **`PRM-RL`** [PRM-RL: Long-range Robotic Navigation Tasks by Combining
  Reinforcement Learning and Sampling-based
  Planning](https://arxiv.org/abs/1710.03937), Faust A. et al. (2017).

### Optimization

- [Trajectory planning for Bertha - A local, continuous
  method](https://pdfs.semanticscholar.org/bdca/7fe83f8444bb4e75402a417053519758d36b.pdf),
  Ziegler J. et al. (2014).
- [Learning Attractor Landscapes for Learning Motor
  Primitives](https://papers.nips.cc/paper/2140-learning-attractor-landscapes-for-learning-motor-primitives.pdf),
  Ijspeert A. et al. (2002).
- [Online Motion Planning based on Nonlinear Model Predictive Control
  with Non-Euclidean Rotation Groups](https://arxiv.org/abs/2006.03534),
  Rösmann C. et al (2020).
  [:octocat:](https://github.com/rst-tu-dortmund/mpc_local_planner)

### Reactive

- **`PF`** [Real-time obstacle avoidance for manipulators and mobile
  robots](http://ieeexplore.ieee.org/document/1087247/), Khatib O.
  (1986).
- **`VFH`** [The Vector Field Histogram - Fast Obstacle Avoidance For
  Mobile
  Robots](http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=88137),
  Borenstein J. (1991).
- **`VFH+`** [VFH+: Reliable Obstacle Avoidance for Fast Mobile
  Robots](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.438.3464&rep=rep1&type=pdf),
  Ulrich I., Borenstein J. (1998).
- **`Velocity Obstacles`** [Motion planning in dynamic environments
  using velocity
  obstacles](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.56.6352&rep=rep1&type=pdf),
  Fiorini P., Shillert Z. (1998).

### Architecture and Applications

- [A Review of Motion Planning Techniques for Automated
  Vehicles](http://ieeexplore.ieee.org/document/7339478/), González D.
  et al. (2016).
- [A Survey of Motion Planning and Control Techniques for Self-driving
  Urban Vehicles](https://arxiv.org/abs/1604.07446), Paden B. et
  al. (2016).
- [Autonomous driving in urban environments: Boss and the Urban
  Challenge](https://www.ri.cmu.edu/publications/autonomous-driving-in-urban-environments-boss-and-the-urban-challenge/),
  Urmson C. et al. (2008).
- [The MIT-Cornell collision and why it
  happened](http://onlinelibrary.wiley.com/doi/10.1002/rob.20266/pdf),
  Fletcher L. et al. (2008).
- [Making bertha drive-an autonomous journey on a historic
  route](http://ieeexplore.ieee.org/document/6803933/), Ziegler J. et
  al. (2014).
