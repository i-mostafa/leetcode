/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const cache = {};

  while (!cache[n]) {
    cache[n] = true;
    n = sumOfDigitsPowerOfTow(n);
    if (n === 1) return true;
  }
  return false;
};

function sumOfDigitsPowerOfTow(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + curr * curr, 0);
}
console.log(isHappy(19)); // true;
console.log(isHappy(2)); // false;
// console.log("1" * "4");
