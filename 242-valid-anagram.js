/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const chCounter = {};

  for (let i = 0; i < s.length; i++) {
    chCounter[s[i]] = (chCounter[s[i]] || 0) + 1;
    chCounter[t[i]] = (chCounter[t[i]] || 0) - 1;
  }

  for (const ch in chCounter) if (chCounter[ch] !== 0) return false;

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
