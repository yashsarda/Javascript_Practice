// Applies a function against an accumulator and each element in the array (from left to right),
// returning an array of successively reduced values.

const reduceSuccessive = (arr, fn, acc) => {
  return arr.reduce(
    (res, value) => {
      res.push(fn(res.slice(-1)[0], value));
      return res;
    },
    [acc]
  );
};

console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));
