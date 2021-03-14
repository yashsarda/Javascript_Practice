// Modifies an array by remviong elements for which the the given function returns false

const remove = (arr, fn) => {
  return arr.filter(fn);
};

remove([1, 2, 3, 4], (n) => n % 2 === 0);
H