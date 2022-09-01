/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let idx = m + n - 1;
  m--;
  n--;

  while (idx >= 0 && n >= 0 && m >= 0) {
    if (nums1[m] > nums2[n]) nums1[idx] = nums1[m--];
    else nums1[idx] = nums2[n--];
    idx--;
  }

  while (n >= 0) {
    nums1[idx--] = nums2[n--];
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

const nums3 = [0, 0, 3, 0, 0, 0, 0, 0, 0],
  m2 = 3,
  nums4 = [-1, 1, 1, 1, 2, 3],
  n2 = 6;

// console.log(merge(nums1, m, nums2, n));
console.log(merge(nums3, m2, nums4, n2));

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
