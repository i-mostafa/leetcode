/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pivot = 0;
  let maxSum = -Infinity,
    curSum = 0;

  while (pivot < nums.length) {
    curSum += nums[pivot++];
    maxSum = Math.max(curSum, maxSum);
    if (curSum <= 0) curSum = 0;
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
