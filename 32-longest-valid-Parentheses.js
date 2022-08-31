/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length <= 1) return 0;

  let idx = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      idx = i;
      break;
    }
  }
  if (idx === -1 || s.length - idx <= 1) return 0;

  const validRanges = [];
  const opens = [];

  for (let i = idx; i < s.length; i++) {
    if (s[i] === "(") {
      opens.push(i);
      continue;
    }

    if (opens.length > 0) {
      validRanges.push([opens.pop(), i]);
      continue;
    }
  }

  return solveRanges(validRanges);
};

function solveRanges(ranges) {
  console.log(ranges);
  if (ranges.length === 0) return 0;
  if (ranges.length === 1) return ranges[0][1] - ranges[0][0] + 1;

  let maxLength = 0;

  const update = (s, e) => {
    start = s;
    end = e;
    const length = end - start + 1;
    if (length > maxLength) maxLength = length;
  };
  update(...ranges[ranges.length - 1]);
  for (let i = ranges.length - 2; i >= 0; i--) {
    const range = ranges[i];
    // includes
    if (start < range[0] && end > range[1]) continue;

    // besides
    if (start - range[1] === 1) {
      update(range[0], end);
      continue;
    }

    update(...range);
  }
  return maxLength;
}

// console.log(longestValidParentheses("("));
// console.log(longestValidParentheses(")))))))"));
// console.log(longestValidParentheses(")))))("));
// console.log(longestValidParentheses(")))(()()())()"));
// console.log(longestValidParentheses("(()"));
// console.log(longestValidParentheses(")()())"));
// console.log(longestValidParentheses(""));
// console.log(longestValidParentheses("()(()"));
// console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses("(()())"));

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses2 = function (s) {
  const stack = [-1];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === ")") {
      stack.pop();
      if (stack.length) {
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    } else {
      stack.push(i);
    }
  }

  return max;
};
