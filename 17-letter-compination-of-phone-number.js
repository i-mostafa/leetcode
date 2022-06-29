const letters = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  if (digits.length === 1) return letters[digits[0]].split("");
  const result = [];
  const first = letters[digits[0]];
  const rest = letterCombinations(digits.slice(1));
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < rest.length; j++) {
      result.push(first[i] + rest[j]);
    }
  }
  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
