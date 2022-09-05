/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let max = 0;
  const charSet = {};
  let left = 0,
    right = 0;

  const isValid = () =>
    right - left + 1 - Math.max(...Object.values(charSet)) <= k;

  while (right < s.length && left < s.length - max) {
    const char = s[right];
    charSet[char] = (charSet[char] ?? 0) + 1;

    while (!isValid()) {
      charSet[s[left]]--;
      left++;
    }

    max = Math.max(max, right - left + 1);

    right++;
  }
  return max;
};

console.log(characterReplacement("ABAB", 2)); //4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("ABAA", 0)); // 2
console.log(characterReplacement("ABCDE", 1)); // 2
console.log(characterReplacement("AABABBA", 1)); // 5
