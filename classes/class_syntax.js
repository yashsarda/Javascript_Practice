class Range {

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return (x >= this.from && x <= this.to);
    }

    *[Symbol.iterator] () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) 
            yield x;
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

let r = new Range(1, 3);
console.log(r.includes(2));
console.log(r.toString());
console.log([...r]);

const o = {
    class_property: Range
};

let new_range = new o.class_property(1, 3);
console.log(new_range.includes(1));