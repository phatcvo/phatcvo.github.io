Motion Planning
===============

[![Open Corresponding Notebook In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/RussTedrake/manipulation/blob/master/trajectories.ipynb)

There are a few more essential skills that we need in our toolbox. In this chapter, we will explore some of the powerful methods of kinematic trajectory motion planning.

I'm actually almost proud of making it this far into the notes without covering this topic yet. Writing a relatively simple script for the pose of the gripper, like we did in the bin picking chapter, really can solve a lot of interesting problems. But there are a number of reasons that we might want a more automated solution:

1.  When the environment becomes more cluttered, it is harder to write such a simple solution, and we might have to worry about collisions between the arm and the environment as well as the gripper and the environment.
2.  If we are doing "mobile manipulation" -- our robotic arms are attached to a mobile base -- then the robot might have to operate in many different environments. Even if the workspace is not geometrically complicated, it might still be different enough each time we reach that it requires automated (but possibly still simple) planning.
3.  If the robot is operating in a simple known environment all day long, then it probably makes sense to optimize the trajectories that it is executing; we can often speed up the manipulation process significantly.

We'll focus on the problem of moving an arm through space in this chapter, because that is the classical and very important motivation. But I need to cover this now for another reason, too: it will also soon help us think about programming a more dexterous hand.

Add atlas "big robot little car"

I do need to make one important caveat. Despite having done some work in this field myself, I actually really dislike the problem formulation of collision-free motion planning. I think that on the whole, robots are too afraid of bumping into the world (because things still go wrong when they do). I don't think humans are solving these complex geometric problems every time we reach... even when we are reaching in dense clutter (I actually suspect that we are very bad at it). I would much rather see robots that perform well even with very coarse / approximate plans for moving through a cluttered environment, that are not afraid to make incidental contacts, and that can still accomplish the task when they do!

Inverse Kinematics
==================

The goal of this chapter is to solve for motion trajectories. But I would argue that if you really understand how to solve inverse kinematics, then you've got most of what you need to plan trajectories.

We know that that the [forward kinematics](pick.html#kinematics) give us a (nonlinear) mapping from joint angles to e.g. the pose of the gripper: $X^G = f\_{kin}(q)$. So, naturally, the problem of inverse kinematics (IK) is about solving for the inverse map, $q = f^{-1}\_{kin}(X^G).$ Indeed, that is perhaps the most common and classical question studied in inverse kinematics. But I want you to think of inverse kinematics as a much richer topic than that.

For example, when we were [evaluating grasp candidates for bin picking](clutter.html#grasp_candidates), we had only a soft preference on the orientation of the hand relative to some antipodal grasp. In that case, a full 6 DOF pose would have been an overly constrained specification. And often we have many constraints on the kinematics: some in joint space (like joint limits) and others in Cartesian space (like non-penetration constraints). So really, inverse kinematics is about solving for joint angles in a very rich landscape of objectives and constraints.

[Click here to watch the video.](https://www.youtube.com/embed/m1rv4d_zUCY)

We made extensive use of rich inverse kinematics specifications in our work on humanoid robots. The video above is an example of the interactive inverse kinematics interface (here to help us figure out how to fit the our big humanoid robot into the little Polaris). [Here is another video](https://www.youtube.com/watch?v=E_CVq0lWfSc) of the same tool being used for the Valkyrie humanoid, where we do specify and end-effector pose, but we also add a joint-centering objective and static stability constraints Fallon14+Marion16.

Closed-form solutions
=====================

With its obvious importance in robotics, you probably won't be surprised to hear that there is an extensive literature on inverse kinematics. But you may be surprised at how extensive and complete the solutions can get. The forward kinematics, $f\_{kin}$, is a nonlinear function in general, but it is a very structured one. In fact, with rare exceptions (like if your robot has a [helical joint](https://www.hindawi.com/journals/mpe/2016/1761968/fig4/), aka screw joint), the equations governing the valid Cartesian positions of our robots are actually _polynomial_. "But wait! What about all of those sines and cosines in my kinematic equations?" you say. The trigonometric terms come when we want to relate joint angles with Cartesian coordinates. In $\\Re^3$, for two points, $A$ and $B$, on the same rigid body, the (squared) distance between them, $\\|p^A - p^B\\|^2,$ is a constant. And a joint is just a polynomial constraint between positions on adjoining bodies, e.g. that they occupy the same point in Cartesian space. See Wampler11 for an excellent overview.

example: trig and polynomial kinematics of a two-link arm.

Understanding the solutions to polynomial equations is the subject of algebraic geometry. There is a deep literature on the theory, on symbolic algorithms, and on numerical algorithms. For even very complex kinematic topologies, such as [four-bar linkages](https://en.wikipedia.org/wiki/Four-bar_linkage) and [Stewart-Gough platforms](https://en.wikipedia.org/wiki/Stewart_platform), we can count the number of solutions, and/or understand the continuous manifold of solutions. For instance, Wampler11 describes a substantial toolbox for numerical algebraic geometry (based on homotopy methods) with impressive results on difficult kinematics problems.

While the algebraic-geometry methods are mostly targeted for offline global analysis, they are not designed for fast real-time inverse kinematics solutions needed in a control loop. The most popular tool these days for real-time inverse kinematics for six- or seven-DOF manipulators is a tool called "IKFast", described in Section 4.1 of Diankov10, that gained popularity because of its effective open-source implementation. Rather than focus on completeness, IKFast uses a number of approximations to provide fast and numerically robust solutions to the "easy" kinematics problems. It leverages the fact that a six-DOF pose constraint on a six-DOF manipulator has a closed-form solutions with a finite number of joint space configurations that produce the same end-effector pose, and for seven-DOF manipulators it adds a layer of sampling in the last degree of freedom on top of the six-DOF solver.

add an example of calling (or implementing something equivalent to) ikfast and/or bertini. looks like bertini 2 has python bindings (but not pip) and is GPL3.

These closed-form solutions are important to understand because they provide deep insight into the equations, and because they can be fast enough to use inside a more sophisticated solution approach. But the closed-form solutions don't provide the rich specification I advocated for above; in particular, they break down once we have inequality constraints instead of equality constraints. For those richer specifications, we will turn to optimization.

IK as constrained optimization
==============================

![](data/shelf_ik.png)

A richer inverse kinematics problem: solve for the joint angles, $q$, that allow the robot to reach into the shelf and grab the object, while avoiding collisions.

We have [already discussed](pick.html#diff_ik_w_constraints) the idea of solving _differential_ inverse kinematics as an optimization problem. This was a very nice use case, where the

Interactive IK
==============

Colab.

Write minimal constraints.

Grasp the cylinder.
===================

Collision avoidance constraints.

Visualizing the configuration stace
===================================

Visualizing the IK optimization problem
=======================================

[Zoomed in](data/shelf_ik_prog_zoom.html). [The global optimization problem.](data/shelf_ik_prog.html)

Global IK.

Grasp planning as IK
====================

Kinematic trajectory optimization
=================================

Sample-based motion planning
============================

Exercises
=========

Door Opening
============

For this exercise, you will implement a optimization-based inverse kinematics solver to open a cupboard door. You will work exclusively in [this notebook](https://colab.research.google.com/github/RussTedrake/manipulation/blob/master/exercises/trajectories/door_opening.ipynb). You will be asked to complete the following steps:

1.  Write down the constraints on the IK problem of grabbing a cupboard handle.
2.  Formalize the IK problem as an instance of optimization.
3.  Implement the optimization problem using MathematicalProgram.

RRT Motion Planning
===================

For this exercise, you will implement and analyze the RRT algorithm introduced in class. You will work exclusively in [this notebook](https://colab.research.google.com/github/RussTedrake/manipulation/blob/master/exercises/trajectories/rrt_planning.ipynb). You will be asked to complete the following steps:

1.  Implement the RRT algorithm for the Kuka arm.
2.  Answer questions regarding its properties.

References
==========

1.  Maurice Fallon and Scott Kuindersma and Sisir Karumanchi and Matthew Antone and Toby Schneider and Hongkai Dai and Claudia P\\'{e}rez D'Arpino and Robin Deits and Matt DiCicco and Dehann Fourie and Twan Koolen and Pat Marion and Michael Posa and Andr\\'{e}s Valenzuela and Kuan-Ting Yu and Julie Shah and Karl Iagnemma and Russ Tedrake and Seth Teller, "An Architecture for Online Affordance-based Perception and Whole-body Planning", Journal of Field Robotics, vol. 32, no. 2, pp. 229-254, September, 2014. \[ [link](http://groups.csail.mit.edu/robotics-center/public_papers/Fallon14.pdf) \]
  
3.  Pat Marion and Maurice Fallon and Robin Deits and Andr\\'{e}s Valenzuela and Claudia P\\'{e}rez D'Arpino and Greg Izatt and Lucas Manuelli and Matt Antone and Hongkai Dai and Twan Koolen and John Carter and Scott Kuindersma and Russ Tedrake, "Director: A User Interface Designed for Robot Operation With Shared Autonomy", Journal of Field Robotics, vol. 1556-4967, 2016. \[ [link](http://groups.csail.mit.edu/robotics-center/public_papers/Marion16.pdf) \]
  
5.  Charles W. Wampler and Andrew J. Sommese, "Numerical algebraic geometry and algebraic kinematics", Acta Numerica, vol. 20, pp. 469-567, 2011.
  
7.  Rosen Diankov, "Automated Construction of Robotic Manipulation Programs", PhD thesis, Carnegie Mellon University, August, 2010.