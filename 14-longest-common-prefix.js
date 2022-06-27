/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  const fullString = strs.join("-");
  for (let i = 0; i < fullString.length; i++) {
    if (
      strs.length !==
      fullString.split("-" + commonPrefix + fullString[i]).length
    ) {
      break;
    }
    commonPrefix += fullString[i];
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
