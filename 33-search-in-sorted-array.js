/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((r + l) / 2);
    if (target === nums[mid]) return mid;

    // left part
    if (nums[mid] >= nums[l]) {
      if (target < nums[l] || target > nums[mid]) {
        l = mid + 1;
        continue;
      }
      r = mid - 1;
    } // right part
    else {
      if (target > nums[r] || target < nums[mid]) {
        r = mid - 1;
        continue;
      }

      l = mid + 1;
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
