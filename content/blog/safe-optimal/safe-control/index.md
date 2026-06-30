---
title: "Safe Control"
weight: 20
math: true
---


# Safe Control

This section covers approaches to ensuring safety in control systems,
including robust control, risk-averse control, value-constrained
control, state-constrained control and stability, and uncertain
dynamical systems.

## Robust Control

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
  Williams G. et al. (2018).
  [🎞️](https://www.youtube.com/watch?v=32v-e3dptjo)
- [Safe Learning in Robotics: From Learning-Based Control to Safe
  Reinforcement Learning](https://arxiv.org/abs/2108.06266), Lukas
  Bronke et al. (2021).
  [:octocat:](https://github.com/utiasDSL/safe-control-gym)

## Risk-Averse Control

- [A Comprehensive Survey on Safe Reinforcement
  Learning](http://jmlr.org/papers/v16/garcia15a.html), García J.,
  Fernández F. (2015).
- **`RA-QMDP`** [Risk-averse Behavior Planning for Autonomous Driving
  under Uncertainty](https://arxiv.org/abs/1812.01254), Naghshvar M. et
  al. (2018).
- **`StoROO`** [X-Armed Bandits: Optimizing Quantiles and Other
  Risks](https://arxiv.org/abs/1904.08205), Torossian L., Garivier A.,
  Picheny V. (2019).
- [Worst Cases Policy Gradients](https://arxiv.org/abs/1911.03618),
  Tang Y. C. et al. (2019).
- [Model-Free Risk-Sensitive Reinforcement
  Learning](https://arxiv.org/abs/2111.02907), Delétang G. et
  al. (2021).
- [Optimal Thompson Sampling strategies for support-aware CVaR
  bandits](https://proceedings.mlr.press/v139/baudry21a.html), Baudry
  D., Gautron R., Kaufmann E., Maillard O. (2021).

## Value-Constrained Control

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
  al. (2017).
- **`CPO`** [Constrained Policy
  Optimization](https://arxiv.org/abs/1705.10528), Achiam J., Held D.,
  Tamar A., Abbeel P. (2017).
  [:octocat:](https://github.com/jachiam/cpo)
- **`RCPO`** [Reward Constrained Policy
  Optimization](https://arxiv.org/abs/1805.11074), Tessler C., Mankowitz
  D., Mannor S. (2018).
- **`BFTQ`** [A Fitted-Q Algorithm for Budgeted
  MDPs](https://hal.archives-ouvertes.fr/hal-01867353), Carrara N. et
  al. (2018).
- **`SafeMPC`** [Learning-based Model Predictive Control for Safe
  Exploration](https://arxiv.org/abs/1803.08287), Koller T, Berkenkamp
  F., Turchetta M. Krause A. (2018).
- **`CCE`** [Constrained Cross-Entropy Method for Safe Reinforcement
  Learning](https://papers.nips.cc/paper/7974-constrained-cross-entropy-method-for-safe-reinforcement-learning),
  Wen M., Topcu U. (2018).
  [:octocat:](https://github.com/liuzuxin/safe-mbrl)
- **`LTL-RL`** [Reinforcement Learning with Probabilistic Guarantees for
  Autonomous Driving](https://arxiv.org/abs/1904.07189), Bouton M. et
  al. (2019).
- [Safe Reinforcement Learning with Scene Decomposition for Navigating
  Complex Urban Environments](https://arxiv.org/abs/1904.11483v1),
  Bouton M. et al. (2019).
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
  Effort](https://arxiv.org/abs/2002.08550), Ha S. et al. (2020)
  [🎞️](https://youtu.be/cwyiq6dCgOc)
- [Responsive Safety in Reinforcement Learning by PID Lagrangian
  Methods](https://arxiv.org/abs/2007.03964), Stooke A., Achiam J.,
  Abbeel P. (2020).
  [:octocat:](https://github.com/astooke/rlpyt/tree/master/rlpyt/projects/safe)
- **`Envelope MOQ-Learning`** [A Generalized Algorithm for
  Multi-Objective Reinforcement Learning and Policy
  Adaptation](https://arxiv.org/abs/1908.08342), Yang R. et al (2019).

## State-Constrained Control and Stability

- **`HJI-reachability`** [Safe learning for control: Combining
  disturbance estimation, reachability analysis and reinforcement
  learning with systematic
  exploration](http://kth.diva-portal.org/smash/get/diva2:1140173/FULLTEXT01.pdf),
  Heidenreich C. (2017).
- **`MPC-HJI`** [On Infusing Reachability-Based Safety Assurance within
  Probabilistic Planning Frameworks for Human-Robot Vehicle
  Interactions](https://stanfordasl.github.io/wp-content/papercite-data/pdf/Leung.Schmerling.Chen.ea.ISER18.pdf),
  Leung K. et al. (2018).
- [A General Safety Framework for Learning-Based Control in Uncertain
  Robotic Systems](https://arxiv.org/abs/1705.01292), Fisac J. et al
  (2017).
  [🎞️](https://www.youtube.com/watch?v=WAAxyeSk2bw&feature=youtu.be)
- [Safe Model-based Reinforcement Learning with Stability
  Guarantees](https://arxiv.org/abs/1705.08551), Berkenkamp F. et
  al. (2017).
- **`Lyapunov-Net`** [Safe Interactive Model-Based
  Learning](https://arxiv.org/abs/1911.06556), Gallieri M. et
  al. (2019).
- [Enforcing robust control guarantees within neural network
  policies](https://arxiv.org/abs/2011.08105), Donti P. et al. (2021).
  [:octocat:](https://github.com/locuslab/robust-nn-control)
- **`ATACOM`** [Robot Reinforcement Learning on the Constraint
  Manifold](https://openreview.net/forum?id=zwo1-MdMl1P), Liu P. et al
  (2021).

## Uncertain Dynamical Systems

- [Simulation of Controlled Uncertain Nonlinear
  Systems](https://www.sciencedirect.com/science/article/pii/009630039400112H),
  Tibken B., Hofer E. (1995).
- [Trajectory computation of dynamic uncertain
  systems](https://ieeexplore.ieee.org/iel5/8969/28479/01272787.pdf),
  Adrot O., Flaus J-M. (2002).
- [Simulation of Uncertain Dynamic Systems Described By Interval Models:
  a
  Survey](https://www.sciencedirect.com/science/article/pii/S1474667016362206),
  Puig V. et al. (2005).
- [Design of interval observers for uncertain dynamical
  systems](https://hal.inria.fr/hal-01276439/file/Interval_Survey.pdf),
  Efimov D., Raïssi T. (2016).