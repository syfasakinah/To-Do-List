//*
// sebuah wadah untuk menyimpan banyak Data
// Array menyimpan ordered value yang bisa diakses menggunakan index-nya
// Bisa menyimpan berbagai macam data termasuk Object
// kita bisa menyimpan berbagai macam data dengan value yang sama 
// bisa diakses dengan dinamis

const array = [1, 2, 3, 4, 5, { name: "John"}, 5, 1, [1, 2, 3]]

//STACK
class Stack {
    #maxSize;
    #container = [];
  
    constructor(maxSize = 10) {
      this.#maxSize = maxSize;
    }
  
    #isFull() {
      return this.#container.length === this.#maxSize;
    }
  
    #Empty() {
      return this.#container.length === 0;
    }
  
    push(element) {
      if (this.#isFull()) {
        console.log("Stack overflow!");
        return;
      }
  
      this.#container.push(element);
    }
  
    pop() {
      if (this.#Empty()) {
        console.log("Stack underflow!");
        return;
      }
  
      this.#container.pop();
    }
  
    getElements() {
      return this.#container;
    }
  }
  
  // * Implementation
  const stack = new Stack(5);
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6); // Stack overflow!
  
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop(); // Stack underflow!
  
  console.log(stack.getElements()); // []


// QUEUE
class Queue {
    #container = [];
  
    enqueue(element) {
      this.#container.push(element);
    }
  
    dequeue() {
      this.#container.shift();
    }
  
    getElements() {
      return this.#container;
    }
  }
  
  // * Implementation
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.getElements()); // Output: [10, 20, 30]
  
  queue.dequeue();
  
  console.log(queue.getElements()); // Output: [20, 30]

// LINKED LIST

class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      let node = new Node(element);
      let current;
  
      if (this.head === null) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size = this.size + 1;
    }
  
    printList() {
      let current = this.head;
  
      while (current) {
        console.log(current.element);
        current = current.next;
      }
    }
  
    insertAt(element, index) {
      if (index < 0 || index > this.size) {
        return console.log("Please enter a valid index!");
      } else {
        const node = new Node(element);
        let current = this.head;
  
        if (index === 0) {
          node.next = this.head;
          this.head = node;
        } else {
          current = this.head;
          let prev;
  
          for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
          }
  
          prev.next = node;
          node.next = current;
        }
  
        this.size = this.size + 1;
      }
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return console.log("Please enter a valid index!");
      } else {
        let current = this.head;
        let prev = current;
  
        if (index === 0) {
          this.head = current.next;
        } else {
          for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
          }
  
          prev.next = current.next;
        }
  
        this.size = this.size - 1;
        return current.element;
      }
    }
  
    removeElement(element) {
      let current = this.head;
      let prev = null;
  
      while (current !== null) {
        if (current.element === element) {
          if (prev === null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
  
          this.size = this.size - 1;
          return current.element;
        }
  
        prev = current;
        current = current.next;
      }
  
      return null;
    }
  
    indexOf(element) {
      let count = 0;
      let current = this.head;
  
      while (current !== null) {
        if (current.element === element) {
          return count;
        }
  
        count = count + 1;
        current = current.next;
      }
  
      return -1;
    }
  }
  
  // * Implementation
  const linkedList = new LinkedList();
  
  console.log(linkedList); // Output: LinkedList { head: null, size: 0 }
  
  linkedList.add("A");
  linkedList.add("B");
  linkedList.add("C");
  linkedList.add("D");
  
  console.log(linkedList); // Output: LinkedList { head: Node { element: 'A', next: Node { element: 'B', next: Node { element: 'C', next: Node { element: 'D', next: null } } } }, size: 4 }
  
  linkedList.insertAt("E", 2);
  linkedList.removeAt(1);
  
  console.log(linkedList.indexOf("D")); // Output: 3
  
  linkedList.printList(); // Output: A E C D