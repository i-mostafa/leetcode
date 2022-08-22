/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return nums;

  // find last peakIdx
  let lastPeakIdx = -1;
  for (let i = 1; i < nums.length; i++)
    if (nums[i] > nums[i - 1]) lastPeakIdx = i;

  // if last peakIdx remains -1 then sort the array by swap;
  if (lastPeakIdx === -1) return sortArrayBySwap(nums);

  // find a number at right of last peak which is between it and next left;
  const leftIdx = lastPeakIdx - 1;
  let i = lastPeakIdx + 1;
  while (i < nums.length) {
    if (nums[i] > nums[leftIdx] && nums[i] < nums[lastPeakIdx]) lastPeakIdx = i;
    i++;
  }

  // swap the lastPeakIdx and leftIdx values
  swap(nums, leftIdx, lastPeakIdx);

  // sort from leftIdx + 1  to end

  bubbleSort(nums, leftIdx + 1);
};

function sortArrayBySwap(arr) {
  for (let i = 0; i < arr.length / 2; i++) swap(arr, i, arr.length - i - 1);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr, start) {
  for (let i = start; i < arr.length; i++) {
    for (let j = start + 1; j < arr.length + start - i; j++) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
    }
  }
}

const arr = [1, 2, 3];

for (let i = 0; i < 5; i++) console.log(nextPermutation(arr), arr);
