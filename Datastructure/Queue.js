class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty())
      return "Invalid";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  printQueue() {
    var str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  isEmpty() {
    return this.items.length == 0;
  }

}

var queue = new Queue();
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.printQueue());
