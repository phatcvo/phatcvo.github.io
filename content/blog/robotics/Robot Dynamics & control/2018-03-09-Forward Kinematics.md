---
title:  "Robot Dynamics & control: Lecture 3 - Forward Kinematics: The Denavit-Hartenberg Convention"
description: "robotics_and_control"
date: 2023-01-01
weight: 30
math: true
collection_type: Article
toc: true
---

## Table of Contents
{:.no_toc}
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Introduction
- The forward kinematics problem is to determine the __position and orientation__ of the end-effector, given the values for the joint variables of the robot.
- The joint variables: angle between the links for revolute or rotational joint link extension for the prismatic or sliding joint.

$$
\begin{aligned}
\begin{bmatrix} 
x \\ 
y \\
z \\
\psi \\
\theta \\
\phi \\
\end{bmatrix} 
=
f(\theta_1,  \cdots , \theta_n, d_1 ,  \cdots , d_n)
\end{aligned} 
$$

- $$f$$: forward kinematics

----------------

## Kinematic Chains

- A robot manupulator __n__ joints will have __n+1__ links including ground.
- Joint number: __1 ~ n__, Link number: __0 ~ n__
- Joint i connects link i-1 to link i.
- Joint i is fixed at link i-1, so when joint i is actuated, link i moves.
- Link 0(the first link) is fixed and does not move when the joints are actuated.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/1.png" class="lead"   style="width:480px; height=:360px"/>
</figure>

- With the i^{th} joint, we associate a joint variable, denoted by q_i.
  - $$\theta_i$$: joint $$i$$ revolute
  - $$d_i$$: joint $$i$$ prismatic
- __$$o_i x_i y_i z_i$$ is attached to link i__ $$\rightarrow$$ when joint i is actuated, link i and its attached frame $$o_i x_i y_i z_i$$ experience a resulting motion.
- The frame $$o_0 x_0 y_0 z_0$$ which is attached to the robot base, is referred to as the __inertial frame__(=world coordinate).

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/2.png" class="lead"   style="width:480px; height=:360px"/>
</figure>


- Suppose $$A_i$$ is the __homogeneous transformation matrix__ that expresses the position and orientation of $$o_i x_i y_i z_i$$ with respect to $$o_{i-1} x_{i-1} y_{i-1} z_{i-1}$$.
- The matrix $$A_i$$ is not constant but __varies__ as the configuration of the robot is changed, and $$A_i$$ is a function of only a single joint variable, namely $$q_i$$.

$$
\begin{aligned}
A_i = A_i (q_i)
\end{aligned} 
$$

- Homogeneous transformation matrix $$T^i_j$$ that expresses the __position and orientation__ of $$o_j x_j y_j z_j $$ with respect to $$o_i x_i y_i z_i$$ .

$$
\begin{aligned}
T^i_j = A_{i+1} A_{i+2} \cdot A_{j-1} A_{j} \qquad if \quad i < j \\
T^i_j = I \qquad  if \quad i = j \\
T^i_j = (T^j_i)^{-1} \qquad  if \quad i > j
\end{aligned} 
$$

- The homogeneous transformation matrix denoted by the position($$o^0_n$$) and orientation ($$R^0_n$$) of the __end-effector with respect to the inertial or base frame__:
  - This is __forward kinematics__!
  - But, it is possible to achieve a considerable amount of stream linking and simplication by introducing D-H representation.

$$
\begin{aligned} H &= 
\begin{bmatrix} 
R^0_n & o^0_n\\  
0 & 1 \\
\end{bmatrix} \\
&= T^0_n \\
&= A_1(q_i) \cdot A_n(q_n)
\end{aligned} 
$$

- Each homogeneous transformation matrix:

$$
\begin{aligned} A_i &= 
\begin{bmatrix} 
R^{i-1}_i & o^{i-1}_i\\  
0 & 1 \\
\end{bmatrix} 
\end{aligned} 
$$

- Hence, 


$$
\begin{aligned} T^i_j &= A_{i+1} \cdots A_j &= 
\begin{bmatrix} 
R^{i}_j & o^{i}_j\\  
0 & 1 \\
\end{bmatrix} ,
R^i_{j}  &= R^i_{i+1} \cdots R^{j-1}_j \\
o^i_{j}  &= o^i_{j-1} + R^i_{j-1} o^{j-1}_j
\end{aligned} 
$$

