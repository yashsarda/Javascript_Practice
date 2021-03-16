const lowerCaseKeys = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
};

const obj = {
  Name: "Adam",
  suRnaME: "Smith",
};
console.log(lowerCaseKeys(obj));
