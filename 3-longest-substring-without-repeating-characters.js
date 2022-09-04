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

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   let subString = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const chrIdx = subString.indexOf(char);
//     if (chrIdx > -1) subString = subString.slice(chrIdx + 1);
//     subString.push(char);
//     max = Math.max(max, subString.length);
//   }

//   return max;
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let right = 0,
    left = 0;
  let max = 0;
  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("aab")); //2
console.log(lengthOfLongestSubstring("dvdf")); //3
