function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {

    constructor: Range,

    includes: function(x) {
        return (x >= this.from && x <= this.to);
    },

    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; ++x) {
            yield x;
        }
    },

    toString: function() {
        return "(" + this.from + " " + this.to + ")";
    }
}

let obj = new Range(1, 3);
console.log(obj.includes(2));
console.log(obj.toString());
console.log([...obj]);