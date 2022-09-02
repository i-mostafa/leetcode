/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};

  strs.forEach((s) => {
    const key = getKey(s);
    if (!result[key]) result[key] = [];
    result[key].push(s);
  });
  return Object.values(result);
};

function getKey(str) {
  const stack = new Array(26).fill(0);

  for (const ch of str) {
    stack[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  return stack.toString();
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
