const isNumber = (value) => typeof value === "number";

console.log(isNumber(null));
console.log(isNumber("This is a string"));
console.log(isNumber(5));
console.log(isNumber(true));
console.log(isNumber({}));
console.log(isNumber([]));
console.log(isNumber((e) => 5));
