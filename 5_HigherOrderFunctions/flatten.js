/*
Use the reduce method in combination with the concat method to “flatten” an 
array of arrays into a single array that has all the elements of the original 
arrays.
*/

function flatten(arr) {
  return arr.reduce(function(accumulator, currVal) {
    return accumulator.concat(currVal);
  });
}

let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

console.log(flatten(arrays));
