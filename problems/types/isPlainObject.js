// Only contains plain objects. Created either with the object constructor or
// object literal syntax. Function, arrays not included

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && value.constructor === Object;

console.log(isPlainObject({}));
console.log(isPlainObject(new Object()));
console.log(isPlainObject([]));
console.log(isPlainObject((e) => 5));
console.log(isPlainObject(undefined));
console.log(isPlainObject("This is a string"));
