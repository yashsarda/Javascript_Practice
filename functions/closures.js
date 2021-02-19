function counter() {

    let n = 0;

    return {

        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

// An execution context is created
let c = counter();
// A new execution context is created
let d = counter();

console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count());


// Closures can also be used to create a private state in this way
let uniqueInteger = (function() {
    let count = 0;
    return function() {
        return count++;
    };
}());

console.log(uniqueInteger());
console.log(uniqueInteger());