// Group the elements of the array based on the given function.

const groupBy = (arr, fn) => {
  return arr.map(fn).reduce((acc, item, index) => {
    acc[item] = (acc[item] || []).concat(arr[index]);
    return acc;
  }, {});
};

console.log(groupBy([4.1, 6.3, 4.2], Math.floor));
