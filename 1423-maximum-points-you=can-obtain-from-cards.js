/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  if (k === 0 || cardPoints.length === 0) return 0;

  let sum = cardPoints.slice(0, k).reduce((a, b) => a + b, 0);

  if (k === cardPoints.length) return sum;

  let i = k - 1;
  let max = sum;

  while (i >= 0) {
    sum += cardPoints[cardPoints.length + i - k] - cardPoints[i];
    if (sum > max) max = sum;
    i--;
  }
  return max;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 3, 1, 6, 2], 3));
console.log(maxScore([100, 40, 17, 9, 73, 75], 3));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
