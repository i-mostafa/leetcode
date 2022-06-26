/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const [right, left, isIncreasing] = resolveArraysToSameDirection(
    nums1,
    nums2
  );
  const rightWins = (a, b) => (isIncreasing ? a < b : a > b);

  let i = 0,
    j = 0;
  const result = [];
  while (i < right.length && j < left.length) {
    const [firstRight, secondRight] = [right[i], right[i + 1]];
    const firstLeft = left[j];
    // add the two numbers if they are equal
    if (firstRight === firstLeft) {
      result.push(firstRight, firstLeft);
      i++;
      j++;
      continue;
    }

    // add left number to result if it wins the comparison with the first right number
    if (!rightWins(firstRight, firstLeft)) {
      result.push(firstLeft);
      j++;
      continue;
    }

    result.push(firstRight);
    i++;

    // add left number to result if it wins the comparison with the next right number
    if (!rightWins(secondRight, firstLeft)) {
      result.push(firstLeft);
      j++;
    }
  }
  if (i < right.length) result.push(...right.slice(i));
  if (j < left.length) result.push(...left.slice(j));
  return getMedian(result);
};
const flipSortedArray = (nums) => nums.map((v, i) => nums[nums.length - i - 1]);

const resolveArraysToSameDirection = (nums1, nums2) => {
  if (nums1.length < nums2.length) resolveArraysToSameDirection(nums2, nums1);
  const isIncreasing = nums1[0] <= nums1[nums1.length - 1];
  if (isIncreasing !== nums2[0] <= nums2[nums2.length - 1])
    nums2 = flipSortedArray(nums2);
  return [nums1, nums2, isIncreasing];
};

const getMedian = (nums) => {
  const length = nums.length;
  if (length % 2 === 0) return (nums[length / 2 - 1] + nums[length / 2]) / 2;
  return nums[Math.floor(length / 2)];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
