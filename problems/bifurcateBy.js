// Split values into two groups based on the given filtering functions

const bifurcateBy = (arr, fn) => {
  return arr.reduce(
    (acc, value) => {
      acc[fn(value) ? 0 : 1].push(value);
      return acc;
    },
    [[], []]
  );
};

console.log(bifurcateBy(["beep", "boop", "foo", "bar"], (x) => x[0] === "b"));
