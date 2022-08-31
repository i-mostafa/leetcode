/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let pts = 0,
    pte = numbers.length - 1;

  while (pts < pte) {
    const sum = numbers[pts] + numbers[pte];
    if (sum === target) return [pts + 1, pte + 1];
    if (sum > target) {
      pte--;
      continue;
    }
    pts++;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
