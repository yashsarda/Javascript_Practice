let F = function() {};       // F is the function object
let p = F.prototype;        // Every F has a prototype property except for arrow functions, generator functions and async functions.
let c = p.constructor;      // The prototype is a object with a single property constuctor
console.log(p === c)        // True, the F.prototype.constructor === F