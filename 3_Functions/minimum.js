/*
Write a function min that takes two arguments and returns their minimum.
*/

function min(arg1, arg2) {
  if (arguments.length !== 2) {
    return new Error('Did not enter exactly two arguments.');
  }
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    return new Error('Arguments were not both numbers.');
  }
  if (arg1 < arg2) return arg1;
  return arg2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
