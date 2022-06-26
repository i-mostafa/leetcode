/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -Math.pow(2, 31);
  const pattern = /^\s*(?<sign>[+-]?)(?<number>\d+)/;
  const {
    groups: { sign, number },
  } = pattern.exec(s) || { groups: {} };

  if (!number) return 0;
  const result = parseInt(number) * (sign === "-" ? -1 : 1);
  if (result > maxInt) return maxInt;
  if (result < minInt) return minInt;
  return result;
};

console.log(myAtoi("   -42 asdf"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("  +  413"));
