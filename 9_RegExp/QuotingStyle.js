/*
Imagine you have written a story and used single quotation marks throughout to
mark pieces of dialogue. Now you want to replace all the dialogue quotes with 
double quotes, while keeping the single quotes used in contractions like 
aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft
a call to the replace method that does the proper replacement.
*/

let text = "'I'm the cook,' he said, 'it's my job.'";
// (^/\W)' matches ' at beginning of string, or nonword character followed by '
// '(\W|$) matches ' followed by nonword character, or ' at end of string
// $1 represents the first capture group, i.e. a nonword character
// $2 represents the second capture group, i.e. a nonword character
// Replace relevant ' with "
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
