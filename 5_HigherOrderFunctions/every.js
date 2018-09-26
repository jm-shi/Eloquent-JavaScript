/*
Analogous to the some method, arrays also have an every method. This one 
returns true when the given function returns true for every element in the
array. In a way, some is a version of the || operator that acts on arrays, 
and every is like the && operator.

Implement every as a function that takes an array and a predicate function 
as parameters. Write two versions, one using a loop and one using the some 
method.
*/

function everyLoop(arr, test) {
  for (let i in arr) {
    if (!test(arr[i])) return false;
  }
  return true;
}

function everySome(arr, test) {
  return !arr.some(function(item) {
    return !test(item);
  });
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
console.log(everySome([], n => n < 10));
// → true
