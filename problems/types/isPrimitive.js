const isPrimitive = (value) => value !== Object(value);

console.log(isPrimitive(null));
console.log(isPrimitive("This is a string"));
console.log(isPrimitive(5));
console.log(isPrimitive(true));
console.log(isPrimitive({}));
console.log(isPrimitive([]));
console.log(isPrimitive((e) => 5));