- It is possible to carry out all of the analysis using an arbitrary frame attached to each link.
- However, it is helpful to be systematic in the choice of these frames by using the __Denavit-Hartenberg, or D-H convention__.
- In D-H convention, each homogeneous tranformation matrix $$A_i$$ is represented as a product of __four basic transformations__.

----------------

## Denavit - Hartenberg Representation

$$
\begin{aligned} A 
&= Rot_{z, \theta_i} Trans_{z, d_i} Trans_{x, a_i} Rot_{x, \alpha_i}  \\
&=
\begin{bmatrix} 
c_{\theta_i} & -s_{\theta_i} & 0 & 0\\  
s_{\theta_i} & c_{\theta_i} & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} 
\begin{bmatrix} 
1 & 0 & 0 & 0\\  
0 & 1 & 0 & 0\\
0 & 0 & 1 & d_i\\
0 & 0 & 0 & 1\\
\end{bmatrix} 
\begin{bmatrix} 
1 & 0 & 0 & a_i\\  
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} 
\begin{bmatrix} 
1 & 0 & 0 & 0\\  
0 & c_{\alpha_i} & - s_{\alpha_i}& 0\\
0 & s_{\alpha_i} & c_{\alpha_i}& 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} 
\\
&=
\begin{bmatrix} 
c_{\theta_i} & -s_{\theta_i}c_{\alpha_i} & s_{\theta_i}s_{\alpha_i} & \alpha_i c_{\theta_i}\\  
s_{\theta_i} & c_{\theta_i}c_{\alpha_i} & -c_{\theta_i}s_{\alpha_i} & \alpha_i s_{\theta_i}\\
0 & s_{\alpha_i} & c_{\alpha_i}& d_i\\
0 & 0 & 0 & 1\\
\end{bmatrix} 
\end{aligned} 
$$

- Since the matrix A_i is a function of a single variable, the __3__ of the 4 quantities __are constant__ for a given link.
  - $$d_i$$: Joint variable for a prismatic joint.
  - $$\theta_i$$: Joint variable for a revolute joint.
- By a clever choice of the origin and coordinate axes, it is possible __to cut down the number of parameters__ and needed from 6 to 4.

- __Existence and uniqueness issues__:
  - Clearly, it is not possible to represent any arbitrary homogeneous transformation using only four parameters
  - But, is is possible to derive a unique homogeneous transformation matrix $$A$$ under the following two conditions.


> DH1) The axis $$x_1$$  is perpendicular to the axis $$z_0$$.
>
> DH2) The axis $$x_1$$ intersects the axis $$z_0$$

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/3.png" class="lead"   style="width:240px; height=:180px"/>
</figure>

- Under DH1 and DH2, we claim that there exist __unique numbers__ $$a, d, \theta , \alpha$$ such that.
  - $$A = Rot_{z,\theta} Trans_{z,d} Trans_{x,a} Rot_{x, \alpha}$$

- Physical interpretation of four quantities:
  - a: Distance between the axes $$z_0$$ and $$z_1$$ measured along the axis $$x_1$$
  - d: Distance between the origin $$o_0$$ and the intersection of the $$x_1$$ axis with $$z_0$$ measured along the $$z_0$$ axis.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/3.png" class="lead"  style="width:240px; height=:180px"/>
</figure>

- Physical interpretation of 4 quantities:
  - $$\alpha$$: Angle between the axes $$z_0$$ and $$z_1$$ measured in a plane normal to $$x_1$$.
  - $$\theta$$: Angle between $$x_0$$ and $$x_1$$ measured in a plane normal to $$z_0$$.
  
<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/4.png" class="lead"  style="width:240px; height=:180px"/>
</figure>

- Assigning the coordinate frames
  - For a given robot manipulator, one can always choose the frame 0, 1, ..., n in such a way that __the DH1 and DH2 are satisfied__.
  - It is important to keep in mind that the choices of the various coordinate frames are __not unique__, even when constrained by the DH1 and DH2.
  - However, it is important to note that the __end result($$T^0_n$$) will be the same__, regardless of the assignment if untermediate link frames .

- We assign $$z_i$$ to be the axis of actuation for joint i+1
  - If joint i+1 is revolute, $$z_i$$ is the axis of revolution of joint i+1.
  - If joint i+1 is prismatic, $$z_i$$ is the axis of translation of joint i+1.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/5.png" class="lead"  style="width:240px; height=:180px"/>
