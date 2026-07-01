---
layout: post
title:  "robotics_and_control"
categories: robotics_and_control
tags: robotics
comments: true
---

# Robot Dynamics & control: Lecture 2 - Rigid Motions and Homogeneous Transforms

## Table of Contents
{:.no_toc}
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Introduction
- Robot kinematocs is concerned with the establishment of various coordinate systems to represent the __positions and orientations__ of rigid objects and with __transformations__ among these coordinate frames.
- __Homogeneous transformations__ combine the operations of rotation and translation into _single matrix multiplication_ and this is used to derive _the forward kinematic equation_.
  - i.e., Expression of the transformation about relationship of position and orientation.


------

## Representing Positions
- In robotics, it is necessary to specify a coordinate frame in order to assign coordinates of a __point__.
- While a point correspond to a specific location in space, a __vector__ specifies a direction and a magnitude.

$$
\begin{aligned}
v ^0 _1 = 
\begin{bmatrix} 5  \\ 6 \end{bmatrix}

\end{aligned} 
$$

------

## Representing Rotations

- Rotation in the plane
  - __Orientation matrix__ that specifies the coordinate vectors for the axes of frame $$o_1 x_1 y_1$$ wutg respect to coordinate frame $$o_0 x_0 y_0$$.
$$
\begin{aligned}
R ^0 _1 
&= 
\begin{bmatrix} x^0_1  & y^0 _1 \end{bmatrix}
&=
\begin{bmatrix} 
cos \theta  & - sin \theta \\
sin \theta & cos \theta
\end{bmatrix}
\end{aligned} 
$$
  - Alternative approach using the __dot product__ of two unit vectors
    - Physical meaning: projected vector of $$x_1$$ onto $$x_0$$.
$$
\begin{aligned}
R ^0 _1 
&= 
\begin{bmatrix} x^0_1  & y^0 _1 \end{bmatrix}
&=
\begin{bmatrix} 
x_1 \cdot  x_0  & y_1 \cdot  x_0  \\
x_0 \cdot  y_0  & y_1 \cdot  y_0  
\end{bmatrix}
&=
{(R^1 _0)}^{-1}
\end{aligned} 
$$

> Note: the column vectors are of __unit length__ and __mutually orthogonal__.

- Rotations in 3 dimensions
  - The projection technique scales nicely to the 3 dimensional case
$$
\begin{aligned}
R ^0 _1 
&= 
\begin{bmatrix} x^0_1  & y^0 _1 & z^0_1\end{bmatrix}
&=
\begin{bmatrix} 
x_1 \cdot  x_0  & y_1 \cdot  x_0  & z_1 \cdot x_0  \\
x_1 \cdot  y_0  & y_1 \cdot  y_0  & z_1 \cdot y_0  \\
x_1 \cdot  z_0  & y_1 \cdot  z_0  & z_1 \cdot z_0  \\
\end{bmatrix}
\in SO(3)
\end{aligned} 
$$

- Ex. 2.1
  - Suppose the frame $$o_1 x_1 y_1 z_1$$  is rotated through an angle about the $$z_0$$ axis, and it is desired to find the resulting transformation matrix $$R^0_1$$.
  - Note that by convention the positive sense for the angle is given by the right hand rule;
    - That is, a positive rotation of degrees about the z-axis would advance a right-hand threaded screw along the positive z-axis.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec2/1.png" class="lead"   style="width:320px; height=:240px"/>
</figure>

$$
\begin{aligned}
& x_1 \cdot x_0  = cos \theta & y_1 \cdot x_0 = - sin \theta \\
& x_1 \cdot x_0  = cos \theta & y _1 \cdot x_0 = - sin \theta\\
& z_0 \cdot z_1 = 1
\end{aligned} 
$$

- Thus, 

$$
\begin{aligned} R^0_1
&=
\begin{bmatrix} 
cos \theta  & - sin \theta  & 0  \\
sin \theta & cos \theta &  0  \\
0  & 0  & 1  \\
\end{bmatrix}
\in SO(3)
\end{aligned} 
$$

