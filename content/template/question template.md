## 4. 待解决的问题 (Questions & Blocks)

### [Question #1] 题目/概念的简短描述
* **上下文来源 (Context):** Pressley 剑桥版第 XX 页，关于 Theorem 9.X（或者 JJ 教授第 X 讲关于克里斯托费尔符号的计算）。
* **我的理解/我的尝试 (What I've tried):** 我试图用拉格朗日方法（变分法）去推导圆柱面度量下的测地线。根据 $L = \frac{1}{2}(\dot{r}^2 + r^2\dot{\theta}^2 + \dot{z}^2)$，我对 $\theta$ 求偏导，得到了守恒量 $r^2\dot{\theta} = C$。
* **核心卡壳点 (The Blocker):** 但是，当我试图用传统的微分几何公式（通过第一基本形式的导数直接算 $\Gamma^k_{ij}$）去交叉验证时，我算出来的 $\Gamma^1_{22}$ 和拉格朗日法得到的方程里的系数多了一个负号（或者不匹配）。
* **具体疑惑 (The Specific Question):** 这究竟是因为我在计算克里斯托费尔符号时忽略了度量矩阵逆矩阵 $g^{kl}$ 的符号，还是因为在拉格朗日变分中，弧长参数（Arc-length parameter $s$）和普通参数 $t$ 的选择导致了本质差异？
* 