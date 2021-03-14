// Flattens an object with the paths for keys

const flattenObject = (obj, prefix = "") => {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? `${prefix}.` : "";
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      Object.keys(obj[key]).length > 0
    ) {
      Object.assign(acc, flattenObject(obj[key], pre + key));
    } else {
      acc[pre + key] = obj[key];
    }
    return acc;
  }, {});
};

const obj = {
  a: {
    b: 1,
    c: 2,
    d: {
      e: 5,
      f: 6,
    },
  },

  z: [1, 3, 4],
};

console.log(flattenObject(obj));
