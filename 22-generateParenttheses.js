const { isValid } = require("./20-valid-parentheses");

const patternToNumber = (pattern = "") => parseInt(pattern, 2);
const numberToPattern = (num, length) =>
  Number(num).toString(2).padStart(length, "0");

const isValidPattern = (pattern = "") => {
  let stack = [];
  pattern = "0" + pattern + "1";
  for (let c of pattern) {
    if (stack.length === 0) {
      stack.push(c);
      continue;
    }

    const last = stack[stack.length - 1];
    if (c === last) stack.push(c);
    else if (c === "1" && last === "0") stack.pop();
  }
  //   console.log(stack);
  return stack.length === 0;
};

const patternToParentheses = (pattern = "") =>
  "(" + pattern.replace(/0/g, "(").replace(/1/g, ")") + ")";

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n <= 0) return [];
  if (n === 1) return ["()"];

  const start = Math.pow(2, n - 1) - 1;
  const end = patternToNumber("10".repeat(n - 1));
  const patterns = [];
  for (let i = start; i <= end; i++) {
    const pattern = numberToPattern(i, (n - 1) * 2);

    if (isValidPattern(pattern)) patterns.push(patternToParentheses(pattern));
  }
  return patterns;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
console.log(generateParenthesis(5));
// console.log("011100", isValidPattern("011100"));
// console.log("001110", isValidPattern("001110"));
