/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  let i = 0;
  while (i <= haystack.length - needle.length) {
    const position = haystack.indexOf(needle[0], i);
    if (position === -1) return -1;
    if (checkStr(haystack, needle, position)) return position;
    i = position + 1;
  }
  return -1;
};
function checkStr(str, sub, startPosition) {
  for (let i = 0; i < sub.length; i++) {
    if (str[startPosition + i] !== sub[i]) return false;
  }
  return true;
}
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaaaaaaaa", "bba"));
console.log(strStr("a", "a"));
