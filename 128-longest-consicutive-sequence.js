/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Set(nums);
  let i = 0;
  let maxLength = 0;
  while (i < nums.length) {
    let num = nums[i++];
    if (map.has(num - 1)) continue;

    let length = 1;
    while (map.has(num + 1)) {
      num++;
      length++;
    }
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
