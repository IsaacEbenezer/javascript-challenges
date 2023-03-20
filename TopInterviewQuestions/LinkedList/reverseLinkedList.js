// Reversing a linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

// Insert element at Head
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

// Reverse the Linked List
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

// Print the Linked List
  print() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

// Output

const reversedList = new LinkedList();

reversedList.insertFirst(3);
reversedList.insertFirst(2);
reversedList.insertFirst(1);

console.log("Original list:");
reversedList.print();

reversedList.reverse();

console.log("Reversed list:");
reversedList.print();
