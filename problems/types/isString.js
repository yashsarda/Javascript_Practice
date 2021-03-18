const isString = (value) => typeof value === "string";

console.log(isString(null));
console.log(isString("This is a string"));
console.log(isString(5));
console.log(isString(true));
console.log(isString({}));
console.log(isString([]));
console.log(isString((e) => 5));
