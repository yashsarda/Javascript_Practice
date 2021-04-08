// A simple bind utility. Use MDN provided utility if you want the
// functionality of bind for pre-ES5 browsers.

if (!Function.prototype.bind2) {
  Function.prototype.bind2 = function (obj) {
    var fn = this;
    return function () {
      return fn.apply(obj, arguments);
    };
  };
}
function foo(baz) {
  console.log(this.bar + " " + baz);
}
var o = { bar: "bar" };

// Implicit binding rule applies, this refers to foo object.
foo = foo.bind2(o);

foo("baz");
