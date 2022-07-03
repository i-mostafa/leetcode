/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const openParens = Object.keys(map);
  const closeParens = Object.values(map);
  for (chr of s) {
    if (openParens.includes(chr)) {
      stack.push(chr);
      continue;
    }
    if (closeParens.includes(chr)) {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (map[last] !== chr) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
