// Returns the most frequent element in the array.

const mostFrequent = (arr) => {
  const frequencies = arr.reduce((acc, value) => {
    acc[value] = value in acc ? acc[value] + 1 : 1;
    return acc;
  }, {});

  return Object.keys(frequencies).reduce((acc, value) => {
    acc = acc == "" || frequencies[value] > frequencies[acc] ? value : acc;
    return acc;
  }, "");
};

console.log(mostFrequent(["a", "b", "a", "c", "a", "a", "b"]));
