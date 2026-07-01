---
title:  "Robot Dynamics & control: Lecture 1 - Introduction"
description: "robotics_and_control"
date: 2018-03-02
weight: 30
math: true
collection_type: Article
toc: true
---

## Components & Structure of Robots:
- Robot manipulators are composed of links connected by __joints__ into a __kinematic chain__.
  -   __Revolute__ joint: allows relative rotation between two links.
  -   __Prismatic__ joint: allows a linear relative motion between two links.

![](/images/Robot_dynamics/1.png)


### Degrees of Freedom
  - The number of joints determines the DOF of the manipulator.
  - A typical manipulator should possess at least six independent DOF:
    - Three for positioning + Three for orientation.
  - With fewer than six DOF the arm cannot reach every point in its work encironment with arbitray orientation.


### Workspace
- The total volume swept out by the end-effector as the manipulator executes all possible motions.
- __Reachable workspace__ : entire set of points reachable by the manipulator
- __Dextrous workspace__: subset of the reachable workspace that the manipulator can reach with an arbitrary orientation of the end-effector. 

### Common Kinematic Arrangements

####  Articulated configuration(RRR)
- This configuration provides for relatively large freedom of movement in a compact space
- The links and joints are analogous to human joint.

![](/images/Robot_dynamics/2.png)


####  Spherical Configuration(RRP)
- The third joint of the articulated robot is replaced by a prismatic joint.
- The 'Stanford-arm' is an example of a spherical manupulator.

![](/images/Robot_dynamics/3.png)

#### SCARA Configuration(RRP)
- The so-called SCARA(Selective Compliant Articulated Robot for Assembly) has $$z_0, z_1, z_2$$ prallel.
- Ideal for table top assembly such as pick and place task. 

![](/images/Robot_dynamics/4.png)

#### Cylindrical Configuration(RPP)
- The first joint is revolute, while the second and third joints are prismatic.
- This is often used in materials transfer task.

![](/images/Robot_dynamics/5.png)

#### Cartesian Configuration(PPP)
- The configuration is useful for table-top assembly applications.
- This is often used in pick and place operations.

![](/images/Robot_dynamics/6.png)

#### Parallel manupulator
- The configuration forms a closed chain by using several independent kinematic chains connecting the vase to the end-effector.
- The closed chain results in greater structural rigidity.
- This robot generally have __much structural rigidity__ than serial link robots.

![](/images/Robot_dynamics/8.png)

### Wrists and End-Effectors 
- The wrist of a manipulator refers to the joints in the kinematic chain berween the arm and hand.
- It is increasingly common to design manipulators with __spherical wrists__, by which we mean wrists whose three joint axes intersect at common point.
- 6 DOF = __3 DOF for wrist + 3DOF for arm__
- The arm and wrist assemblies are used primarily __for positioning the end-effector__(=hand)
- The simplest type of end-effector are grippers.

![](/images/Robot_dynamics/9.png)


-------

# Problem 1: Forward Kinematics

- The first problem is to describe __position and orientation of the tool__.
- Determination of the position and orientation of the end-effector(or tool) in terms of joint variables(angle or displacement).

![](/images/Robot_dynamics/10.png)


## Forward kinematic equations 

###  Tool(End-effector) position 
$$
\begin{aligned}
\qquad   x = a_1 cos \theta_1 + a_2 cos( \theta_1 + \theta_2) \\
\qquad   y = a_1 sin \theta_1 + a_2 sin( \theta_1 + \theta_2)
\end{aligned} 
 $$

###  Tool(End-effector) Orientation
Rotation matrix:
$$
\begin{aligned}
\qquad \begin{bmatrix}
                 i_2  \cdot i_0  & j_2  \cdot i_0  \\
                 i_2  \cdot j_0  & j_2  \cdot j_0          
               \end{bmatrix}
&=
\begin{bmatrix}
                 cos(\theta_1 + \theta_2)  & -sin(\theta_1 + \theta_2) \\
                 sin(\theta_1 + \theta_2)   & cos(\theta_1 + \theta_2)          
               \end{bmatrix}
\end{aligned} 
 $$

 > Note: __Denavit-Hartenberg Convention & Homogeneous transformation__ is needed to express these relationship.



-------


# Problem 2: Inverse Kinematics

