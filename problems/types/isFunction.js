const isFunction = (value) => typeof value === "function";

console.log(isFunction([]));
console.log(isFunction({}));
console.log(isFunction((e) => 5));
console.log(isFunction(null));
