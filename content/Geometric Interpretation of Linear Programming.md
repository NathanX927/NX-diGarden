

## 1. Constraints vs. Objective Function

In Linear Programming, we should always separate two questions:

1. **Constraints:** Where are we allowed to be?
    
2. **Objective function:** Which feasible point gives the best value?
    

The constraints determine the **feasible region**, while the objective function determines the **optimal solution**.

A feasible solution satisfies every constraint, but it is not necessarily optimal.

## 2. Line, Half-plane, and Line Segment

Consider the constraint:

$$  
x+2y=10  
$$

### Equality: Line

An equality represents a line in (\mathbb R^2).

$$  
x+2y=10  
$$

Only points exactly on the line satisfy the constraint.

### Inequality: Half-plane

An inequality represents a half-plane in (\mathbb R^2).

$$  
x+2y\leq10  
$$

The feasible side includes the boundary line and all points below it.

A linear inequality similarly defines a half-space in higher dimensions.

### Equality + Nonnegativity: Line Segment

Consider:

$$  
x+2y=10,\qquad x,y\geq0  
$$

The nonnegativity constraints restrict us to the first quadrant.

Therefore, the feasible region is the line segment connecting:

$$  
(0,5)\quad\text{and}\quad(10,0)  
$$

**Key insight:** A feasible region is the intersection of all constraints, not necessarily a two-dimensional area.

## 3. Feasible Region vs. Optimal Solution

Consider the LP:

$$  
\begin{aligned}  
\min\quad &z=x-y\  
\text{s.t.}\quad &x+2y=10\  
&x,y\geq0  
\end{aligned}  
$$

There are infinitely many feasible points along the line segment.

However, there is exactly one optimal solution:

$$  
(x^_,y^_)=(0,5),\qquad z^*=-5  
$$

**Important:** Infinitely many feasible solutions do not imply infinitely many optimal solutions.

## 4. Moving the Objective Line

For a linear objective function:

$$  
z=ax+by  
$$

Fixing (z) gives a level line:

$$  
y=-\frac{a}{b}x+\frac{z}{b},\qquad b\ne0  
$$

Its slope is:

$$  
-\frac ab  
$$

Changing (z) moves the line in parallel without changing its slope.

### Which direction should we move?

The coefficient vector is:

$$  
c=(a,b)  
$$

- (c) points toward increasing objective values.
    
- (-c) points toward decreasing objective values.
    

For our example:

$$  
z=x-y,\qquad c=(1,-1)  
$$

Since we minimize, the improving direction is:

$$  
-c=(-1,1)  
$$

That means moving the objective line **up and left**.

The direction is determined by the objective coefficients, not by distance from the origin.

### What does "last touch" mean?

When minimizing, move the objective line toward decreasing values until reaching the smallest level that still intersects the feasible region.

For a bounded feasible region, this is the last contact before the line moves completely away from the feasible region.

If the minimum is not attained, there is no final touching point.

## 5. Special Cases of Linear Programming

|Case|Geometric meaning|How to construct it|
|---|---|---|
|Infeasible|Empty feasible region|Introduce contradictory constraints|
|Unbounded objective|Objective improves without limit|Allow an improving feasible direction|
|One feasible solution|Feasible region is a single point|Intersect constraints at exactly one point|
|Infinitely many feasible solutions|Region contains a line segment or a higher-dimensional set|Allow a continuous set of feasible points|
|Infinitely many optimal solutions|Optimal level line overlaps a feasible segment|Make the objective constant along an optimal edge|

### A. Infeasible LP

$$  
x+2y=10,\qquad x+2y=12  
$$

No point satisfies both constraints.

The feasible region is empty.

### B. Unbounded LP

$$  
\begin{aligned}  
\min\quad &x-y\  
\text{s.t.}\quad &x+2y\geq10\  
&x,y\geq0  
\end{aligned}  
$$

Choose (x=0) and let (y\to\infty).

Then:

$$  
z=-y\to-\infty  
$$

**Important:** An unbounded feasible region does not always imply an unbounded objective.

### C. Exactly One Feasible Solution

$$  
\begin{aligned}  
\min\quad &x-y\  
\text{s.t.}\quad &x+2y=10\  
&x=4\  
&x,y\geq0  
\end{aligned}  
$$

The two equalities intersect at:

$$  
(x,y)=(4,3)  
$$

Hence:

$$  
F={(4,3)}  
$$

The objective value is:

$$  
z^*=4-3=1  
$$

Because this is the only feasible point, it must also be the unique optimal solution.

Geometrically, only one objective level line can pass through the feasible region.

### D. Infinitely Many Optimal Solutions

Consider:

$$  
\begin{aligned}  
\min\quad &x+2y\  
\text{s.t.}\quad &x+2y=10\  
&x,y\geq0  
\end{aligned}  
$$

Every feasible point satisfies:

$$  
z=x+2y=10  
$$

Therefore, every feasible point is optimal.

The objective level line overlaps the entire feasible segment.

## 6. A Geometric Workflow for LP Problems

**Step 1 — Draw the constraints.**

For each constraint, determine whether it represents a line or half-plane.

**Step 2 — Find the feasible region.**

Take the intersection of all constraints.

Check whether it is empty, bounded, unbounded, a segment, or a single point.

**Step 3 — Draw an objective level line.**

Set (c^Tx=z), where (z) is a constant.

**Step 4 — Determine the improving direction.**

For minimization, move opposite to (c).

For maximization, move in the direction of (c).

**Step 5 — Find the optimal value.**

Move the objective line while maintaining contact with the feasible region, toward better objective values.

If there is a final contact, the corresponding feasible points are optimal.

If the objective improves indefinitely, the LP is unbounded.

---

## 7. Key Takeaways

> [!important] Fundamental distinction  
> **Feasibility is determined by constraints. Optimality is determined by the objective function over the feasible region.**

> [!tip] Geometric intuition  
> The objective line is not moving based on its distance from the origin. Its direction is determined by the objective coefficient vector (c).

> [!note] A useful mental model  
> Constraints define where I can go. The objective tells me where I want to go. The optimal solution is the best place I am allowed to reach.