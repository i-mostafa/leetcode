/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [nums];

  const results = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums.pop();

    const permutes = permute([...nums]);

    results.push(...permutes.map((p) => [...p, n]));

    nums = [n, ...nums];
  }
  return results;
};

console.log(permute([1, 2, 3])); //Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
