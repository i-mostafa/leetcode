/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const str = num.toString();
  const len = str.length;
  let roman = "";
  for (let i = 0; i < len; i++) {
    const digit = str[i];
    const digitRoman = getRoman(digit, len - i - 1);
    roman += digitRoman;
  }
  return roman;
};
const getRoman = (digit, weight) => {
  digit = parseInt(digit);
  if (digit === 0) return "";

  const roman = [
    { 1: "I", 4: "IV", 5: "V", 9: "IX" },
    { 1: "X", 4: "XL", 5: "L", 9: "XC" },
    { 1: "C", 4: "CD", 5: "D", 9: "CM" },
    { 1: "M", 4: "", 5: "", 9: "" },
  ];
  const weightedRoman = roman[weight];
  if (weightedRoman[digit]) return weightedRoman[digit];
  if (digit < 5) return weightedRoman[1].repeat(digit);
  if (digit < 9) return weightedRoman[5] + weightedRoman[1].repeat(digit - 5);
};

console.log(intToRoman(1994));
console.log(intToRoman(3999));
console.log(intToRoman(3));
console.log(intToRoman(58));
