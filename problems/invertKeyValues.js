// Invert the key- value pairs of the object without mutating it.

const invertKeyValue = (obj, fn) => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = fn ? fn(obj[key]) : obj[key];
    acc[value] = acc[value] || [];
    acc[value].push(key);
    return acc;
  }, {});
};

const obj1 = {
  a: 1,
  b: 2,
  c: 1,
};

const obj2 = {
  a: 1,
  b: 2,
  c: 1,
};

console.log(invertKeyValue(obj1));
console.log(invertKeyValue(obj2, (value) => "group" + value));
