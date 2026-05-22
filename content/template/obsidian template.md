# Reading Log: Pressley Chapter 9 - Geodesics

## 1. 核心概念重述 (Core Concept Synthesis)
> 用自己的话，用一两句话总结这一章到底在干嘛。
* **本质：** 测地线是平面上“直线”概念在弯曲表面上的推广。这一章完成了两件事：第一是通过测地曲率（Geodesic Curvature $k_g = 0$）定义了测地线；第二是通过变分法（Variational Principle）证明了测地线是两点之间“能量”或“长度”泛函的临界点。

## 2. 关键公式与定理卡片 (The Toolbox)
> 只摘录最核心的、以后推导（如史瓦西度规）必须要查阅的骨干公式。

* **测地线方程 (内蕴形式):**
  设 $\gamma(t) = (u(t), v(t))$ 为流形上的曲线，则它满足：
  $$\frac{d^2u}{dt^2} + \Gamma^1_{11}\left(\frac{du}{dt}\right)^2 + 2\Gamma^1_{12}\frac{du}{dt}\frac{dv}{dt} + \Gamma^1_{22}\left(\frac{dv}{dt}\right)^2 = 0$$
  $$\frac{d^2v}{dt^2} + \Gamma^2_{11}\left(\frac{du}{dt}\right)^2 + 2\Gamma^2_{12}\frac{du}{dt}\frac{dv}{dt} + \Gamma^2_{22}\left(\frac{dv}{dt}\right)^2 = 0$$
  *(注：克里斯托费尔符号 $\Gamma^k_{ij}$ 由度量第一基本形式 $E, F, G$ 及其偏导数决定。)*

* **克莱罗定理 (Clairaut's Theorem):**
  在旋转曲面上，若一条曲线是测地线，则沿该曲线满足：
  $$\rho \sin \psi = \text{const}$$
  *(注：$\rho$ 是点到旋转轴的距离，$\psi$ 是测地线与经线的夹角。这对于手算旋转曲面的测地线是极强悍的捷径。)*

## 3. 补齐的证明细节 (Filled Gaps)
> 书上可能跳过了某一步代数计算，把你手推补齐的代码或公式写在这里。
* **书上定理 9.3 的证明跳步：** 书上说由第一变分公式直接可得 Euler-Lagrange 方程。我手推补齐了分部积分（Integration by Parts）的边界项处理：
  $$\int_{t_0}^{t_1} \left( \frac{\partial L}{\partial x} \delta x + \frac{\partial L}{\partial \dot{x}} \frac{d}{dt}(\delta x) \right) dt = \left[ \frac{\partial L}{\partial \dot{x}} \delta x \right]_{t_0}^{t_1} + \int_{t_0}^{t_1} \left( \frac{\partial L}{\partial x} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) \right) \delta x dt$$
  因为变分在端点固定，$\delta x(t_0) = \delta x(t_1) = 0$，所以边界项消失，实分析的根本引理（Fundamental Lemma of Calculus of Variations）在此处生效。
* 