/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  const str = x.toString();
  const len = str.length;
  const halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(0));
