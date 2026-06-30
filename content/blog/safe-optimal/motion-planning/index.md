---
title: "Motion Planning"
weight: 70
math: true
---


# Motion Planning

This section covers fundamental approaches to motion planning, including
search-based methods, sampling-based methods, optimization approaches,
reactive methods, and their applications.

## Search

- **`Dijkstra`** [A Note on Two Problems in Connexion with
  Graphs](http://www-m3.ma.tum.de/foswiki/pub/MN0506/WebHome/dijkstra.pdf),
  Dijkstra E. W. (1959).
- **`A*`** [A Formal Basis for the Heuristic Determination of Minimum
  Cost Paths](http://ieeexplore.ieee.org/document/4082128/), Hart P. et
  al. (1968).
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
  Xu W. et al. (2014).
- [Monte Carlo Tree Search for Simulated Car
  Racing](http://julian.togelius.com/Fischer2015Monte.pdf), Fischer J.
  et al. (2015). [🎞️](https://www.youtube.com/watch?v=GbUMssvolvU)

## Sampling

- **`RRT*`** [Sampling-based Algorithms for Optimal Motion
  Planning](https://arxiv.org/abs/1105.1186), Karaman S., Frazzoli E.
  (2011). [🎞️](https://www.youtube.com/watch?v=p3nZHnOWhrg)
- **`LQG-MP`** [LQG-MP: Optimized Path Planning for Robots with Motion
  Uncertainty and Imperfect State
  Information](https://people.eecs.berkeley.edu/~pabbeel/papers/vandenBergAbbeelGoldberg_RSS2010.pdf),
  van den Berg J. et al. (2010).
- [Motion Planning under Uncertainty using Differential Dynamic
  Programming in Belief
  Space](http://rll.berkeley.edu/~sachin/papers/Berg-ISRR2011.pdf), van
  den Berg J. et al. (2011).
- [Rapidly-exploring Random Belief Trees for Motion Planning Under
  Uncertainty](https://groups.csail.mit.edu/rrg/papers/abry_icra11.pdf),
  Bry A., Roy N. (2011).
- **`PRM-RL`** [PRM-RL: Long-range Robotic Navigation Tasks by Combining
  Reinforcement Learning and Sampling-based
  Planning](https://arxiv.org/abs/1710.03937), Faust A. et al. (2017).

## Optimization

- [Trajectory planning for Bertha - A local, continuous
  method](https://pdfs.semanticscholar.org/bdca/7fe83f8444bb4e75402a417053519758d36b.pdf),
  Ziegler J. et al. (2014).
- [Learning Attractor Landscapes for Learning Motor
  Primitives](https://papers.nips.cc/paper/2140-learning-attractor-landscapes-for-learning-motor-primitives.pdf),
  Ijspeert A. et al. (2002).
- [Online Motion Planning based on Nonlinear Model Predictive Control
  with Non-Euclidean Rotation Groups](https://arxiv.org/abs/2006.03534),
  Rösmann C. et al (2020).
  [:octocat:](https://github.com/rst-tu-dortmund/mpc_local_planner)

## Reactive

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

## Architecture and Applications

- [A Review of Motion Planning Techniques for Automated
  Vehicles](http://ieeexplore.ieee.org/document/7339478/), González D.
  et al. (2016).
- [A Survey of Motion Planning and Control Techniques for Self-driving
  Urban Vehicles](https://arxiv.org/abs/1604.07446), Paden B. et
  al. (2016).
- [Autonomous driving in urban environments: Boss and the Urban
  Challenge](https://www.ri.cmu.edu/publications/autonomous-driving-in-urban-environments-boss-and-the-urban-challenge/),
  Urmson C. et al. (2008).
- [The MIT-Cornell collision and why it
  happened](http://onlinelibrary.wiley.com/doi/10.1002/rob.20266/pdf),
  Fletcher L. et al. (2008).
- [Making bertha drive-an autonomous journey on a historic
  route](http://ieeexplore.ieee.org/document/6803933/), Ziegler J. et
  al. (2014).