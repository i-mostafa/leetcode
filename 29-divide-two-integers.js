/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (Math.abs(dividend) < Math.abs(divisor)) return 0;
  let sign = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) sign = -1;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  const baseShift = Math.log2(divisor);
  const shift = Math.floor(baseShift);

  let result = Math.abs(dividend >> shift);

  if (baseShift === shift) return checkConstrains(sign * result);

  result = sign * checkConstrains(normalDivision(dividend, divisor));

  return checkConstrains(result);
};

function checkConstrains(num) {
  const max = Math.pow(2, 31) - 1;
  const min = -1 * Math.pow(2, 32);
  if (num > max) return max;
  if (num < min) return min;
  return num;
}
function normalDivision(dividend, divisor) {
  if (dividend < divisor) return 0;
  let result = 0;
  while (dividend >= divisor) {
    dividend -= divisor + divisor;
    result += result;
  }
  return result;
}

// console.log(divide(10, 3));
// console.log(divide(3, 2));
// console.log(divide(10, 2));
// console.log(divide(3, 1));
// console.log(divide(7, -3));
// console.log(divide(-1, 1));
// console.log(divide(-2147483648, 1));
// console.log(divide(-2147483648, -1));
// console.log(2147483647 > Math.pow(2, 31) - 1);

console.log(divide(30, 5), Math.floor(30 / 5));
// console.log(normalDivision(15, 3 / 2));
