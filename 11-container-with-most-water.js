// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let maxArea = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const area = calculateArea({
//         lh: height[i],
//         li: i,
//         rh: height[j],
//         ri: j,
//       });
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// };
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0,
    leftIdx = 0,
    rightIdx = height.length - 1;
  while (leftIdx < rightIdx) {
    const area = calculateArea({
      lh: height[leftIdx],
      li: leftIdx,
      rh: height[rightIdx],
      ri: rightIdx,
    });
    max = Math.max(max, area);
    if (height[leftIdx] < height[rightIdx]) leftIdx += 1;
    else rightIdx -= 1;
  }
  return max;
};
const calculateArea = ({ lh, li, rh, ri }) => {
  const minHeight = Math.min(lh, rh);
  return (ri - li) * minHeight;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