- The Basic Rotation matrices

$$
\begin{aligned} R_{z, \theta}
&=
\begin{bmatrix} 
cos \theta  & - sin \theta  & 0  \\
sin \theta & cos \theta &  0  \\
0  & 0  & 1  \\
\end{bmatrix}, 
R_{x, \theta} = 
\begin{bmatrix} 
1  & 0  & 0  \\
0 & cos \theta &  - sin \theta  \\
0  & sin \theta & cos \theta  \\
\end{bmatrix}
R_{y, \theta} = 
\begin{bmatrix} 
cos \theta  & 0 &  sin \theta   \\
0 & 1 & 0 \\
- sin \theta  & 0  & cos \theta   \\
\end{bmatrix}
\end{aligned} 
$$

$$
\begin{aligned} 
& R_{z, 0} = I \\
& R_{z, \theta}  R_{z, \phi} = R_{z, \theta+\phi}  \\
& R^{-1}_{z, \theta} = R_{z, -\theta} 
\end{aligned} 
$$

------

## Rotational Transformations

- We wish to determine the coordinates of p relative to a fixed reference frame $$o_0 x_0 y_0 z_0$$.

$$
\begin{aligned} 
& p = ux_1 + vy_1 + wz_1
\end{aligned} 
$$

- Projection onto the coordinate axes of the frame $$o_0 x_0 y_0 z_0$$.
  - Project the vector $$p$$ onto each axis of reference frame $$o$$.

$$
\begin{aligned} p^0
&=
\begin{bmatrix} 
p \cdot x_0\\
p \cdot y_0\\
p \cdot z_0  \\
\end{bmatrix}
\end{aligned} 
$$

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec2/2.png" class="lead"   style="width:320px; height=:240px"/>
</figure>

-  Combining these two equations


$$
\begin{aligned} p^0
&=
\begin{bmatrix} 
(ux_1 + vy_1 + wz_1) \cdot x_0\\
(ux_1 + vy_1 + wz_1) \cdot y_0\\
(ux_1 + vy_1 + wz_1) \cdot z_0  \\
\end{bmatrix} \\
&= 
\begin{bmatrix} 
x_1 \cdot x_0 & y_1 \cdot x_0 & z_1 \cdot x_0\\
x_1 \cdot y_0 & y_1 \cdot x_0 & z_1 \cdot x_0\\
x_1 \cdot z_0 & y_1 \cdot x_0 & z_1 \cdot x_0\\
\end{bmatrix}
\begin{bmatrix} 
u\\
v\\
w\\
\end{bmatrix}
\end{aligned} 
$$

- Finally, 

$$
\begin{aligned} p^0
&= R^0_1 p^1 
\end{aligned} 
$$

- The rotation matrix can be used not only to present the __orientation__ of coordinate frame $$o_1 x_1 y_1 z_1$$ with respect to frame $$o_0 x_0 y_0 z_0$$, but also to __transform the coordinates__ of a point from one frame to another.


------

## Composition of Rotations

### Rotation with respect to the __current coordinate frame__
  
- Suppose we now add a third coordinate frame $$o_2 x_2 y_2 z_2$$ related to the frames $$o_0 x_0 y_0 z_0$$ and  $$o_1 x_1 y_1 z_1$$ by rotational transformations.

$$
\begin{aligned} 
& p^0 &= R^0_1 p^1 \\
& p^1 &= R^1_2 p^2 \\
& \therefore p^0 &= R^0_1 R^1_2 p^2 &= R^0_2 p^2
\end{aligned} 
$$

  
- Suppose initially that all 3 of the coordinate frames coincide.
- We __first rotate__ the frame $$o_1 x_1 y_1 z_1$$ related to $$o_0 x_0 y_0 z_0$$ according to the __transformation $$R ^1 _2$$__.
- Then, with the frame $$o_1 x_1 y_1 z_1$$ and $$o_2 x_2 y_2 z_2$$ coincident, we __rotate__ $$o_2 x_2 y_2 z_2$$ relative $$o_1 x_1 y_1 z_1$$ to according to the __transformation $$R ^1 _2$$__.
- In each case, rotation occurs with respect to the __current frame__.

