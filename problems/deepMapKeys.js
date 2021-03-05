// Deep Maps an object keys

const deepMapKeys = (obj, fn) => {
  return Array.isArray(obj)
    ? obj.map(deepMapKeys)
    : typeof obj === "object"
    ? Object.keys(obj).reduce((acc, currentKey) => {
        const newKey = fn(currentKey);
        const value = obj[currentKey];
        acc[newKey] =
          value !== null && typeof value === "object"
            ? deepMapKeys(value, fn)
            : value;
        return acc;
      }, {})
    : obj;
};

const obj = {
  foo: 1,
  nested: {
    child: {
      withArray: ["Hello"],
    },
  },
};

const upperKeysObj = deepMapKeys(obj, (key) => key.toUpperCase());
console.log(upperKeysObj);
