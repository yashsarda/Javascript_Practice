// Gets the target value for the key in a nested JSON object

const dig = (data, key) => {
  return key in data
    ? data[key]
    : Object.values(data).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return dig(val, key);
      }, undefined);
};

const data = {
  level1: {
    level2: {
      level3: "Some data",
    },
  },
};

console.log(dig(data, "level3"));
console.log(dig(data, "level4"));
