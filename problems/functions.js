// Gets an array of function property names from own (and optionally inherited) enumerable
// properties of an object

const getFunctionPropertyNames = (obj, inherited) => {
  return (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter((key) => typeof obj[key] === "function");
};

function Foo() {
  this.a = () => 1;
  this.b = () => 2;
  this.c = "Yash";
}

Foo.prototype.d = () => 3;
console.log(getFunctionPropertyNames(new Foo()));
console.log(getFunctionPropertyNames(new Foo(), true));
