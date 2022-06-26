/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const result = Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    const idx = convertIdx(i, numRows);
    result[idx] += s[i];
  }
  return result.join("");
};

const convertIdx = (idx, numRows) => {
  const patternLength = numRows * 2 - 2;
  const idxPosition = idx % patternLength;

  if (idxPosition < numRows) return idxPosition;

  return patternLength - idxPosition;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("A", 1));
