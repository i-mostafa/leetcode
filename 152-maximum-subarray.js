/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = -Infinity;

  for (let i = 0, max = 1, min = 1; i < nums.length; i++) {
    const temp = max * nums[i];

    max = Math.max(nums[i], min * nums[i], temp);
    min = Math.min(temp, min * nums[i], nums[i]);

    res = Math.max(res, max);
  }

  return res;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([2, 3, -2, 4, 5]));