> Note: 
> > It is important to remember that __the order__ in which a sequence of rotations are carried out __is crucial__.
> > Rotation matix has difference results according to the order of sequence of roation.

### Rotation with respect to the __fixed coordinate frame__

- Many times it is desirable to perform __a sequence of rotations, each about a given fixed coordinate frame__, rather than about successive current frames. 



------

## Parameterization of Rotations

-  Three ways in which an arbitrary rotation can be represented using only three independent quantities:
   -  __Euler Angle representation__
   -  __Roll-Pitch-Yaw representation__
   -  Axis/angle representation

### Euler Angles

- A common method of specifying a rotation matrix.
- We can specify the orientation of the frame  $$o_1 x_1 y_1 z_1$$ relative to the frame  $$o_0 x_0 y_0 z_0$$ by three angles  __$$(\phi, \theta, \psi )$$__ , known as __Euler Angles__.
- Procedure
  - Rotation about the __z-axis__ by the angle $$\phi$$ 
  - Rotation about the current __y-axis__ by the angle $$\theta$$
  - Rotation about the current __z-axis__ by the angle $$\psi$$.

> Note
> > Actually, the order of sequence can be defined according to diverse type, but z-y-z is the common order of sequence.

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec2/3.png" class="lead"   style="width:640px; height=:480px"/>
</figure>

$$
\begin{aligned} R^0_1
&=
R_{z, \phi} R_{y, \theta} R_{z, \psi} \\
&= 
\begin{bmatrix} 
c_{\phi} & -s_{\phi} & 0\\
s_{\phi} & c_{\phi} & 0\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix} 
c_{\theta} & 0 & s_{\theta}\\
0 & 1 & 0\\
-s_{\theta} & 0 & c_{\theta}\\
\end{bmatrix}
\begin{bmatrix} 
c_{\psi} & -s_{\psi} & 0\\
s_{\psi} & c_{\psi} & 0\\
0 & 0 & 1
\end{bmatrix}\\
&= 
\begin{bmatrix} 
c_{\phi}c_{\theta}c_{\psi}-s_{\phi}s_{\psi} & -c_{\phi}c_{\theta}s_{\psi}-s_{\phi}c_{\psi} & c_{\phi}s_{\theta}\\
s_{\phi}c_{\theta}c_{\psi}+c_{\phi}s_{\psi}  & -s_{\phi}c_{\theta}s_{\psi}+c_{\phi}c_{\psi} & s_{\phi}s_{\theta}\\
-s_{\theta}c_{\psi} & s_{\theta}s_{\psi} & c_{\theta}
\end{bmatrix}

\end{aligned} 
$$

- Consider the problem of determining the Euler Angles, $$(\phi, \theta, \psi )$$, given the rotation matrix: 

$$
\begin{aligned} R
&=
\begin{bmatrix} 
r_{11} & r_{12} & r_{13}\\
r_{21} & r_{22} & r_{23}\\
r_{31} & r_{32} & r_{33}
\end{bmatrix} \\
&= 
\begin{bmatrix} 
c_{\phi}c_{\theta}c_{\psi}-s_{\phi}s_{\psi} & -c_{\phi}c_{\theta}s_{\psi}-s_{\phi}c_{\psi} & c_{\phi}s_{\theta}\\
s_{\phi}c_{\theta}c_{\psi}+c_{\phi}s_{\psi}  & -s_{\phi}c_{\theta}s_{\psi}+c_{\phi}c_{\psi} & s_{\phi}s_{\theta}\\
-s_{\theta}c_{\psi} & s_{\theta}s_{\psi} & c_{\theta}
\end{bmatrix}
\end{aligned} 
$$

- If not both $$r_{13}$$ and $$r_{23}$$ are not zero, $$s_{\theta} \neq 0 \rightarrow$$  hence, not both $$r_{31}$$ and $$r_{32}$$ are zero, $$r_{33} \neq \pm 1. \rightarrow$$  