- In order to command the robot to move to arbitrary position, we need the joint variables __in terms of x and y coordinates__.
  - we may need the forward kinematic equations in advance.

- Since the forward kinematic equations are nonlinear, a solution may not be easy.
- There may be __many solutions or infinite number of solution__.
  - we can impose constraints.

![](/images/Robot_dynamics/11.png)


## Law of Cosines

$$
\begin{aligned} 
  & cos \theta_2 = \frac{x^2 + y^2 - a_1 ^2 - a^2 _2}{2 a_1 a_2} &\cong D  \\
  & \therefore  \theta _2 = cos ^{-1}(D)  
\end{aligned} 
$$

-  Not better way.
-  This can not distinguish the elbow up and down.

$$
\begin{aligned} 
  & sin ^2 \theta  _2 + cos ^2 \theta_2 =  1 \rightarrow sin \theta _2 = \pm  \sqrt{1 - D^2} \\
  &  \therefore  \theta _2 = tan ^{-1} (\frac{1 - D^2}{D})
\end{aligned} 
$$

- __Signs determine__ the elbow up and down.

## Inverse kinematic equations.

![](/images/Robot_dynamics/12.png)

$$
\begin{aligned} 
  & \theta  _2 = tan ^{-1} \frac{\pm \sqrt{1 - D ^2}}{D} \\
  & \theta  _1 = tan ^{-1} (\frac{y}{x}) - tan ^{-1}(\frac{a_2 sin \theta _2}{a_1 + a_2 cos \theta_2}) 
\end{aligned} 
$$

- For verification, we can check using the Forward Kinematics(__cross-check__)

## Another way - Closed form

- __Closed form__: $$ \theta_1, \theta_2 $$ is expressed with x, y using forward kinematics.

  - x, y를 제곱하여 $$cos \theta_2, sin \theta_2$$을 얻은 후, $$\theta_2$$를 구한다.

$$
\begin{aligned} 
  & x = a_1 cos \theta_1 + a_2 cos(\theta _1 + \theta _2)  \\
  & y = a_1 sin \theta_1 + a_2 sin(\theta _1 + \theta _2)  \\
  & \qquad \qquad \qquad \triangledown  \\
  \\
  x^2 
    &= a^2 _1 cos ^2 \theta_1 + a^2_2   cos^2 (\theta_1 + \theta_2 ) + 2 a_1 a_2 cos \theta_1 cos(\theta_1 + \theta_2)\\
    & = a^2 _1 cos ^2 \theta_1 + a^2_2   cos^2 (\theta_1 + \theta_2 ) +  a_1 a_2 (cos (2 \theta_1 + \theta_2) + cos\theta_2)\\
  y^2 &= a^2 _1 sin ^2 \theta_1 + a^2_2   sin^2 (\theta_1 + \theta_2 ) + 2 a_1 a_2 sin \theta_1 sin(\theta_1 + \theta_2)\\
    & = a^2 _1 sin ^2 \theta_1 + a^2_2   sin^2 (\theta_1 + \theta_2 ) -  a_1 a_2 (cos (2 \theta_1 + \theta_2) - cos\theta_2)\\
    & \qquad \qquad \qquad   \triangledown  \\
  \\
  & x^2 +y^2  = a^2_1 +a^2 _2 + 2a_1 a_2 cos \theta_2 \\
  & \qquad \qquad \qquad  \triangledown  \\
  \\
  & cos \theta_2 = \frac{x^2 + y^2 - a_1 ^2 - a^2 _2}{2 a_1 a_2} \quad \cong D \\
  & sin \theta_2 = \pm \sqrt{1 - D^2} \\
  \\
  & \therefore \theta_2 = tan ^{-1} (\frac{\pm \sqrt{1-D^2}}{D})
\end{aligned} 
$$

  - 아래의 식(1)을 얻기 위해 $$cos \theta_1, sin\theta_2$$를 각각 곱하고, 아래의 식(2)을 얻기 위해 $$sin \theta_1, cos \theta_1$$를 각각 곱한다.
  - 이 후 x, y를 곱하여 더하rh 빼서 $$cos \theta_1,sin \theta_1$$를 얻어 $$\theta_1$$ 을 구한다.

