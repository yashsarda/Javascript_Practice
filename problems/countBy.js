// Group the elements of an array based on the given function and returns the count of
// elements in each group

const countBy = (arr, fn) => {
  return arr.map(fn).reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(
  countBy([{ count: 5 }, { count: 10 }, { count: 5 }], (x) => x.count)
);
