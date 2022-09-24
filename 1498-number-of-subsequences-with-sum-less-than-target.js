/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  if (nums.length <= 1) nums.length;
  const mod = Math.pow(10, 9) + 7;

  nums.sort((a, b) => a - b);
  let r = nums.length - 1;
  let l = 0;
  let res = 0;
  while (l <= r) {
    while (l <= r && nums[r] + nums[l] > target) r--;

    if (l <= r) {
      res += Math.pow(2, r - l);
      res %= mod;
    }
    l++;
  }

  return res;
};

console.log(numSubseq([3, 5, 6, 7], 9));
console.log(numSubseq([5, 2, 4, 1, 7, 6, 8], 16));
