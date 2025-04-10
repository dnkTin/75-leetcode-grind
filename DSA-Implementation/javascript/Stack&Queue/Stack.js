/**
 * Stack is a data structure that follows the Last In First Out (LIFO) principle.
 * It has two main operations: push and pop.
 * When you push an item, you add it to the top of the stack.
 * When you pop an item, you remove the item from the top of
 * the stack.
 * 
 */
import { LinkedList } from "../LinkedList/LinkedList";

export class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare this to Queue
    // implementation that is based on Array.
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    // The stack is empty in case if its linked list doesn't have a head.
    return !this.linkedList.head;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * Add a new element to the top of the stack (the head of the linked list).
   * This element will be processed first.
   * @param {*} value 
   */
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   * Remove the element from the top of the stack (the head of the linked list).
   * If the stack is empty, return null.
   * @returns 
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @param {function} callback
   * @returns 
   */
  toArray() {
    return this.linkedList.toArray();
  }

  /**
   * @param {function} callback
   * @returns 
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}