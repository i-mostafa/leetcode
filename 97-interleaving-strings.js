// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @param {string} s3
//  * @return {boolean}
//  */
// var isInterleave = function (s1, s2, s3) {
//   if (s1.length + s2.length !== s3.length) return false;

//   const cache = {};

//   const iterate = (i, j) => {
//     if (i === s1.length && j === s2.length) return true;

//     if (cache[`${i},${j}`]) return cache[`${i},${j}`];

//     if (i < s1.length && s1[i] === s3[i + j] && iterate(i + 1, j)) return true;
//     if (j < s2.length && s2[j] === s3[i + j] && iterate(i, j + 1)) return true;

//     cache[`${i},${j}`] = false;
//     return false;
//   };
//   return iterate(0, 0);
// };
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const grid = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(false)
  );

  grid[s1.length][s2.length] = true;

  for (let i = s1.length; i >= 0; i--)
    for (let j = s2.length; j >= 0; j--) {
      if (i < s1.length && s1[i] === s3[i + j] && grid[i + 1][j])
        grid[i][j] = true;
      if (j < s2.length && s2[j] === s3[i + j] && grid[i][j + 1])
        grid[i][j] = true;
    }

  return grid[0][0];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
console.log(isInterleave("", "", ""));
