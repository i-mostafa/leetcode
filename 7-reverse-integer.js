/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -Math.pow(2, 31);
  const sign = x < 0 ? -1 : 1;
  const reversed = x.toString().split("").reverse().join("");
  const result = parseInt(reversed);
  if (result > maxInt || result < minInt) return 0;
  return result * sign;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(Math.pow(2, 31)));
