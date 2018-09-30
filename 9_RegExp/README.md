# Chapter 9 Notes

    `^` matches start of input string
    `$` matches end of input string
    `?` matches 0 or 1 of preceding token
    `*` matches 0 or more of preceding token
    `+` matches 1 or more of preceding token
    `\b` matches empty string at beginning or end of a word, i.e. it matches a zero-width word boundary
    `\w` matches any word character (alphanumeric and underscore)
    `\W` matches any non-word character
    `|` matches the pattern either to the left or right of bar
    `[abc]` is a character class; it matches any character from a set of characters, e.g. match any character from a, b, or c
    `[^abc]` matches characters not a, b, or c
    `[a^bc]` matches a, ^, b, or c
    `a(?=b)` represents positive lookahead: matches a followed by a b
    `a(?!b)` represents negative lookahead: matches a not followed by a b

- `regexObj.test(str)`: Returns true if there's a match between a regular expression and a specified string, else returns false

- `str.match(regexp)`: Returns an array of matches, or null if none exists

  - If `g` flag is used, returns all substrings
  - If no `g` flag is used, returns same result as `regexObj.exec(str)`

- `regexObj.exec(str)`: Similar to `str.match(regexp)`, returns an array of matches (or null if non exists). However:

  - If `g` flag is used, returns an array where first item is matched text, and each subsequent item is the next capture group (i.e. result changes with each call)
  - If no `g` flag is used, returns same result as if it had a `g` flag and was called just once

- `str.replace(regex | str, newSubstr | function)`: Returns a new string that has part of a specified string replaced with another string

  - `regex` is the pattern to be matched
  - `str` is the string to be replaced by newSubstr
  - `newSubstr` is the replacement string
  - `function`'s return value can serve as the replacement string

- When a match fails, regular expressions will backtrack by entering another branch and again attempt to match the expression against a specified string
  - Matcher stops as soon as it finds a full match
- Repetition operators `(+, *, ?, {})` are greedy, meaning they match as much as possible and then backtrack
  - Append a `?` to make them nongreedy, i.e. match as little as possible

### References:

[Eloquent JavaScript, Chapter 9](https://eloquentjavascript.net/09_regexp.html)

MDN Docs: [Test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), [Match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [Exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
, [Replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

[https://toddmotto.com/understanding-regular-expression-matching-with-test-match-exec-search-and-split/](https://toddmotto.com/understanding-regular-expression-matching-with-test-match-exec-search-and-split/)

[https://stackoverflow.com/questions/9801630/what-is-the-difference-between-square-brackets-and-parentheses-in-a-regex](https://stackoverflow.com/questions/9801630/what-is-the-difference-between-square-brackets-and-parentheses-in-a-regex)

[https://stackoverflow.com/questions/9214754/what-is-the-difference-between-regexp-s-exec-function-and-string-s-match-fun](https://stackoverflow.com/questions/9214754/what-is-the-difference-between-regexp-s-exec-function-and-string-s-match-fun)

[https://regexr.com/](https://regexr.com/)
