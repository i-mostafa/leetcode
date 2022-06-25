/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let decreasesCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) return false;
      decreasesCount++;
    }
    if (decreasesCount > 1) return false;
  }
  return true;
};

console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([3, 4, 2, 3])); // false
console.log(checkPossibility([5, 7, 1, 8])); // true
