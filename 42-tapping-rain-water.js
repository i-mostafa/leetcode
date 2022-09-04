/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;

  let maxLeft = height[left];
  let maxRight = height[right];
  let res = 0;
  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      res += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      res += maxRight - height[right];
    }
  }
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); //9
