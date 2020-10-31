// The only difference between call and apply is that call requires the arguments to be passed in one-by-one, and apply takes the arguments as an array.
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley'
}

function summary() {
  console.log(`${this.title} was written by ${this.author}`);
}

summary.call(book);
summary.apply(book);
