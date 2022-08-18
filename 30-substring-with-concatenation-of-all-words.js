const isEmpty = (obj) => Object.keys(obj).length === 0;
const getCopy = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // get min length
  const { minLength, windowSize } = words.reduce(
    (acc, curr) => {
      acc.minLength = acc.minLength < curr.length ? acc.minLength : curr.length;
      acc.windowSize += curr.length;
      return acc;
    },
    { minLength: Infinity, windowSize: 0 }
  );
  // store in hash table
  const dictionary = words.reduce((acc, curr) => {
    const key = curr.slice(0, minLength);
    if (!acc[key]) acc[key] = {};
    if (!acc[key][curr]) acc[key][curr] = 0;
    acc[key][curr]++;
    return acc;
  }, {});
  //   console.log(minLength, dictionary);
  const results = [];

  let i = 0;
  while (i <= s.length - windowSize) {
    i = wordInDic(s, results, getCopy(dictionary), i, minLength, windowSize);
  }
  return results;
};

function decDictKey(dictionary, key, word) {
  if (dictionary[key][word] > 0) dictionary[key][word]--;
  if (dictionary[key][word] === 0) delete dictionary[key][word];
  if (isEmpty(dictionary[key])) delete dictionary[key];
}

function wordInDic(s, results, dict, i, minLength, windowSize) {
  const words = [];
  const startIdx = i;
  while (i < s.length) {
    let window = s.slice(i, i + windowSize);
    let key = window.slice(0, minLength);
    // console.log(window, key, dict);

    if (!dict[key]) return startIdx + 1;

    const word = wordInDictKey(window, dict, key);

    words.push(word);
    decDictKey(dict, key, word);
    i += word.length;

    if (isEmpty(dict)) {
      results.push(startIdx);
      return startIdx + 1;
    }
  }
  return i;
}

function wordInDictKey(window, dict, key) {
  for (const word in dict[key]) {
    if (window.startsWith(word)) return word;
  }
  return null;
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));

console.log(
  findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
    "fooo",
    "barr",
    "wing",
    "ding",
    "wing",
  ])
);
console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]));
console.log(findSubstring("a", ["a"]));
// console.log(
//   findSubstring(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     [
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//       "a",
//     ]
//   )
// );
// const results = [];
// console.log(
//   searchForNextWord("foobarfoobar", ["foo", "bar"], results, 6, 0, 6),
//   results
// );

// const results = [];
// console.log(
//   wordInDic(
//     "foobarfoobar",
//     results,
//     { foo: { foo: 1 }, bar: { bar: 1 } },
//     0,
//     3,
//     6
//   ),
//   results
// );
