/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const holder = nums.reduce((acc, curr) => {
    if (!acc["" + curr]) acc["" + curr] = 0;
    acc["" + curr]++;
    return acc;
  }, {});
  return Object.keys(holder)
    .sort((a, b) => holder[b] - holder[a])
    .map(Number)
    .slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([-1, -1], 1));
