function getPropertyNames(o, a) {

    a = a || []

    for(let prop in  o) {
        a.push(prop);
    }

    return a;
}

let o = { x: 1 }, p = { y: 2, z: 3 };

let a = getPropertyNames(o);
getPropertyNames(o, a);

console.log(a);

const rectangle = (width, height = width * 2) => ( { width, height } );
rectangle(1);