$$
\begin{aligned} 
  & x = a_1 cos \theta_1 + a_2 cos(\theta _1 + \theta _2)  \\
  & y = a_1 sin \theta_1 + a_2 sin(\theta _1 + \theta _2)  \\
  \\
  & x cos \theta_1  = a_1 cos ^2 \theta_2 + a_2 cos \theta_1 (cos \theta_1 cos\theta_2 - sin \theta_1 sin \theta_2) \\
  & y sin \theta_1  = a_1 sin ^2 \theta_2 + a_2 sin \theta_1 (sin \theta_1 cos\theta_2 - cos \theta_1 sin \theta_2) \\
  & \qquad \qquad \qquad \triangledown  \\
  & x cos \theta_1 + y sin \theta_1 = a_1 + cos \theta_2 \qquad(1)\\
  \\
  \\
  & x sin \theta_1  = a_1 sin \theta_1 cos  \theta_1 + a_2 sin \theta_1 (cos \theta_1 cos\theta_2 - sin \theta_1 sin \theta_2) \\
  & y cos \theta_1  = a_1 sin \theta_1 cos \theta_1 + a_2 cos \theta_1 (sin \theta_1 cos\theta_2 - cos \theta_1 sin \theta_2) \\
  & \qquad \qquad \qquad \triangledown  \\
  & x sin \theta_1 - y cos \theta_1 = -a_2 sin \theta_2 \qquad(2)\\
  \\
  \\
  & (x^2 + y^2 )cos \theta_1 = x(a_1 + a_2 cos \theta_2) +y a_2 sin \theta_2  \qquad \because x \cdot (1) - y \cdot (2)  \\
  & \qquad \qquad \qquad \triangledown  \\
  & cos \theta_1 = \frac{x(a_1 + a_2 cos \theta_2) +y a_2 sin \theta_2 }{(x^2 + y^2 )}  \\
  \\
  \\
  & (x^2 + y^2 )sin \theta_1 = y(a_1 + a_2 cos \theta_2) -x  a_2 sin \theta_2  \qquad \because y \cdot (1) + x \cdot (2)  \\
  & \qquad \qquad \qquad \triangledown  \\
  & sin \theta_1 = \frac{y(a_1 + a_2 cos \theta_2) -x a_2 sin \theta_2 }{(x^2 + y^2 )}  \\
  \\
  & \therefore \theta_1 = tan ^{-1} (\frac{y(a_1 + a_2 cos \theta_2) - x a_2 sin \theta_2}{x(a_1 + a_2 cos \theta_2) + y a_2 sin \theta_2})

\end{aligned} 
$$

## Another way - Numerical Solution
-  In contrast to the closed form(geometry solution), it absolutely __needs a forward kinematics__.

![](/images/Robot_dynamics/13.png)



-------

# Problem 3: Velocity Kinematics

- In order to __follow a contour__ at constant velocity, or at any prescribed velocity, we must know the __relationship between the velocity of the tool(end-effector) and the joint velocities__.
  - we can __differentiate the equations__ to obtain
  
$$
\begin{aligned} 
  & \dot{x} = - a_1 \dot{\theta_1} sin \theta_1 - a_2 (\dot{\theta_1} + \dot{\theta_2}) sin(\theta _1 + \theta _2)  \\
  & \dot{y} = a_1 \dot{\theta_1} cos \theta_1 + a_2 (\dot{\theta_1} + \dot{\theta_2}) cos(\theta _1 + \theta _2)  \\
\end{aligned} 
$$

If $$ x = \begin{bmatrix} x  \\ y \end{bmatrix} $$ and $$ \theta = \begin{bmatrix} \theta_1  \\ \theta_2 \end{bmatrix} $$,

$$
\begin{aligned}  \dot{x} 
& = J \dot{\theta} \\
& =
\begin{bmatrix} 
  \frac{\partial x}{\partial \theta_1} &  \frac{\partial x}{\partial \theta_2} \\
  \frac{\partial y}{\partial \theta_1} & \frac{\partial y}{\partial \theta_2}  \\
\end{bmatrix} 
\begin{bmatrix} \theta_1  \\ \theta_2 \end{bmatrix} \\
& =
\begin{bmatrix} 
  -a_1 sin \theta_1 - a_2 sin (\theta_1 + \theta_2) &  - a_2 sin(\theta_1 + \theta_2) \\
  a_1 cos\theta_1 + a_2 cos (\theta_1 + \theta_2) & a_2 cos(\theta_1 + \theta_2)  \\
