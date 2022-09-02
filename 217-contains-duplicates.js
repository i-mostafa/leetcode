/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numsHolder = {};
  return !nums.every((num) => {
    if (numsHolder[num]) return false;
    numsHolder[num] = true;
    return true;
  });
};

console.log(containsDuplicate([1, 2, 3, 1]));
