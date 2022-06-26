// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//   if (s.length === 1) return s;

//   const str = s.split("");
//   const chrHolder = {};

//   str.forEach((chr, i) => (chrHolder[chr] ||= []).push(i));
//   const palindromes = Object.values(chrHolder).reduce((acc, curr) => {
//     if (curr.length <= 1) return acc;
//     const iterations = stringIterations(s, curr).filter(isPalindromic);
//     return [...acc, ...iterations];
//   }, []);

//   if (palindromes.length === 0) return s[0];

//   const longest = palindromes.reduce((acc, curr) => {
//     return acc.length > curr.length ? acc : curr;
//   }, "");
//   return longest;
// };

// const isPalindromic = (str) =>
//   str ===
//   str
//     .split("")
//     .map((_, i) => str[str.length - i - 1])
//     .join("");

// const stringIterations = (str, indices) => {
//   const result = [];
//   for (let i = 0; i < indices.length; i++) {
//     for (let j = i + 1; j < indices.length; j++) {
//       result.push(str.slice(indices[i], indices[j] + 1));
//     }
//   }
//   return result;
// };

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    const odd = expandFromCenter(s, i, i);
    const even = expandFromCenter(s, i, i + 1);
    longest = longest.length > odd.length ? longest : odd;
    longest = longest.length > even.length ? longest : even;
  }
  return longest;
};

const expandFromCenter = (s, left, right) => {
  for (; left >= 0 && right < s.length; left--, right++) {
    if (s[left] !== s[right]) {
      break;
    }
  }
  return s.slice(left + 1, right);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("basbsab"));
console.log(
  longestPalindrome(
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
  )
);
