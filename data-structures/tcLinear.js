// 🔹 Core Linear Structures

// | Structure  | Access    | Insert | Delete    | Search | Peek | Traversal | Notes                       |
// | ---------- | --------- | ------ | --------- | ------ | ---- | --------- | --------------------------- |
// | **Array**  | O(1)      | O(n)   | O(n)      | O(n)   | —    | O(n)      | Insert/Delete at end = O(1) |
// | **String** | O(1)      | O(n)   | O(n)      | O(n)   | —    | O(n)      | Immutable in JS             |
// | **Object** | O(1)      | O(1)   | O(1)      | O(1)   | —    | O(n)      | Keys are strings/symbols    |
// | **Map**    | O(1)      | O(1)   | O(1)      | O(1)   | —    | O(n)      | Maintains order             |
// | **Set**    | —         | O(1)   | O(1)      | O(1)   | —    | O(n)      | No duplicates               |
// | **Stack**  | —         | O(1)   | O(1)      | O(n)   | O(1) | O(n)      | LIFO                        |
// | **Queue**  | O(n)/O(1) | O(1)   | O(n)/O(1) | O(n)   | O(1) | O(n)      | Pointer-based = O(1)        |
// | **Deque**  | O(1)      | O(1)   | O(1)      | O(n)   | O(1) | O(n)      | Used in monotonic queue     |

//----------------------------------------------------------------------------------------------------------------------------------------

// 🔹 Pointer-Based Structures

// | Structure       | Access | Insert | Delete | Search | Traversal | Notes                |
// | --------------- | ------ | ------ | ------ | ------ | --------- | -------------------- |
// | **Linked List** | O(n)   | O(1)   | O(1)   | O(n)   | O(n)      | No random access     |
// | **Doubly LL**   | O(n)   | O(1)   | O(1)   | O(n)   | O(n)      | Extra space for prev |

//----------------------------------------------------------------------------------------------------------------------------------------


// 🌳 Tree-Based Structures
// | Structure       | Access   | Insert   | Delete   | Search   | Traversal | Height   | Notes           |
// | --------------- | -------- | -------- | -------- | -------- | --------- | -------- | --------------- |
// | **Binary Tree** | O(n)     | O(n)     | O(n)     | O(n)     | O(n)      | O(n)     | No ordering     |
// | **BST (avg)**   | O(log n) | O(log n) | O(log n) | O(log n) | O(n)      | O(log n) | Skewed = O(n)   |
// | **Heap**        | O(1)     | O(log n) | O(log n) | O(n)     | O(n)      | O(log n) | Min/Max at root |

//----------------------------------------------------------------------------------------------------------------------------------------

// 🌐 Graph

// | Structure              | Access | Insert | Delete | Search   | Traversal | Notes        |
// | ---------------------- | ------ | ------ | ------ | -------- | --------- | ------------ |
// | **Graph (Adj List)**   | O(1)   | O(1)   | O(1)   | O(V + E) | O(V + E)  | DFS/BFS      |
// | **Graph (Adj Matrix)** | O(1)   | O(1)   | O(1)   | O(V²)    | O(V²)     | Dense graphs |



//----------------------------------------------------------------------------------------------------------------------------------------

// 🔥 Special Interview Patterns

// | Pattern             | Access | Insert | Delete | Query | Notes                           |
// | ------------------- | ------ | ------ | ------ | ----- | ------------------------------- |
// | **Monotonic Stack** | —      | O(1)   | O(1)   | O(1)  | Each element pushed/popped once |
// | **Monotonic Queue** | O(1)   | O(1)   | O(1)   | O(1)  | Sliding window max/min          |
// | **Two Pointers**    | O(1)   | —      | —      | O(n)  | Sorted arrays                   |
// | **Sliding Window**  | O(1)   | O(1)   | O(1)   | O(n)  | Fixed/variable window           |
