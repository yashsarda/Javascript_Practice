// This contain arrays, functions and plain object as objects. Don't consider null

const isObject = (value) => value === Object(value);

console.log(isObject([]));
console.log(isObject({}));
console.log(isObject((e) => 5));
console.log(isObject(null));
console.log(isObject(5));
console.log(isObject("true"));
console.log(isObject(undefined));