$$
\begin{aligned} 
\theta 
&= arctan(\pm \sqrt{1-r^2_{33}}, r_{33}) \\
&= arctan(\pm \sqrt{1-c_{\theta}^2}, c_{\theta})\\
&= arctan(\pm s_{\theta}, c_{\theta})
\end{aligned} 
$$

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec2/4.png" class="lead"   style="width:320px; height=:240px"/>
</figure>

- If $$\theta > 0$$ 

$$
\begin{aligned} 
\theta 
&= arctan(r_{23}, r_{33}) \\
&= arctan(s_{\phi}s_{\theta}, c_{\phi} s_{\theta}) \\
\\
\psi 
&= arctan(r_{32}, -r_{31}) \\
&= arctan(s_{\theta}s_{\psi}, s_{\theta} s_{\psi})
\end{aligned} 
$$

- If $$\theta < 0$$ 

$$
\begin{aligned} 
\theta 
&= arctan(-r_{23}, -r_{33}) \\
&= arctan(-s_{\phi}s_{\theta}, -c_{\phi} s_{\theta}) \\
\\
\psi 
&= arctan(-r_{32}, r_{31}) \\
&= arctan(-s_{\theta}s_{\psi}, -s_{\theta} s_{\psi})
\end{aligned} 
$$

- If $$r_{13} = r_{23} = 0$$ , then $$r_{33} = \pm 1$$  due to __orthogonality__.

$$
\begin{aligned} R
&=
\begin{bmatrix} 
r_{11} & r_{12} & 0\\
r_{21}  & r_{22} & 0\\
0 & 0 & \pm 1
\end{bmatrix}
\end{aligned} 
$$

- If $$r_{33} = 1$$ , then $$c_{\theta} = 1, s_{\theta} = 0 \rightarrow \theta = 0$$.

$$
\begin{aligned} 
\begin{bmatrix} 
c_{\phi}c_{\theta}c_{\psi}-s_{\phi}s_{\psi} & -c_{\phi}c_{\theta}s_{\psi}-s_{\phi}c_{\psi} & c_{\phi}s_{\theta}\\
s_{\phi}c_{\theta}c_{\psi}+c_{\phi}s_{\psi}  & -s_{\phi}c_{\theta}s_{\psi}+c_{\phi}c_{\psi} & s_{\phi}s_{\theta}\\
-s_{\theta}c_{\psi} & s_{\theta}s_{\psi} & c_{\theta}
\end{bmatrix}
&=
\begin{bmatrix} 
c_{\phi}c_{\psi}-s_{\phi}s_{\psi} & -c_{\phi}s_{\psi}-s_{\phi}c_{\psi} & 0\\
s_{\phi}c_{\psi}+c_{\phi}s_{\psi}  & -s_{\phi}s_{\psi}+c_{\phi}c_{\psi} & 0\\
0 & 0 & 1
\end{bmatrix}\\
&=
\begin{bmatrix} 
 c_{\phi+\psi}  & -s_{\phi + \psi} & 0\\
 s_{\phi+\psi}  & c_{\phi + \psi} & 0\\
0 & 0 & 1
\end{bmatrix}
=
\begin{bmatrix} 
r_{11} & r_{12} & 0\\
r_{21} & r_{22} & 0\\
0 & 0 & 1
\end{bmatrix} \\
\\
\because 
& sin(\alpha \pm \beta) = sin\alpha cos\beta \pm cos\alpha sin\beta  \\
& cos(\alpha \pm \beta) = cos\alpha cos\beta \mp sin\alpha sin\beta 
\end{aligned} 
$$


- Thus, 

$$
\begin{aligned} 
\phi + \psi 
&= arctan(r_{21}, r_{11}) \\
&= arctan(-r_{12}, r_{11})
\end{aligned} 
$$


  - There are infinitely many solutions.  


