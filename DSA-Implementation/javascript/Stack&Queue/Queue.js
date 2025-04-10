import { LinkedList } from "../LinkedList/LinkedList";
/**
 * Queue is a data structure that follows the First In First Out (FIFO) principle.
 * It has two main operations: enqueue and dequeue. When you enqueue an item, you add
 * it to the end of the queue. When you dequeue an item, you remove the item from the
 * front of the queue.
 */
export class Queue {
  constructor() {
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare this to Stack
    // implementation that is based on Array.
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    // The queue is empty in case if its linked list doesn't have a head.
    return !this.linkedList.head;
  }
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value 
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * Remove the element from the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @returns 
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString(callback);
  }
}