---
title: "Learning from Demonstrations"
weight: 60
math: true
---


# Learning from Demonstrations

This section covers approaches to learning control policies from expert
demonstrations, including imitation learning and inverse reinforcement
learning.

## Imitation Learning

- **`DAgger`** [A Reduction of Imitation Learning and Structured
  Predictionto No-Regret Online
  Learning](https://www.cs.cmu.edu/~sross1/publications/Ross-AIStats11-NoRegret.pdf),
  Ross S., Gordon G., Bagnell J. A. (2011).
- **`GAIL`** [Generative Adversarial Imitation
  Learning](https://arxiv.org/abs/1606.03476), Ho J., Ermon S. (2016).
- **`DQfD`** [Learning from Demonstrations for Real World Reinforcement
  Learning](https://pdfs.semanticscholar.org/a7fb/199f85943b3fb6b5f7e9f1680b2e2a445cce.pdf),
  Hester T. et al. (2017).
  [🎞️](https://www.youtube.com/watch?v=JR6wmLaYuu4&list=PLdjpGm3xcO-0aqVf--sBZHxCKg-RZfa5T)
- **`Branched`** [End-to-end Driving via Conditional Imitation
  Learning](https://arxiv.org/abs/1710.02410), Codevilla F. et
  al. (2017). [🎞️](https://www.youtube.com/watch?v=cFtnflNe5fM)
- **`DeepMimic`** [DeepMimic: Example-Guided Deep Reinforcement Learning
  of Physics-Based Character
  Skills](https://xbpeng.github.io/projects/DeepMimic/index.html),
  Peng X. B. et al. (2018).
  [🎞️](https://www.youtube.com/watch?v=vppFvq2quQ0&feature=youtu.be)

### Applications to Autonomous Driving

- [ALVINN, an autonomous land vehicle in a neural
  network](https://papers.nips.cc/paper/95-alvinn-an-autonomous-land-vehicle-in-a-neural-network),
  Pomerleau D. (1989).
- [End to End Learning for Self-Driving
  Cars](https://arxiv.org/abs/1604.07316), Bojarski M. et al. (2016).
  [🎞️](https://www.youtube.com/watch?v=qhUvQiKec2U)
- [Imitating Driver Behavior with Generative Adversarial
  Networks](https://arxiv.org/abs/1701.06699), Kuefler A. et al. (2017).
- **`PS-GAIL`** [Multi-Agent Imitation Learning for Driving
  Simulation](https://arxiv.org/abs/1803.01044), Bhattacharyya R. et
  al. (2018).
  [🎞️](https://github.com/sisl/ngsim_env/blob/master/media/single_multi_model_2_seed_1.gif)
  [:octocat:](https://github.com/sisl/ngsim_env)

## Inverse Reinforcement Learning

- **`Projection`** [Apprenticeship learning via inverse reinforcement
  learning](http://ai.stanford.edu/~ang/papers/icml04-apprentice.pdf),
  Abbeel P., Ng A. (2004).
- **`MEIRL`** [Maximum Entropy Inverse Reinforcement
  Learning](https://www.aaai.org/Papers/AAAI/2008/AAAI08-227.pdf),
  Ziebart B. et al. (2008).
- **`CIOC`** [Continuous Inverse Optimal Control with Locally Optimal
  Examples](http://graphics.stanford.edu/projects/cioc/), Levine S.,
  Koltun V. (2012).
  [🎞️](http://graphics.stanford.edu/projects/cioc/cioc.mp4)
- **`GCL`** [Guided Cost Learning: Deep Inverse Optimal Control via
  Policy Optimization](https://arxiv.org/abs/1603.00448), Finn C. et
  al. (2016). [🎞️](https://www.youtube.com/watch?v=hXxaepw0zAw)

### Applications to Autonomous Driving

- [Apprenticeship Learning for Motion Planning, with Application to
  Parking Lot Navigation](http://ieeexplore.ieee.org/document/4651222/),
  Abbeel P. et al. (2008).
- [Navigate like a cabbie: Probabilistic reasoning from observed
  context-aware
  behavior](http://www.cs.cmu.edu/~bziebart/publications/navigate-bziebart.pdf),
  Ziebart B. et al. (2008).
- [Learning Autonomous Driving Styles and Maneuvers from Expert
  Demonstration](https://www.ri.cmu.edu/pub_files/2012/6/iser12.pdf),
  Silver D. et al. (2012).
- [Watch This: Scalable Cost-Function Learning for Path Planning in
  Urban Environments](https://arxiv.org/abs/1607.02329), Wulfmeier M.
  (2016). [🎞️](https://www.youtube.com/watch?v=Sdfir_1T-UQ)