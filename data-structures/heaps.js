import { Heap } from "heap-js";

var findKthLargest = function (nums, k) {
	let minHeap = new Heap();

	for (let num of nums) {
		minHeap.push(num);

		if (minHeap.size() <= k)
			if (minHeap.size() > k) {
				minHeap.pop();
			}
	}

	return minHeap.peek();
};

// -----------------------------top k frequent ele---------------------------------------------
const topKFrequentEle = (nums, k) => {
	// add elements to map
	let map = new Map();

	for (let num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	console.log(map);

	//add these mappings to heap
	// we need top k remaining at te end, so we can afford to loose low freq ele, so have a min heap

	let minHeap = new Heap((a, b) => a[1] - b[1]);

	for (let freq of map.entries()) {
		minHeap.push(freq);

		if (minHeap.size() > k) {
			minHeap.pop();
		}
	}
	console.log(minHeap.heapArray);
	return minHeap.heapArray.map((x) => x[0]);
};

// ----------------find K closest ---------------------------

var kClosest = function (points, k) {
	// calculate distance for each points from origin
	// x^2 + y^2, we can ignore sqrt as we just wat to comare,
	// add all these (distances, idx) to MaxHeap, at last we have well have k, smallest

	let maxHeap = new Heap((a, b) => a[0] - b[0]);

	for (let i = 0; i < points.length; i++) {
		let [x, y] = points[i];
		let distFromOrigin = x * x + y * y;

		maxHeap.push([distFromOrigin, i]);

		if (maxHeap.size() > k) {
			maxHeap.pop();
		}
	}

	return maxHeap.heapArray.map((x) => points[x[1]]);
};

const connectSticks = (sticks) => {
	let minHeap = new Heap((a, b) => a - b);
	let cost = 0;

	for (let s of sticks) {
		minHeap.push(s);
	}

	while (minHeap.size() > 1) {
		let x = minHeap.pop();
		let y = minHeap.pop();

		let sum = x + y;

		cost += sum;

		minHeap.push(sum);
	}

	return cost;
};

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map();
	}

	get(key) {
		if (!this.cache.get(key)) return -1;

		const val = this.cache.get(key);
		this.cache.delete(key);

		this.cache.set(key, val);
		return val;
	}

	put(key, value) {
		if (this.cache.has(key)) {
			this.cache.delete(key);
		}

		this.cache.set(key, value);

		if (this.cache.size > this.capacity) {
			//remove the first entry
			let lruKey = this.cache.keys().next().value;

			this.cache.delete(lruKey);
		}
	}
}

class MinHeap {
	constructor() {
		this.heap = [];
	}
	push(val) {
		this.heap.push(val);
		this.bubbleUp();
	}
	pop() {
		const max = this.heap[0];
		const end = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = end;
			this.bubbleDown();
		}
		return max;
	}
	peek() {
		return this.heap[0];
	}
	bubbleUp() {
		let idx = this.heap.length - 1;
		const element = this.heap[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.heap[parentIdx];
			if (element >= parent) break;
			this.heap[parentIdx] = element;
			this.heap[idx] = parent;
			idx = parentIdx;
		}
	}
	bubbleDown() {
		let idx = 0;
		const length = this.heap.length;
		const element = this.heap[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIdx < length) {
				leftChild = this.heap[leftChildIdx];
				if (leftChild < element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.heap[rightChildIdx];
				if (
					(swap === null && rightChild < element) ||
					(swap !== null && rightChild < leftChild)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.heap[idx] = this.heap[swap];
			this.heap[swap] = element;
			idx = swap;
		}
	}
}
