/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let lastMax = arr[arr.length - 1];
  let prev = lastMax;
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    lastMax = Math.max(lastMax, prev);
    prev = arr[i];
    arr[i] = lastMax;
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
