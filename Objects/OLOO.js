// OLOO -> Objects Linked to Other Objects.
/*
We need to understand that there is no inheritance like we have in class based languages
In class based langauges when we create an instance a copy of the behavior is passed.
In JS, no copying mechanism takes place, only delegation takes place.
To define this behavior we have named it as OLOO.
*/

// Complicated code for delegation.
function Foo(who) {
  this.me = who;
}
// When we create a function Foo, we have a corresponding prototype object created by the JS
// engine. We are putting the identify function on this prototype
Foo.prototype.identify = function () {
  return "I'm " + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

// The Object.create utility creates brand new object.
// This object is then assigned to Bar.prototype.
// The prototype of Bar.prototype is the argument passed to Object.create method
// Note here that we have actually changed the reference of Bar.prototype
// The engine create reference is useless, since we have manually assigned it to something new
// So all the objects created with new keyword, will have their prototype linkages to this
// prototype and not the object created by the function

Bar.prototype = Object.create(Foo.prototype);
// Neither b1, nor the prototype of b1 has identify function, hence it travels
// up the prorotype chain to it's prototype.
// this = b1
Bar.prototype.speak = function () {
  console.log("Hello " + this.identify() + ".");
};

var b1 = new Bar("b1");
// Here this = b1 object. This is passed up
// The b1 object does not have speak method. So it goes up the prototype chain
b1.speak();

// Basically we have b1 object -> Bar.prototype -> Foo.prototype.
// We can get this linkage in a simpler fashion
var Foo = {
  init: function (who) {
    this.me = who;
  },

  identify: function () {
    return "I'm " + this.me;
  },
};

// var Bar = Object.create(Foo.prototype);
var Bar = Object.create(Foo);
// Bar.init = function (who) {
//   Foo.call(this, who);
// };

Bar.speak = function () {
  console.log("Hello " + this.identify() + ".");
};

// var b1 = Object.create(Bar.prototype);
// Bar.call(b1, "b1");
var b1 = Object.create(Bar);
b1.init("b1");
b1.speak();
