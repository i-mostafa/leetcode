/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n <= 2) return n || 1;

  const cache = [...Array(n + 1)].fill(1);

  for (let i = 2; i <= n; i++) {
    let total = 0;
    for (let j = 1; j <= i; j++) {
      total += cache[j - 1] * cache[i - j];
    }
    cache[i] = total;
  }

  return cache[n];
};

console.log(numTrees(3)); // 5
console.log(numTrees(4)); // 14
console.log(numTrees(1)); // 1
