/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;

  let elements = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[elements] !== nums[i]) {
      elements++;
      nums[elements] = nums[i];
    }
  }

  return elements + 1;
};
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr), arr);

const arr2 = [1];
console.log(removeDuplicates(arr2), arr2);