\end{bmatrix} 
\begin{bmatrix} \theta_1  \\ \theta_2 \end{bmatrix} \\
\end{aligned} 
$$

- where, J is Jacobian.


- Using inverse Jacobian give

$$
\begin{aligned} 
\dot{\theta} &= J ^{-1} \dot{x} \\

\begin{bmatrix} \dot{\theta_1}  \\ \dot{\theta_2} \end{bmatrix}
&=
\frac{1}{a_1 a_2 sin \theta_2}
\begin{bmatrix} 
  a_2 cos (\theta_1 + \theta_2) &   a_2 sin(\theta_1 + \theta_2) \\
  -a_1 cos\theta_1 - a_2 cos (\theta_1 + \theta_2) & -a_1 sin \theta_1 - a_2 sin(\theta_1 + \theta_2)  \\
\end{bmatrix} 
\begin{bmatrix} \dot{x}  \\ \dot{y} \end{bmatrix} \\
\end{aligned} 
$$

- __Singular Configuration__:
  - Where there is __no inverse Jacobian__.
  - At singular configuration, the manipulator cannot move in certain dirctions.

$$ 
\begin{aligned} 
   Det \quad J = a_1 a_2 sin \theta_2 = 0 \\
  \therefore \theta_2 = 0 \quad or \quad \pi
\end{aligned} 
$$

-------

# Problem 4: Path Planning and Trajectory Generation

## Path planning
- Determines a path in task space to mode  the robot to a goal position while avoiding collision with objects in its workspace, __without time considerations,__, that is, without considering velocities and accelerations.

## Trajectory Generation:
- Determine the __time history__ of the manipulator along a given path.

-------

# Problem 5: Dynamics

- Relationship between __motion and forces(Equation of motion)__.
- How much force is required to achieve the given motion?
  - __Rigid body dynamics__: Dynamics of target object which has __no strain or deformation__ in the body.
  
$$ 
\begin{aligned} 
\qquad \qquad \qquad  M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau 
\end{aligned} 
$$

- $$M$$: Inertia matrix.
- $$C$$: Centrigufal and Coriolis matrix.
- $$G$$: Gravity matrix.
- $$q$$: Generalized coordinate(angle or position)
- $$\tau$$ : Generalized force(torque or force)


- __Inverse dynamics__: Computes the __required joint torques or forces__ that lead to the given robot motion.
- __Forward dynamics__: Computes the robot motion __from the joint torques or forces applied__.

## Example 1: Three link-revolute arm
![](/images/Robot_dynamics/14.png)
![](/images/Robot_dynamics/15.png)
-------

# Problem 6: Position Control

- The control prolem for robot manipulator is the problem of determining the time history of __joint inputs (joint forces or torques or inputs to the actuators, for example, voltage)__ required to cause the end-effector to execute a desired motion.
- There are many control techniques and methodologies.
  - An important thing is that control methods depends on __hardware/software and application__
    - Cartesian manipulator vs. Elbow type manupulator
    - DC motor with reduction gear vs. High torgue DC motor without gwar (High tech. for interaction)
    - Point-to-point path vs. Continous path
    - More complicated hardward, the more advanced control methods.


## Example: Independent Joint Position Control

- Features:
  - Simplest type of control strategy.
  - Each axis is controlled as a SISO(Single Input/Single Outpue) system.
  - Any coupling effects due to the motion of the other links is either ignored or treated as a disturbance.
  - Objectives: tracking and disturbance rejection.
    - Pose에 따라 moment가 달라져 disturbance가 달라지지만 높은 기어비 때문에 무시.
  
![](/images/Robot_dynamics/16.png)
![](/images/Robot_dynamics/17.png)
![](/images/Robot_dynamics/18.png)

- Each joint has to follow the desired joint angle accurately!

-------

# Problem 7: Force Control

-  Why Force Control?:
   -  Pure position control is not adequate for task which involve extensive contact with the environment.
      -  e.g., assembly, grinding, deburring
   - Need to control the force as well (slight deviation of the end effector would caues either to loose contact or to press too strongly).
     - We can use the Hybrid control(Position + Force control)
   - A force control strategy is one that modifies position trajectories based on the sensed forses.

![](/images/Robot_dynamics/19.png)

>  __The end-effector forces are related to the joint torques!!__