- If $$r_{33} = -1$$ , then $$c_{\theta} = -1, s_{\theta} = 0 \rightarrow \theta = \pi$$.

$$
\begin{aligned} 
\begin{bmatrix} 
- c_{\phi-\psi}  & -s_{\phi - \psi} & 0\\
- s_{\phi-\psi}  & c_{\phi - \psi} & 0\\
0 & 0 & -1
\end{bmatrix}
=
\begin{bmatrix} 
r_{11} & r_{12} & 0\\
r_{21} & r_{22} & 0\\
0 & 0 & -1
\end{bmatrix} \\
\\
\because 
& sin(\alpha \pm \beta) = sin\alpha cos\beta \pm cos\alpha sin\beta  \\
& cos(\alpha \pm \beta) = cos\alpha cos\beta \mp sin\alpha sin\beta 
\end{aligned} 
$$


- Thus, 

$$
\begin{aligned} 
\phi - \psi 
&= arctan(-r_{12}, -r_{11}) \\
&= arctan(-r_{21}, r_{22})
\end{aligned} 
$$


  - There are infinitely many solutions.  

-----------

### Roll, Pitch, Yaw Angles

- A rotation matrix R can also described as a product of successive rotations about the principal coordinate axes $$x_0, y_0, z_0$$.
- These rotations define the roll, pitch, and yaw angles __$$(\phi, \theta, \psi)$$__.
- Rotation order: 
  - $$x_0 \rightarrow y_0 \rightarrow z_0$$ (current coordinate perspective).
  - $$z \rightarrow y \rightarrow x$$ (global coordinate perspective).

<figure>
  <img alt="An image with a caption" src="/static/images/Robot_dynamics/lec2/5.png" class="lead"   style="width:320px; height=:240px"/>
</figure>

$$
\begin{aligned} R^0_1
&=
R_{z, \phi} R_{y, \theta} R_{z, \psi} \\
&= 
\begin{bmatrix} 
c_{\phi} & -s_{\phi} & 0\\
s_{\phi} & c_{\phi} & 0\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix} 
c_{\theta} & 0 & s_{\theta}\\
0 & 1 & 0\\
-s_{\theta} & 0 & c_{\theta}\\
\end{bmatrix}
\begin{bmatrix} 
1 &  0 & 0\\
0 & c_{\psi} & -s_{\psi} \\
0 & s_{\psi} & c_{\psi}
\end{bmatrix}\\
&= 
\begin{bmatrix} 
 c_{\phi}c_{\theta} & -s_{\phi}c_{\psi}+c_{\phi}s_{\theta}s_{\psi} & s_{\phi}s_{\psi} + c_{\phi}s_{\theta}c_{\psi}\\
s_{\phi}c_{\theta}  & c_{\phi}c_{\psi}+s_{\phi}s_{\theta}s_{\psi} & -c_{\phi}s_{\psi} + s_{\phi}s_{\theta}c_{\psi}\\
-s_{\theta} & c_{\theta}s_{\psi} &  c_{\theta}c_{\psi}
\end{bmatrix}
\end{aligned} 
$$

> Note
> > Now, the order of sequence is z-y-x. But, x-y-z is also possible to define the order.

- Consider the problem of determining the roll, pitch, yaw angles, $$\pi, \theta, \psi$$, given the rotation matrix:

$$
\begin{aligned} R
&=
\begin{bmatrix} 
r_{11} & r_{12} & r_{13}\\
r_{21} & r_{22} & r_{23}\\
r_{31} & r_{32} & r_{33}
\end{bmatrix} \\
&= 
\begin{bmatrix} 
 c_{\phi}c_{\theta} & -s_{\phi}c_{\psi}+c_{\phi}s_{\theta}s_{\psi} & s_{\phi}s_{\psi} + c_{\phi}s_{\theta}c_{\psi}\\
s_{\phi}c_{\theta}  & c_{\phi}c_{\psi}+s_{\phi}s_{\theta}s_{\psi} & -c_{\phi}s_{\psi} + s_{\phi}s_{\theta}c_{\psi}\\
-s_{\theta} & c_{\theta}s_{\psi} &  c_{\theta}c_{\psi}
\end{bmatrix}
\end{aligned} 
$$

