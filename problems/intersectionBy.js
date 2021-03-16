// Returns the element present in both array after applying the function to each element of
// each array

const interesctionBy = (a, b, fn) => {
  b = new Set(b.map(fn));
  return [...new Set(a)].map(fn).filter((element) => b.has(element));
};

console.log(interesctionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
