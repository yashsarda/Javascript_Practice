function addPrivateProperty(obj, name, predicate) {

    // Variable which is local to this function only. Private
    let value;

    o[`get${name}`] = function() {
        return value;
    }

    o[`set${name}`] = function(v) {
        if(predicate && !predicate(v)) {
            throw Error("Type error");
        }
        else {
            value = v;
        }
    }
}

let o = {};

addPrivateProperty(o, "Name", x => typeof x === "string");
o.setName("Frank");
console.log(o.getName());
o.setName(0);