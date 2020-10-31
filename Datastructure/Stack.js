class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printStack() {
    let s = "";
    for (let i = 0; i < this.items.length; i++) {
      s += this.items[i] + " ";
    }
    return s;
  }
}

var stack = new Stack();
console.log(stack);
// testing whether Stack is empty, pop on an empty stack
console.log(stack.isEmpty());
console.log(stack.pop());
// Adding Element to the stack
stack.push(10);
stack.push(120);
stack.push(30);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());
