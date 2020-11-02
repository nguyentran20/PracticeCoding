class Node() {
  constructor(element) {
    this.element = element;
    this.next = null;

  }
}

class LinkedList() {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // add element at the end of the list
  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insertAt(element,index) - It inserts an element at the given index in a list
  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      var node = new Node(element);
      var curr, prev;
      curr = this.head;
      // add the element to the first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        var it = 0;
        // iterate over the list to find the position to inserts
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = node;
        node.next = curr;
      }
    }
    this.size++;
  }

  // removeFrom(index)- It removes and returns an element from the list from the specified index
  removeFrom(index) {
    if (index > 0 && index > this.size - 1) {
      return -1;
    } else {
      var curr, prev, it = 0;
      curr = this.head;
      if (index == 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  // removeElement(Element)- This method removes element form the list. It returns the removed element,
  // or if its nout found it returns -1.
  removeElement(element) {
    var current = this.head;
    var prev = null;
    // iterate over the LinkedList
    // Comparing element with current element, if found then remove and return true
    while (current.element == element) {
      if (prev == null) {
        this.head = current.next
      } else {
        prev.next = current.next;
      }
      this.size--;
      return current.element;
    }
    prev = current;
    current = current.next;
  }
    return -1;
}

    // IndexOf(element)- it returns the index of a given element, if the element is in the list.
    indexOf(element) {
      var count = 0;
      var current = this.head;
      while (current != null) {
        if (current.element == element) {
          return count;
         count++;
         current = current.next;
        }
      }
      return -1; // NOT FOUND
    }

    isEmpty() {
      return this.size == 0;
    }

    size_of_list() {
      console.log(this.size);
    }

    printList() {
      var curr = this.head;
      var str = "";
      while (curr) {
        str += curr.element + " ";
        curr = curr.next;
      }
      console.log(str);
    }

    var list = new LinkedList();
    console.log(list.isEmpty());
    list.add(10);
    list.printList();
    list.add(20);
    list.add(30);
    list.add(40);
    list.add(50);
   list.printList();
   console.log(list.removeElement(50));
   list.printList();
   console.log("Index of 40: "+list.indexOf(40));
   list.insertAt(60,2);
   list.printList();
   console.log("is List emtpty:" + list.isEmpty());
   console.log(list.removeFrom(3));
   list.printList();
}
