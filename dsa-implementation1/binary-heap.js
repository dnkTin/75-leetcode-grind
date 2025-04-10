// Todo: apply test for this heap


/**
 * 
 * Binary heap: Min heap & Max Heap
 * Heap is represented by an array
 * 
 * 
 * Arr[(i-1)/2] -> return parent node
 * Arr[(2i + 1)] -> return left child node
 * Arr[2i + 2] -> return right child  node
 * 
 * Applications of heap:
 * 1. Heap sort
 * 2. Priority QUEUE
 * 3. Disktra shortest path
 * 4. K'th largest elements in array
 */

// Implement min heap
// standard operations of heap
class MinHeap {
  constructor () {
    this.arr = []
  }

  left(i) {
    return 2 * i + 1
  }

  right(i) {
    return 2 * i + 2
  }

  parent(i) {
    return Math.floor((i-1) / 2)
  }

  getMin() {
    return this.arr[0]
  }

  insert(k) {
    let arr = this.arr
    arr.push(k)

    // fix the min heap property if it is violated
    let i = arr.length - 1;
    while (i > 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i)
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p
    }
  }

  // Decreases value of key at in 'i' to new_val
  // it is assumed that new_val is smaller than arr[i]
  decreaseKey(i, new_val) {
    let arr = this.arr;
    arr[i] = new_val

    while(i !== 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i)
      [arr[i], arr[p]] = [arr[p], arr[i]]
      i = p
    }
  }

  // method to remove minimum element (or root)
  extractMin() {
    let arr = this.arr;
    if (arr.length == 1) {
      return arr.pop()
    }

    // store the minimum value, and remove it from heap
    let res = arr[0]
    arr[0] = arr[arr.length - 1]
    arr.pop()
    this.MinHeapify(0)
    return res
  }


  // this function delete key at tindex i. It first reduced value to minus infinite, then calls extractMin()

  deleteKey(i) {
    this.decreaseKey(i, this.arr[0] -1);
    this.extractMin()
  }

  // A recursive method to heapify a subtree with the root at given index
   // This method assumes that the subtrees are already heapified
  MinHeapify(i) {
    let arr = this.arr
    let n = arr.length

    if (n === 1) {
      return
    }

    let l = this.left(i)
    let r = this.right(i)
    let smallest = i
    if (l < n && arr[l] < arr[n]) {
      smallest = l
    }
    if (r < n && arr[r] < arr[smallest]) {
      smallest = r
    }
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
      this.MinHeapify(smallest)
    }
  }
}