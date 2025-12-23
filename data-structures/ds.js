/****************************************************
 * DATA STRUCTURES SYNTAX + OPERATIONS (JS)
 * One function per Data Structure
 ****************************************************/

/* ==================================================
   1. ARRAY
   ================================================== */

function arraySyntax() {
  let arr = [1, 2, 3];

  // Access — O(1)
  let x = arr[0];

  // Insert
  arr.push(4);       // end — O(1)
  arr.unshift(0);    // start — O(n)

  // Delete
  arr.pop();         // end — O(1)
  arr.shift();       // start — O(n)

  // Slice (non-mutating) — O(n)
  let sub = arr.slice(1, 3);

  // Splice (mutating) — O(n)
  arr.splice(1, 1);  // remove 1 element at index 1

  // Iteration — O(n)
  for (let i = 0; i < arr.length; i++) {}
  for (let val of arr) {}

  // Higher-order methods — O(n)
  arr.map(x => x * 2);
  arr.filter(x => x > 1);
  arr.reduce((sum, x) => sum + x, 0);

  // Search — O(n)
  arr.indexOf(2);
  arr.includes(3);

  // Sort — O(n log n)
  arr.sort((a, b) => a - b);

  return arr;
}

/* ==================================================
   2. STRING
   ================================================== */

function stringSyntax() {
  let str = "hello";

  // Length — O(1)
  str.length;

  // Access — O(1)
  str[0];

  // Substring — O(n)
  str.substring(1, 4);

  // Split / Join — O(n)
  let chars = str.split("");
  chars.join("");

  // Convert string → array → string
  let reversed = [...str].reverse().join("");

  // Check palindrome — O(n)
  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) break;
    l++; r--;
  }

  return reversed;
}

/* ==================================================
   3. OBJECT (HASH MAP)
   ================================================== */

function objectSyntax() {
  let obj = {};

  // Insert / Update — O(1)
  obj["a"] = 1;
  obj.b = 2;

  // Access — O(1)
  let x = obj["a"];

  // Delete — O(1)
  delete obj.b;

  // Check key — O(1)
  "a" in obj;

  // Iteration — O(n)
  for (let key in obj) {}

  // Keys / Values / Entries — O(n)
  Object.keys(obj);
  Object.values(obj);
  Object.entries(obj);

  return obj;
}

/* ==================================================
   4. MAP
   ================================================== */

function mapSyntax() {
  let map = new Map();

  // Insert — O(1)
  map.set("a", 1);
  map.set(1, "number key");

  // Access — O(1)
  map.get("a");

  // Check — O(1)
  map.has("a");

  // Delete — O(1)
  map.delete("a");

  // Size — O(1)
  map.size;

  // Iteration — O(n)
  for (let [k, v] of map) {}

  return map;
}

/* ==================================================
   5. SET
   ================================================== */

function setSyntax() {
  let set = new Set();

  // Add — O(1)
  set.add(1);
  set.add(2);

  // Check — O(1)
  set.has(1);

  // Delete — O(1)
  set.delete(2);

  // Convert array → unique array — O(n)
  let unique = [...new Set([1, 2, 2, 3])];

  // Iteration — O(n)
  for (let val of set) {}

  return set;
}

/* ==================================================
   6. STACK (LIFO)
   ================================================== */

function stackSyntax() {
  let stack = [];

  // Push — O(1)
  stack.push(1);
  stack.push(2);

  // Pop — O(1)
  stack.pop();

  // Peek — O(1)
  stack[stack.length - 1];

  // Size — O(1)
  stack.length;

  return stack;
}

/* ==================================================
   7. QUEUE (FIFO)
   ================================================== */

function queueSyntax() {
  let queue = [];
  let start = 0;

  // Enqueue — O(1)
  queue.push(1);
  queue.push(2);

  // Dequeue — O(1) (using pointer)
  let first = queue[start++];

  // Peek — O(1)
  queue[start];

  return queue;
}

/* ==================================================
   8. LINKED LIST
   ================================================== */

function linkedListSyntax() {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  // Create
  let head = new Node(1);
  head.next = new Node(2);

  // Insert at head — O(1)
  let newHead = new Node(0);
  newHead.next = head;
  head = newHead;

  // Traverse — O(n)
  let curr = head;
  while (curr) {
    curr = curr.next;
  }

  return head;
}

/* ==================================================
   9. TREE (BINARY TREE)
   ================================================== */

function treeSyntax() {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  // DFS — O(n)
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
  }

  // BFS — O(n)
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
  }

  return root;
}

/* ==================================================
   10. GRAPH
   ================================================== */

function graphSyntax() {
  let graph = {
    0: [1, 2],
    1: [2],
    2: [0]
  };

  // DFS — O(V + E)
  function dfs(node, visited = new Set()) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let nei of graph[node]) dfs(nei, visited);
  }

  // BFS — O(V + E)
  let queue = [0];
  let visited = new Set([0]);

  while (queue.length) {
    let node = queue.shift();
    for (let nei of graph[node]) {
      if (!visited.has(nei)) {
        visited.add(nei);
        queue.push(nei);
      }
    }
  }

  return graph;
}

/* ==================================================
   11. HEAP / PRIORITY QUEUE
   ================================================== */

function heapSyntax() {
  class MinHeap {
    constructor() {
      this.data = [];
    }

    // Insert — O(log n)
    push(val) {
      this.data.push(val);
      this.bubbleUp(this.data.length - 1);
    }

    // Remove min — O(log n)
    pop() {
      if (this.data.length === 1) return this.data.pop();

      const min = this.data[0];
      this.data[0] = this.data.pop();
      this.bubbleDown(0);
      return min;
    }

    // O(log n)
    bubbleUp(idx) {
      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (this.data[parent] <= this.data[idx]) break;
        [this.data[parent], this.data[idx]] =
          [this.data[idx], this.data[parent]];
        idx = parent;
      }
    }

    // O(log n)
    bubbleDown(idx) {
      let n = this.data.length;
      while (true) {
        let smallest = idx;
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;

        if (left < n && this.data[left] < this.data[smallest])
          smallest = left;
        if (right < n && this.data[right] < this.data[smallest])
          smallest = right;

        if (smallest === idx) break;

        [this.data[idx], this.data[smallest]] =
          [this.data[smallest], this.data[idx]];
        idx = smallest;
      }
    }

    // Peek — O(1)
    peek() {
      return this.data[0];
    }
  }

  let heap = new MinHeap();
  heap.push(3);
  heap.push(1);
  heap.push(2);
  heap.pop();

  return heap;
}

/* ==================================================
   12. MONOTONIC STACK
   ================================================== */

function monotonicStackSyntax() {
  let stack = [];

  let nums = [2, 1, 2, 4, 3];

  // Monotonic Increasing Stack
  // Time: O(n)
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] > nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }

  // Stack is increasing
  return stack;
}

/* ==================================================
   13. MONOTONIC QUEUE (SLIDING WINDOW MAX)
   ================================================== */

function monotonicQueueSyntax() {
  let deque = []; // stores indices
  let nums = [1, 3, -1, -3, 5, 3, 6, 7];
  let k = 3;
  let result = [];

  // Time: O(n)
  for (let i = 0; i < nums.length; i++) {

    // Remove out-of-window indices
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Maintain decreasing order
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Window formed
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

