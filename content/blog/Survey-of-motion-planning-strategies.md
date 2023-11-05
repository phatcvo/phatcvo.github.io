---
title: "[Motion planning] Survey of Motion Planning strategies"
date: 2022-03-18
tags: ["Motion planning", "Survey"]
categories: ["Motion planning"]
description: "Survey of Motion Planning strategies"
draft: false
math: true
---

### Search and Heuristic
* [A Note on Two Problems in Connexion with Graphs](https://link.springer.com/content/pdf/10.1007/BF01386390.pdf) by Dijkstra
* [A Formal Basis for the Heuristic Determination of Minimum Cost Paths](http://ai.stanford.edu/~nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf) by Hart
* [On the complexity of admissible search algorithms](https://www.sciencedirect.com/science/article/pii/0004370277900029) by Martelli
* [Heuristic Search Viewed as Path Finding in a Graph](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.5084&rep=rep1&type=pdf) by Pohl
* [R* Search](https://repository.upenn.edu/cgi/viewcontent.cgi?article=1030&context=grasp_papers) by Likhachev abd Stentz
* [Incremental A*](http://idm-lab.org/bib/abstracts/papers/nips2001.pdf) by Koenig and Likhachev
* [Lifelong planning A*](https://ac.els-cdn.com/S000437020300225X/1-s2.0-S000437020300225X-main.pdf?_tid=a81278f0-4939-425a-81da-8c74ec4fae58&acdnat=1547361093_aacbca6387e97c9fa7a55a71124d341d) by Koenig, Likhachev and Furcy
* [Real-Time Adaptive A*](http://www.aaai.org/Papers/Workshops/2006/WS-06-11/WS06-11-010.pdf) by Koenig and Likhachev
* [Multiheuristic A*](https://journals.sagepub.com/doi/pdf/10.1177/0278364915594029) by Aine, Swaminathan, Narayan, Hwang and Likhachev
* Linear Space Best-First Search

### Replanning
* [Optimal and efficient path planning for partially-known environments](https://ieeexplore.ieee.org/document/351061) by Stentz
* [The Focussed D* Algorithm for Real-Time Replanning](https://www.ri.cmu.edu/pub_files/pub1/stentz_anthony__tony__1995_1/stentz_anthony__tony__1995_1.pdf) by Stentz
* [Fast Replanning for Navigation in Unknown Terrain](https://www.cs.cmu.edu/~maxim/files/dlite_tro05.pdf) by Koenig and Likhachev
* [Using Interpolation to Improve Path Planning: The Field D* Algorithm](https://onlinelibrary.wiley.com/doi/pdf/10.1002/rob.20109) by Ferguson and Stentz
* [Replanning with RRTs](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=1641879) by Ferguson, Kalra and Stentz
* [RRTX: Real-Time Motion Planning/Replanning for Environments with Unpredictable Obstacles](https://pdfs.semanticscholar.org/3d8e/67e4ec96397bdb1fd54d4b3b1e48b98ae771.pdf) by Otte and Frazzoli

### Real-time planning
* [ARA*: Anytime A* with Provable Bounds on Sub-Optimality](https://papers.nips.cc/paper/2382-ara-anytime-a-with-provable-bounds-on-sub-optimality.pdf) by Likhachev, Gordon and Thrun
* [Anytime Dynamic A*: An Anytime, Replanning Algorithm](http://www.cs.cmu.edu/~ggordon/likhachev-etal.anytime-dstar.pdf) by Likhachev, Ferguson, Gordon, Stentz and Thrun
* [Anytime search in dynamic graphs](https://ac.els-cdn.com/S000437020800060X/1-s2.0-S000437020800060X-main.pdf?_tid=bfb5b8bb-81c1-4066-8a94-38f19cedcf98&acdnat=1547359019_08f2d224e1e402dcd391e524bed6eb62) by Likhachev, Ferguson, Gordon, Stentz and Thrun
* [Anytime RRTs](https://www.ri.cmu.edu/pub_files/pub4/ferguson_david_2006_4/ferguson_david_2006_4.pdf) by Ferguson and Stentz

### RRTs
* [Rapidly Exploring Random Trees: A new tool for path planning](http://msl.cs.illinois.edu/~lavalle/papers/Lav98c.pdf) by Lavelle
* [RRT-connect: An efficient approach to single-query path planning](https://ieeexplore.ieee.org/document/844730) by Kuffner and Lavalle
* [Sampling-based Algorithms for Optimal Motion Planning](https://arxiv.org/pdf/1105.1186.pdf) by Karaman and Frazolli
* [Informed RRT*: Optimal Sampling-based Path Planning Focused via Direct Sampling of an Admissible Ellipsoidal Heuristic](https://arxiv.org/pdf/1404.2334.pdf) by Gammell, Srinivasa and Barfoot
* [Batch Informed Trees (BIT*): Sampling-based Optimal Planning via the Heuristically Guided Search of Implicit Random Geometric Graphs](https://arxiv.org/pdf/1405.5848.pdf) by Gammell, Srinivasa and Barfoot
* [Sampling-Based Path Planning on Configuration-Space Costmaps](https://ieeexplore.ieee.org/document/5477164) by Jaillet, Cortes and Simeon
* [Addressing Cost-Space Chasms in Manipulation Planning](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5979797) by Berenson, Simeon and Srinivasa
* [Optimal Kinodynamic Motion Planning using Incremental Sampling-based Methods](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5717430) by Karaman and Frazzoli
* [Sampling-based Optimal Motion Planning for Non-holonomic Dynamical Systems](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6631297) by Karaman and Frazzoli

### State lattice-based planners
* [Efficient constrained path planning via search in state lattices](https://www.ri.cmu.edu/pub_files/2005/9/ISAIRAS05.pdf) by Pivtoraiko and Kelly
* [Differentially Constrained Mobile Robot Motion Planning in State Lattices](https://people.csail.mit.edu/rak/www/sites/default/files/pubs/PivKneKel09.pdf) by Pivtoraiko, Knepper and Kelly
* [Kinodynamic motion planning with state lattice motion primitives](https://ieeexplore.ieee.org/abstract/document/6094900) by Pivtoraiko and Kelly

### Trajectory optimization
* [The dynamic window approach to collision avoidance](https://ieeexplore.ieee.org/document/580977) by Fox, Burgard and Thrun
* [CHOMP: Covariant Hamiltonian optimization for motion planning](https://journals.sagepub.com/doi/pdf/10.1177/0278364913488805) by Zucker et al
* [Timed elastic bands](https://ieeexplore.ieee.org/document/6309484), [Optimizing TEBs using sparse model](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6698833), [TEBs with distinctive topologies](https://www.sciencedirect.com/science/article/pii/S0921889016300495), [TEBs for car-like robots](http://www.rst.e-technik.tu-dortmund.de/lehrstuhl/mitarbeiter/roesmann/2017_Roesmann_IROS.PDF) by Rösmann, Hoffmann and Bertram

### Trajectory generation for car-like robots
* [On curves of minimal length with a constraint on average curvature, and with prescribed initial and terminal positions and tangents](https://www.jstor.org/stable/2372560?origin=crossref&seq=1#metadata_info_tab_contents) by Dubins
* [Optimal paths for a car that goes both forwards and backwards](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.375.5860) by Reeds and Shepp
* [Optimal Trajectories for Nonholonomic Mobile Robots](https://homepages.laas.fr/jpl/promotion/chap3.pdf) by Soueres and  Boissonnat
* [Shortest paths synthesis for a car-like robot](https://ieeexplore.ieee.org/document/489204) by Soueres and Laumond
* [Smooth Local Path Planning for Autonomous Vehicles](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=100154) by Kanayama and Hartman
* [Trajectory Generation for Car-like robots using cubic curvature polynomials](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.637.356&rep=rep1&type=pdf) by Nagy and Kelly
* [Optimal Rough Terrain Trajectory Generation for Wheeled Mobile Robots](http://ri.cmu.edu/pub_files/pub4/howard_thomas_2007_1/howard_thomas_2007_1.pdf) by Howard and Kelly

### Planning for mobile robots
* [A Guide to Heuristic-based Path Planning](http://www.cs.cmu.edu/afs/cs.cmu.edu/Web/People/maxim/files/hsplanguide_icaps05ws.pdf) by Ferguson, Likhachev and Stentz
* [Planning continuous-curvature paths for car-like robots](https://ieeexplore.ieee.org/document/568985?arnumber=568985&tag=1) by Scheuer and Fraichard
* [Real Time Continuous Curvature Path Planner for an Autonomous Vehicle in an Urban Environment](https://cs.stanford.edu/people/davidknowles/knowles-surf06.pdf) by Knowles
* [Planning Long Dynamically Feasible Maneuvers for Autonomous Vehicles](https://journals.sagepub.com/doi/pdf/10.1177/0278364909340445) by Likhachev and Ferguson
* [Autonomous Driving in Structured and Unstructured Environments](https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/154341/eth-8091-01.pdf?sequence=1) by Kolski, Ferguson, Bellino and Siegwart
* [Toward Reliable Off Road Autonomous Vehicles Operating in Challenging Environments](https://journals.sagepub.com/doi/pdf/10.1177/0278364906065543) by Kelly et al.
* [Detection, Prediction, and Avoidance of Dynamic Obstacles in Urban
Environments](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=4621214) by Ferguson, Darms, Urmson and Kolski
* [Motion Planning in Urban Environments Part-I](http://www.cs.cmu.edu/~maxim/files/motplaninurbanenv_part1_iros08.pdf) and [Part II](https://www.cs.cmu.edu/~maxim/files/motplaninurbanenv_part2_iros08.pdf) by Ferguson, Howard and Likhachev
* [Real-Time Motion Planning With Applications to Autonomous Urban Driving](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5175292) by Kuwata, Teo, Fiore, Karaman, Frazzoli and How
* [Search-Based Path Planning with Homotopy Class Constraints](https://www.cs.cmu.edu/~maxim/files/planwithhomotopyconstraints_aaai10.pdf) by Bhattacharya, Kumar and Likhachev
* [Time-bounded Lattice for Efficient Planning in Dynamic Environments](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5152860) by Kushleyev and Likhachev
* [Path Planning for Autonomous Vehicles in Unknown Semi-structured Environments](https://journals.sagepub.com/doi/pdf/10.1177/0278364909359210) by Dolgov, Thrun, Montemerlo and Diebel
* [Focused Trajectory Planning for Autonomous On-Road Driving](https://ri.cmu.edu/pub_files/2013/6/IV2013-Tianyu.pdf) by Gu, Snider, Dolan and Lee
* [Spatiotemporal state lattices for fast trajectory planning in dynamic on-road driving scenarios](https://ieeexplore.ieee.org/document/5354448) by Ziegler and Stiller
* [Motion Planning for Autonomous Driving with a Conformal Spatiotemporal Lattice](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.225.4980&rep=rep1&type=pdf) by McNaughton, Urmson, Dolan and Lee
* [A Real-Time Motion Planner with Trajectory Optimization for Autonomous Vehicles](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6225063) by Xu, Wei, Dolan, Zhao and Zha
* [Toward Human-like Motion Planning in Urban Environments](https://ri.cmu.edu/pub_files/2014/6/IV2014-Tianyu.pdf) by Gu and Dolan
* [Motion Planning under Uncertainty for On-Road Autonomous Driving](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6907209) by Xu, Pan, Wei and Dolan
* [Tunable and Stable Real-Time Trajectory Planning for Urban Autonomous Driving](http://ri.cmu.edu/pub_files/2015/9/20150301-IROS-Tianyu.pdf) by Gu, Atwood, Dong, Dolan and Lee
* [On-Road Trajectory Planning for General Autonomous Driving with Enhanced Tunability](https://www.ri.cmu.edu/pub_files/2014/7/IAS-2014-Final.pdf) by Gu, Dolan and Lee
* [Runtime-bounded tunable motion planning for autonomous driving](https://ieeexplore.ieee.org/abstract/document/7535558) by Gu, Dolan and Lee
* [A Survey of Motion Planning and Control Techniques for Self-driving Urban Vehicles](https://arxiv.org/pdf/1604.07446.pdf) Paden, Cap, Yong, Yershov and Frazolli
* [Baidu Apollo EM Motion Planner](https://arxiv.org/abs/1807.08048) by Fan et al.