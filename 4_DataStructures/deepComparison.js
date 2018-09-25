/*
Write a function deepEqual that takes two values and returns true only if they 
are the same value or are objects with the same properties, where the values of
the properties are equal when compared with a recursive call to deepEqual.
*/

function deepEqual(arg1, arg2) {
  if (typeof arg1 !== typeof arg2) return false;

  if (
    typeof arg1 === 'object' &&
    arg1 != null &&
    typeof arg2 === 'object' &&
    arg2 != null
  ) {
    const props1 = Object.keys(arg1);
    const props2 = Object.keys(arg2);
    const numProps1 = props1.length;
    const numProps2 = props2.length;

    for (const prop of props2) {
      if (!prop in props1 || !deepEqual(arg1[prop], arg2[prop])) {
        return false;
      }
    }

    return numProps1 === numProps2;
  } else {
    return arg1 === arg2;
  }
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
