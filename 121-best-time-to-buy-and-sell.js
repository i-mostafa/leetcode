/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0,
    right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];

    maxProfit = Math.max(maxProfit, profit);
    if (profit < 0) left = right;

    right++;
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
