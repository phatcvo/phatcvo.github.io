---
title: "Reinforcement Learning"
weight: 50
math: true
---


# Reinforcement Learning

This section covers the comprehensive landscape of reinforcement
learning, from theoretical foundations to practical applications in
control and decision-making.

- [Reinforcement learning: A
  survey](https://www.jair.org/media/301/live-301-1562-jair.pdf),
  Kaelbling L. et al. (1996).

## Theory

### Generative Model

- **`QVI`** [On the Sample Complexity of Reinforcement Learning with a
  Generative Model](https://arxiv.org/abs/1206.6461), Azar M., Munos R.,
  Kappen B. (2012).
- [Model-Based Reinforcement Learning with a Generative Model is Minimax
  Optimal](https://arxiv.org/abs/1906.03804), Agarwal A. et al. (2019).

### Policy Gradient

- [Policy Gradient Methods for Reinforcement Learning with Function
  Approximation](https://papers.nips.cc/paper/1713-policy-gradient-methods-for-reinforcement-learning-with-function-approximation),
  Sutton R. et al (2000).
- [Approximately Optimal Approximate Reinforcement
  Learning](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/KakadeLangford-icml2002.pdf),
  Kakade S., Langford J. (2002).
- [On the Theory of Policy Gradient Methods: Optimality, Approximation,
  and Distribution Shift](https://arxiv.org/abs/1908.00261), Agarwal A.
  et al. (2019)
- [PC-PG: Policy Cover Directed Exploration for Provable Policy Gradient
  Learning](https://arxiv.org/abs/2007.08459), Agarwal A. et al. (2020)
- [Is the Policy Gradient a
  Gradient?](https://arxiv.org/abs/1906.07073), Nota C., Thomas P. S.
  (2020).

### Linear Systems

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

## Value-based Methods

- **`DQN`** [Playing Atari with Deep Reinforcement
  Learning](https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf), Mnih V. et
  al. (2013). [🎞️](https://www.youtube.com/watch?v=iqXKQf2BOSE)
- **`DDQN`** [Deep Reinforcement Learning with Double
  Q-learning](https://arxiv.org/abs/1509.06461), van Hasselt H.,
  Silver D. et al. (2015).
- **`Rainbow`** [Rainbow: Combining Improvements in Deep Reinforcement
  Learning](https://arxiv.org/abs/1710.02298), Hessel M. et al. (2017).

## Policy-based Methods

### Policy Gradient

- **`REINFORCE`** [Simple Statistical Gradient-Following Algorithms for
  Connectionist Reinforcement
  Learning](http://www-anw.cs.umass.edu/~barto/courses/cs687/williams92simple.pdf),
  Williams R. (1992).
- **`TRPO`** [Trust Region Policy
  Optimization](https://arxiv.org/abs/1502.05477), Schulman J. et
  al. (2015). [🎞️](https://www.youtube.com/watch?v=KJ15iGGJFvQ)
- **`PPO`** [Proximal Policy Optimization
  Algorithms](https://arxiv.org/abs/1707.06347), Schulman J. et
  al. (2017). [🎞️](https://www.youtube.com/watch?v=bqdjsmSoSgI)

### Actor-Critic

- **`DDPG`** [Continuous Control With Deep Reinforcement
  Learning](https://arxiv.org/abs/1509.02971), Lillicrap T. et
  al. (2015).
- **`A3C`** [Asynchronous Methods for Deep Reinforcement
  Learning](https://arxiv.org/abs/1602.01783), Mnih V. et al 2016.
- **`SAC`** [Soft Actor-Critic : Off-Policy Maximum Entropy Deep
  Reinforcement Learning with a Stochastic
  Actor](https://arxiv.org/abs/1801.01290), Haarnoja T. et al. (2018).
  [🎞️](https://vimeo.com/252185258)

## Model-based Methods

- **`PILCO`** [PILCO: A Model-Based and Data-Efficient Approach to
  Policy Search](http://mlg.eng.cam.ac.uk/pub/pdf/DeiRas11.pdf),
  Deisenroth M., Rasmussen C. (2011).
- **`MPPI`** [Information Theoretic MPC for Model-Based Reinforcement
  Learning](https://ieeexplore.ieee.org/document/7989202/), Williams G.
  et al. (2017).
  [:octocat:](https://github.com/ferreirafabio/mppi_pendulum)
  [🎞️](https://www.youtube.com/watch?v=f2at-cqaJMM)
- **`MuZero`** [Mastering Atari, Go, Chess and Shogi by Planning with a
  Learned Model](https://arxiv.org/abs/1911.08265), Schrittwiese J. et
  al. (2019).
  [:octocat:](https://github.com/werner-duvaud/muzero-general)

## Exploration

- **`HER`** [Hindsight Experience
  Replay](https://arxiv.org/abs/1707.01495), Andrychowicz M. et
  al. (2017). [🎞️](https://www.youtube.com/watch?v=Dz_HuzgMxzo)
- **`RND`** [Exploration by Random Network
  Distillation](https://arxiv.org/abs/1810.12894), Burda Y. et
  al. (OpenAI) (2018).
  [🎞️](https://openai.com/blog/reinforcement-learning-with-prediction-based-rewards/)
- **`Go-Explore`** [Go-Explore: a New Approach for Hard-Exploration
  Problems](https://arxiv.org/abs/1901.10995), Ecoffet A. et al. (Uber)
  (2018). [🎞️](https://www.youtube.com/watch?v=gnGyUPd_4Eo)

## Multi-agent RL

- **`MADDPG`** [Multi-Agent Actor-Critic for Mixed
  Cooperative-Competitive
  Environments](https://arxiv.org/abs/1706.02275), Lowe R. et al (2017).
  [:octocat:](https://github.com/openai/maddpg)
- **`FTW`** [Human-level performance in first-person multiplayer games
  with population-based deep reinforcement
  learning](https://arxiv.org/abs/1807.01281), Jaderberg M. et
  al. (2018). [🎞️](https://www.youtube.com/watch?v=dltN4MxV1RI)
- **`MAPPO`** [The Surprising Effectiveness of MAPPO in Cooperative,
  Multi-Agent Games](https://arxiv.org/abs/2103.01955), Yu C. et
  al. (2021). [:octocat:](https://github.com/marlbenchmark/on-policy)

## Safe Reinforcement Learning

- [A Comprehensive Survey on Safe Reinforcement
  Learning](http://jmlr.org/papers/v16/garcia15a.html), García J.,
  Fernández F. (2015).
- **`CPO`** [Constrained Policy
  Optimization](https://arxiv.org/abs/1705.10528), Achiam J., Held D.,
  Tamar A., Abbeel P. (2017).
  [:octocat:](https://github.com/jachiam/cpo)
- [Safe Learning in Robotics: From Learning-Based Control to Safe
  Reinforcement Learning](https://arxiv.org/abs/2108.06266), Lukas
  Bronke et al. (2021).
  [:octocat:](https://github.com/utiasDSL/safe-control-gym)

## Transfer Learning and Meta-Learning

- **`MAML`** [Model-Agnostic Meta-Learning for Fast Adaptation of Deep
  Networks](https://arxiv.org/abs/1703.03400), Finn C., Abbeel P.,
  Levine S. (2017). [🎞️](https://sites.google.com/view/maml)
- [Sim-to-Real: Learning Agile Locomotion For Quadruped
  Robots](https://arxiv.org/abs/1804.10332), Tan J. et al. (2018).
  [🎞️](https://www.youtube.com/watch?v=lUZUr7jxoqM)
- [Learning Dexterous In-Hand
  Manipulation](https://blog.openai.com/learning-dexterity/), OpenAI
  (2018). [🎞️](https://www.youtube.com/watch?v=DKe8FumoD4E)

## Hierarchical RL

- **`OC`** [The Option-Critic
  Architecture](https://arxiv.org/abs/1609.05140), Bacon P-L., Harb J.,
  Precup D. (2016).
- **`FuNs`** [FeUdal Networks for Hierarchical Reinforcement
  Learning](https://arxiv.org/abs/1703.01161), Vezhnevets A. et
  al. (2017).
- **`DeepLoco`** [DeepLoco: Dynamic Locomotion Skills Using Hierarchical
  Deep Reinforcement
  Learning](https://www.cs.ubc.ca/~van/papers/2017-TOG-deepLoco/),
  Peng X. et al. (2017).
  [🎞️](https://www.youtube.com/watch?v=hd1yvLWm6oA)

## Offline RL

- **`CQL`** [Conservative Q-Learning for Offline Reinforcement
  Learning](https://arxiv.org/abs/2006.04779), Kumar A. et al. (2020).
- [Decision Transformer: Reinforcement Learning via Sequence
  Modeling](https://sites.google.com/berkeley.edu/decision-transformer),
  Chen L., Lu K. et al. (2021).
  [:octocat:](https://github.com/kzl/decision-transformer)

> **Note**
>
> This section provides a comprehensive overview of reinforcement
> learning approaches relevant to safe and optimal control. For the
> complete list of papers and more detailed subsections, please refer to
> the original survey document.