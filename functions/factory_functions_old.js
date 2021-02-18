// Range is a factory function used for creating instances
function range(from, to) {

    // This creates a new object with the methods proeprty as the prototype
    let new_obj = Object.create(range.methods);

    new_obj.from = from;
    new_obj.to = to;

    return new_obj;
}

range.methods = {

    includes(x) {
        return (this.from <= x && this.to >= x);
    },

    // This defines the range to be iterable
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++)
            yield x;
    },

    toString() { 
        return '( ' + this.from + '...' + this.to + ' )';
    }
};

let obj = range(1, 3);

console.log(obj.includes(2));
console.log(obj.toString());
console.log([...obj]);