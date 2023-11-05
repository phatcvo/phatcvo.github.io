---
title: "[MPC] Model Predictive Control with discrete-time Control Barrier Functions"
date: 2023-10-30
tags: ["MPC", "CBF"]
categories: ["Motion Planning"]
description: "Model Predictive Control with discrete-time Control Barrier Functions (MPC-CBF) for a wheeled mobile robot."
draft: false
math: true
---

The MPC-CBF optimization problem is given by:


$$\\begin{aligned}
\\min\_{u_{t: t+N-1 \\mid t}} \\quad & \\frac{1}{2} \\tilde{x}\_N^T Q_x \\tilde{x}\_N+\\sum\_{k=0}^{N-1} \\frac{1}{2} \\tilde{x}\_k^T Q_x \\tilde{x}\_k+\\frac{1}{2} u\_k^T Q\_u u\_k\\\\
\\textrm{s.t.} \\quad 
 & x\_{t+k+1 \\mid t}=x\_{t+k \\mid t}+f\\left(x\_{t+k \\mid t}, u\_{t+k \\mid t}\\right) \\cdot T\_s, \\quad k=0, . ., N-1,\\\\
 & x\_{\\min } \\leq x\_{t+k \\mid t} \\leq x\_{\\max }, \\quad k=0, \\ldots, N-1,\\\\
 & u\_{\\min } \\leq u\_{t+k \\mid t} \\leq u\_{\\max }, \\quad k=0, \\ldots, N-1,   \\\\
 & x\_{t \\mid t}=x\_t,   \\\\
 & \\Delta h\\left(x\_{t+k \\mid t}, u\_{t+k \\mid t}\\right) \\geq-\\gamma h\\left(x\_{t+k \\mid t}\\right), \\quad k=0, \\ldots, N-1 \\\\
\\end{aligned}$$


where $\\tilde{x}\_k=x\_{des,k} - x\_{k}$


Results
-------

### Scenario 1
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_comparisons.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/Display/path_scenario1.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/trajectories_animation_scenario1.gif)


### Scenario 3
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario3.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/cbf_scenario3.png)

### Scenario 4
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario4.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/cbf_scenario4.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/trajectories_scenario4.png)

### Scenario 5
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario5.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/MPC-CBF/scen5_N20_safd03_gamma02/trajectories_animation.gif)

### Scenario 6
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/path_animation_scenario6.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/cbf_scenario6.png)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/MPC-CBF/scen6_N20_safed03_gamma06/trajectories_animation.gif)

### Gazebo simulation with turtlebot3
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/s1.gif)
![](https://raw.githubusercontent.com/phatcvo/MPC-CBF/main/images/Display/s2.gif)




Installation
------------

To use this project, install it locally via:
```
git clone https://github.com/phatcvo/MPC-CBF.git
```

The dependencies can be installed by running:
```
pip install -r requirements.txt
```

The controller configuration can be changed through the [config.py](https://github.com/phatcvo/MPC-CBF/blob/main/config.py).

To execute the code, run:
```
python3 main.py
```


References
----------
* [[1] J. Zeng, B. Zhang, and K. Sreenath, “Safety-Critical Model Predictive Control with Discrete-Time Control
Barrier Function,” in 2021 American Control Conference (ACC), May 2021, pp. 3882–3889.](https://ieeexplore.ieee.org/document/9483029)