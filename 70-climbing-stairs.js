/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 1;
  while (n >= 2) {
    n--;
    const temp = first + second;
    first = second;
    second = temp;
  }
  return second;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