</figure>

- In order to set up frame i it is necessary to consider 3 cases:
- case 1:
  - $$z_{i-1}$$ and $$z_i$$ are not coplanar:

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/6.png" class="lead"  style="width:360px; height=:240px"/>
</figure> 

- case 2:
  - $$z_{i-1}$$ is parallel to $$z_i$$:
    - $$d_i, \alpha_i$$ are 0 in this case


<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/7.png" class="lead"  style="width:360px; height=:240px"/>
</figure>

- case 3:
  - $$z_{i-1}$$ intersects $$z_i$$:
    - $$a_i$$ are 0 in this case


<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/8.png" class="lead"  style="width:360px; height=:240px"/>
</figure>


-  This constructive procedure works frame 0, ..., n-1 in an n-link robot.
-  The __final coordinate system__ $$o_n x_n y_n z_n$$ is commonly referred to as __the end-effctor(or tool frame)__

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/9.png" class="lead"  style="width:360px; height=:240px"/>
</figure>

- Terminology arises from the fact that the direction __a__ is the approach direction, the __s__ direction is the sliding direction, and __n__ is the direction normal to the plane formed by __a__ and __s__.

- __Note the following important fact__:
  - The quantities $$a_i$$ and $$\alpha$$ are __always constant__ (characteristics of the manipulator)
  - If joint i is prismatic, then $$\theta_i$$ is also a constant, while $$d_i$$ is the $$i^{th}$$ joint variable.
  - If joint i is revolute, then $$d_i$$ is also a constant, while $$\theta_i$$ is the $$i^{th}$$ joint variable. 

- __Summary__:
  
$$1.$$ Locate and label the joint axes $$z_0, ..., z_{n-1}$$.

$$2.$$ Establish the base frame. Set the origin anywhere on the $$z_0$$-axis. The $$x_0$$ and $$y_0$$ axed are chosen conveniently to form a right-hand frame. For i = 1, ..., n-1, perform step 3 to 5.

$$3.$$ If $$z_i$$ intersects $$z_{i-1}$$, locate $$o_i$$ at this intersection. If $$z_i$$ and $$z_{i-1}$$ are parallel, locate $$o_i$$ in any convenient position along $$z_i$$.

$$4.$$ Establish $$x_i$$ along the common normal between $$z_{i-1}$$ and $$z_i$$ through $$o_i$$, or in the direction normal to the $$z_{i-1} - z_i$$ plane if $$z_{i-1}$$ and $$z_i$$ intersect.

$$5.$$ Establish $$y_i$$ to complete a right-hand frame

$$6.$$ Establish the end-effector frame $$o_n x_n y_n z_n$$. Assuming the n-th joint is revolute, set $$z_n$$ = __a__ along the direction $$z_{n-1}$$. Establish the origin on conveniently along $$z_n$$, preferably at the center of the gripper or at the tip of any tool. Set $$y_n$$ = __s__ in the direction of the gripper closure.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/11.png" class="lead"  style="width:480px; height=:240px"/>
</figure>

$$7.$$ Create a table of link parameters $$a_i, \alpha_i , d_i, \theta_i$$.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec3/12.png" class="lead"  style="width480px; height=:360px"/>
</figure>

$$8.$$ From the homogeneous transformation matrices $$A_i$$ by substituting the above parameters into 

$$
\begin{aligned} A 
&= Rot_{z, \theta_i} Trans_{z, d_i} Trans_{x, a_i} Rot_{x, \alpha_i}  \\
&=
\begin{bmatrix} 
c_{\theta_i} & -s_{\theta_i}c_{\alpha_i} & s_{\theta_i}s_{\alpha_i} & \alpha_i c_{\theta_i}\\  
s_{\theta_i} & c_{\theta_i}c_{\alpha_i} & -c_{\theta_i}s_{\alpha_i} & \alpha_i s_{\theta_i}\\
0 & s_{\alpha_i} & c_{\alpha_i}& d_i\\
0 & 0 & 0 & 1\\
\end{bmatrix} 
\end{aligned} 
$$

$$9.$$ Form $$T^0_n = A_1 \cdots A_n$$. This then gives the position and orientation of the tool frame expressed in base coordinates.


------------

> Reference:
- [SEOULTECH - HRRLAB](http://hrrlab.com)
- [SEOULTECH - Robot Dynamics & Control, Lecture slides](http://hrrlab.com/)