/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;
  s = s.toLowerCase().replace(/[^0-9a-z]/g, "");

  let left = 0,
    right = s.length - 1;
  while (left < right) if (s[left++] !== s[right--]) return false;
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));
console.log(isPalindrome("ab_a"));