- Solution:

$$
\begin{aligned} 
\phi 
&= arctan(r_{21}, r_{11}) & if, -\frac{\pi}{2}< \theta < \frac{\pi}{2}\\
&= arctan(- r_{21}, - r_{11}) & if, -\frac{\pi}{2} > \theta \quad or \quad \theta > \frac{\pi}{2}\\
\\
\theta 
&= arctan(-r_{31}, c_{\phi}r_{11} + s_{\phi}r_{21}) \\
&= arctan(s_{\theta}, c_{\theta} (c_{\phi}^2 + s_{\phi}^2)  \\
\\
\psi 
&= arctan(s_{\phi} r_{13} - c_{\phi} r_{23}, -s_{\phi}r_{12}+ c_{\phi}r_{22}) \\
&= arctan(s_{\psi}(s_{\phi}^2 + c_{\phi} ^2) +s_{\phi} c_{\phi} s_{\theta} c_{\psi} - c_{\phi} s_{\phi} s_{\theta} c_{\psi} , c_{\psi}(s_{\phi}^2 + c_{\phi} ^2) +s_{\phi} c_{\phi} s_{\theta} s_{\psi}  -c_{\phi} s_{\phi} s_{\theta} s_{\psi})
\end{aligned} 
$$

- if $$\theta = \pm \frac{\pi}{2}$$, no there exist a unique solution.
- Generally, we assume that $$-\frac{\pi}{2 } < \theta < \frac{\pi}{2}$$.

-----------

## Homogeneous Transformations

- In this section, we __combine position(translation) and orientation__ to define homogeneous transformations.
- If frame $$o_1 x_1 y_1 z_1$$ is obtained from frame $$o_0 x_0 y_0 z_0$$ by first applying a rotation specified by $$R^0_1$$ followed by a translation given (with respect to $$o_0 x_0 y_0 z_0$$) by __$$d^0_1$$__ , then the coordinates $$p^0$$ are given by 

$$
\begin{aligned} 
p^0 = R^0_1 p^1 + d^0_1
\end{aligned} 
$$

- Definition: A transformation of the form given in previous equation is said to define a rigid motion if R is orthogonal.
  - Consider the two rigid motions

$$
\begin{aligned} 
p^0 = R^0_1 p^1 + d^0_1
p^1 = R^1_2 p^2 + d^1_2
\end{aligned} 
$$

- Their composition defines a third rigid motion

$$
\begin{aligned} 
p^0 
&= R^0_1 (R^1_2 p^2 + d^1_2) + d^0_1 \\
&= R^0_2 p^2 + R^0_1 d^1_2 + d^0_1
\end{aligned} 
$$

- Since the relationship between $$p^0$$ and $$p^2$$ is also a rigid motion,

$$
\begin{aligned} 
p^0 = R^0_2 p^2 + d^0_2
\end{aligned} 
$$

- We have the relationships


$$
\begin{aligned} 
& R^0_2 &= R^0_1 R^1_2 \\
& p^0_2 &= d^0_1 + R^0_1 d^1_2
\end{aligned} 
$$

- $$p^0_1$$: the vector from $$o_0$$ to $$o_1$$ w.r.t $$o_0 x_0 y_0 z_0$$.
- $$R^0_1 d^1 d_2$$: the vector from $$o_1$$ to $$o_2$$ expressed in the orientation of the $$o_0 x_0 y_0 z_0$$.

- Matrix calculation (4x4 matrix)
  - 0 = row vector(0 0 0)


$$
\begin{aligned} 
\begin{bmatrix} 
R^0_1 & d^0_1\\
0 & 1\\
\end{bmatrix} 
\begin{bmatrix} 
R^1_2 & d^1_2\\
0 & 1\\
\end{bmatrix} 
&= 
\begin{bmatrix} 
R^0_1 R^1_2 & R^0_1 d^1_2 + d^0 _1\\
0 & 1\\
\end{bmatrix} \\ 
&= 
\begin{bmatrix} 
R^0_2 & R^0_1 d^1_2 + d^0 _1\\
0 & 1\\
\end{bmatrix} 
\end{aligned} 
$$

- Homogeneous tranformation


$$ H =
\begin{aligned} 
\begin{bmatrix} 
R & d\\
0 & 1\\
\end{bmatrix}; 
\qquad R \in SO(3), d \in \R^3
\end{aligned} 
$$

- Usintg the fact R is orthogonal 


$$ H^{-1} =
\begin{aligned} 
\begin{bmatrix} 
R^T & -R^T d\\
0 & 1\\
\end{bmatrix}
\end{aligned} 
$$

- In order to use __homogeneous transformation__, we need to augment the vectors $$p$$ by the addition of a fourth component of 1.
  - __Homogeneous representation__:

$$ 
\begin{aligned} P^0 =
\begin{bmatrix} 
p^0\\
1\\
\end{bmatrix},
\qquad
P^1 = 
\begin{bmatrix} 
p^1\\
1\\
\end{bmatrix}
\end{aligned} 
$$

- By using homogeneous transformation and representation, 

$$ 
\begin{aligned} 
p^0 &= R^0_1 p^1  + d^0_1 \\
\\
P^0 &= H^0_1 P^1
\end{aligned} 
$$

-  A set of basic homogeneous transformations

$$
\begin{aligned}
Trans_{x,a} 
&=
\begin{bmatrix} 
1 & 0 & 0 & a\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} ;
& Rot_{x,\alpha}
&=
\begin{bmatrix} 
1 & 0 & 0 & 0\\
0 & c_{\alpha} & -s_{\alpha} & 0\\
0 & s_{\alpha} & c_{\alpha} & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} \\

