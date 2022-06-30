/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  // sort the array
  nums = nums.sort((a, b) => a - b);
  const result = [];
  kSum(nums, target, 4, result);
  return result;
};

const kSum = (nums, target, k, result, current = [], i = 0) => {
  if (k > 2) {
    for (let j = i; j <= nums.length - k; j++) {
      if (j == i || nums[j] > nums[j - 1])
        kSum(
          nums,
          target - nums[j],
          k - 1,
          result,
          [...current, nums[j]],
          j + 1
        );
    }
  } else twoSum(nums, target, result, current, i);
};

const twoSum = (nums, target, result, current, i = 0) => {
  let j = nums.length - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      result.push([...current, nums[i], nums[j]]);
      i++;
      while (i < j && nums[i] === nums[i - 1]) i++;
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
console.log(fourSum([2, 2, 2, 2], 8));
