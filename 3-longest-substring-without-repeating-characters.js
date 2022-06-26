// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   let substringHolder = {};
//   const checkMaxAndResetHolder = () => {
//     const subStringLength = Object.keys(substringHolder).length;
//     if (subStringLength > max) max = subStringLength;
//     substringHolder = {};
//   };
//   let i = 0;
//   while (i < s.length) {
//     const char = s[i];
//     if (substringHolder.hasOwnProperty(char)) {
//       i = Number(substringHolder[char]);
//       checkMaxAndResetHolder();
//     } else substringHolder[char] = i;
//     i++;
//   }
//   checkMaxAndResetHolder();

//   return max;
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let subString = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const chrIdx = subString.indexOf(char);
    if (chrIdx > -1) subString = subString.slice(chrIdx + 1);
    subString.push(char);
    max = Math.max(max, subString.length);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));
