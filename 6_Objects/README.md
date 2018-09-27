# Chapter 6 Notes

**Methods**

- JavaScript functions are objects (a collection of key/value pairs).
- A method is a property of an object whose value is a function.
- When a function is called as a method, "this" points at the calling object.
- Arrow functions do not bind their own "this."

**Prototypes**

- Most objects have a prototype property.
- Prototypes are objects used as a fallback source of properties. - Inheritance in JavaScript is made via prototypes.
  - Ex: Suppose an object is built with a _Car_ constructor. This object _A_ inherits all properties/methods of _Car.prototype_. Suppose _Car_ has prototype _Vehicle.prototype_. Then object _A_, as well as any _Car_ object, inherits all properties/methods of _Vehicle.prototype_.
- `Object.create(proto)` creates a new object _A_, where `proto` is an object that is the prototype of _A_.
- All functions automatically get a property named `prototype`, which by default holds an empty object that derives from `Object.prototype`.

**Classes**

- Classes define the shape of a type of object - what methods/properties it has.
  - Such an object is called an instance of a class.

### References

[Eloquent JavaScript, Chapter 6](https://eloquentjavascript.net/06_object.html)

[https://stackoverflow.com/questions/15285293/method-vs-functions-and-other-questions](https://stackoverflow.com/questions/15285293/method-vs-functions-and-other-questions)

[http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)
