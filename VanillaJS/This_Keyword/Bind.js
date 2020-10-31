// Sometimes, you might need to use a method over and over with the this context of another object, and in that case you could use the bind method to create a brand new function with an explicitly bound this.

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

const braveNewWorldSummary = summary.bind(book);
braveNewWorldSummary();

// it will always return the original this value bound to it. Attempting to bind a new this context to it will fail

const book2 = {
  title: '80 Days',
  author: 'George Warm'
}

braveNewWorldSummary.bind(book2);
braveNewWorldSummary();
