const romanToIntMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const [curr, next] = [s[i], s[i + 1]];
    const currNextVal = romanToIntMap[curr + next];
    if (currNextVal !== undefined) {
      sum += currNextVal;
      i++;
      continue;
    }

    const currVal = romanToIntMap[curr];
    sum += currVal;
  }
  return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("DCXXI"));
