const differenceBy = (a, b, fn) => {
  const b_set = new Set(b.map(fn));
  return a.map(fn).filter((element) => !b_set.has(element));
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