Trans_{y,b} 
&=
\begin{bmatrix} 
1 & 0 & 0 & 0\\
0 & 1 & 0 & b\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} ;
& Rot_{y,\beta}
&=
\begin{bmatrix} 
c_{\beta} & 0 & s_{\beta} & 0\\
0 & 1 & 0 & 0\\
-s_{\beta} & 0 & c_{\beta} & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} \\
Trans_{z,c} 
&=
\begin{bmatrix} 
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & c\\
0 & 0 & 0 & 1\\
\end{bmatrix} ;
& Rot_{z,\gamma}
&=
\begin{bmatrix} 
c_{\gamma} & -s_{\gamma} & 0 & 0\\
s_{\gamma} & c_{\gamma} & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1\\
\end{bmatrix} \\
\end{aligned} 
$$

> Note
> > The result of homogeneous is diffrent according to the order of sequence.

- The most general homogeneous transformation

$$
\begin{aligned}
H^0_1
&=
\begin{bmatrix} 
n_x & s_x & a_x & d_x\\
n_y & s_y & a_y & d_y\\
n_z & s_z & a_z & d_z\\
0 & 0 & 0 & 1\\
\end{bmatrix} =
&=
\begin{bmatrix} 
n & s & a & d\\
0 & 0 & 0 & 1\\
\end{bmatrix}
\end{aligned} 
$$

- $$n = (n_x, n_y, n_z)^T$$ : direction of $$x_1$$ in the $$o_0 x_0 y_0 z_0$$.
- $$s = (s_x, s_y, s_z)^T$$ : direction of $$y_1$$ in the $$o_0 x_0 y_0 z_0$$.
- $$a = (a_x, a_y, a_z)^T$$ : direction of $$z_1$$ in the $$o_0 x_0 y_0 z_0$$.
- $$d = (d_x, d_y, d_z)^T$$ : vector from $$o_0$$ to the origin $$o_1$$ in the $$o_0 x_0 y_0 z_0$$.

------------

> Reference:
- [SEOULTECH - HRRLAB](http://hrrlab.com)
- [SEOULTECH - Robot Dynamics & Control, Lecture slides](http://hrrlab.com/)