/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const countStore = {};
  for (const ch of s1) countStore[ch] = (countStore[ch] || 0) + 1;
  let pivot = 0;
  while (pivot <= s2.length - s1.length) {
    if (!countStore[s2[pivot]]) {
      pivot++;
      continue;
    }
    const copy = { ...countStore };
    let matches = 0;
    let idx = pivot;
    while (idx < s2.length) {
      if (!copy[s2[idx]]) {
        pivot++;
        break;
      }
      copy[s2[idx]]--;
      matches++;
      if (matches === s1.length) return true;
      idx++;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("abc", "eidboaooacb"));
console.log(checkInclusion("adc", "dcda"));
