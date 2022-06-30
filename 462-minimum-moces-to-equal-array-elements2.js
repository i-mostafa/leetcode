/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  const numberOfMoves = nums.reduce(
    (acc, num) => acc + Math.abs(num - median),
    0
  );
  return numberOfMoves;
};

console.log(minMoves2([1, 2, 3]));
console.log(minMoves2([1, 2, 3, 4]));
console.log(minMoves2([1, 2, 3, 4, 5]));
console.log(minMoves2([1, 10, 2, 9]));
