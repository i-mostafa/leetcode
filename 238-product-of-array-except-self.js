/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length);
  answer[0] = 1;
  // fill prefix
  for (let i = 1; i < nums.length; i++) answer[i] = answer[i - 1] * nums[i - 1];
  console.log(answer, nums);
  let postfix = 1;
  // fill postfix
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    answer[i] = answer[i] * postfix || 0;
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
