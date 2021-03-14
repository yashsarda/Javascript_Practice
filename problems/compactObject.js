// Deeply removes all falsy values from an object or an array

const compactObject = (obj) => {
  const data = Array.isArray(obj) ? obj.filter(Boolean) : obj;

  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (Boolean(value))
        acc[key] = typeof value === "object" ? compactObject(value) : value;
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );
};

const obj = {
  a: null,
  b: true,
  c: false,
  d: "",
  e: 1,
  f: 0,
  g: "a",
  h: [null, false, true, "", 100],
  i: { j: 0, x: 5, y: null },
};

const compact = compactObject(obj);
console.log(compact);
