/*
Write a function that computes the dominant writing direction in a string of 
text. Remember that each script object has a direction property that can be 
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy functions
defined earlier in the chapter are probably useful here.
*/

function dominantDirection(text) {
  // scripts is an array of objects, where each object has a name property
  // (specifying direction) and a count property (specifying number of chars
  // associated with this direction)
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name != 'none');

  let maxCount = 0;
  let domDirection = 'ltr';
  for (script of scripts) {
    if (script.count > maxCount) {
      maxCount = script.count;
      domDirection = script.name;
    }
  }

  return domDirection;

  // Cleaner solution (alternative to using for loop)
  // if (scripts.length === 0) return 'ltr'
  // return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
