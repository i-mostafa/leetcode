/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;

  let elements = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[elements] = nums[i];
      elements++;
    }
  }

  return elements;
};
const arr = [3, 2, 2, 3];
console.log(removeElement(arr, 3), arr);

const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr2, 2), arr2);
