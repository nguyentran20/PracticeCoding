// The call() allows for a function/method belonging to one object to be assigned and called for different object
// functionName.call(this,arg1,arg2,...)
// When you invoke a function, the JS engine invokes the call(method) of that Function object
//
var greeting = "Hi";
var messenger = {
  greeting: "Hello"
};
function say(name) {
  console.log(this.greeting + '  ' + name);
}
say.call(messenger,'John');

// Chain constructor for an object
function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height,width, color) {
  Box.call(this,height, width);
  this.color = color;
}
