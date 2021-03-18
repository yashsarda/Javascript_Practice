const isArray = (value) => Array.isArray(value);

console.log(isArray([]));
console.log(isArray({}));
console.log(isArray((e) => 5));
console.log(isArray(null));
console.log(isArray("This is a primitive type"));
