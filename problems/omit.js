// Omit the key value pairs corresponding to the given keys from the object
const omit = (o, keys) => {
  return Object.keys(o)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = o[key];
      return acc;
    }, {});
};

const obj = {
  a: 1,
  b: 2,
  c: 5,
};

console.log(omit(obj, ["b"]));
