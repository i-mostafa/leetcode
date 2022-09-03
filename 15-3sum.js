// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i != 0 && nums[i] === nums[i - 1]) continue;
//     const holder = {};
//     for (let j = i + 1; j < nums.length; j++) {
//       const complement = -(nums[i] + nums[j]);
//       if (complement in holder) {
//         result.push([nums[i], complement, nums[j]]);
//         while (j < nums.length - 1 && nums[j] === nums[j + 1]) j++;
//       }
//       holder[nums[j]] = true;
//     }
//   }
//   return result;
// };
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let j = i + 1;
//     let k = nums.length - 1;
//     while (j < k) {
//       if (nums[i] + nums[j] + nums[k] === 0) {
//         console.log(nums[i], nums[j], nums[k]);
//         result.push([nums[i], nums[j], nums[k]]);
//         j++;
//         while (j < nums.length - 1 && nums[j] === nums[j - 1]) j++;
//       } else if (nums[i] + nums[j] + nums[k] < 0) j++;
//       else {
//         k--;
//         while (k > j + 1 && nums[k] === nums[k + 1]) k--;
//       }
//     }
//   }
//   return result;
// };
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // skip repeated calculations
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
        continue;
      }
      if (sum < 0) {
        left++;
        continue;
      }
      right--;
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([1, -1, -1, 0]));
