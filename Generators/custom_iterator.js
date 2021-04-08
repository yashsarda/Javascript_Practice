var numbers = {
  *[Symbol.iterator]({ start = 1, end = 100, increment = 1 } = {}) {
    for (var i = start; i <= end; i += increment) {
      yield i;
    }
  },
};

for (let num of numbers) {
  console.log(num);
}

for (let num of numbers[Symbol.iterator]({
  start: 10,
  end: 100,
  increment: 4,
})) {
  console.log(num);
}
