// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   if (t.length > s.length) return "";

//   let left = 0,
//     right = 0,
//     idx = 0,
//     minStr = "";

//   const updateIdx = () => {
//     idx++;
//     if (idx === t.length) {
//       const subStr = s.slice(left, right + 1);

//       if (subStr.length === t.length) return subStr;

//       if (!minStr || minStr.length < subStr.length) minStr = subStr;
//     }
//   };

//   while (right < s.length) {
//     if (s[right] !== t[idx]) {
//       right++;
//       if (idx === 0) left++;
//       continue;
//     }

//     updateIdx();
//     right++;
//   }
//   return minStr;
// };
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   if (t.length > s.length) return "";

//   let l = 0,
//     r = 0,
//     matches = 0,
//     minStr = "";
//   const count = {};
//   // init count hash table
//   for (const ch of t) count[ch] = (count[ch] ?? 0) + 1;
//   // move
//   const moveLeft = () => {
//     const ch = s[l];
//     if (count.hasOwnProperty(ch)) {
//       if (count[ch] === 0) matches--;
//       count[ch]++;
//     }

//     l++;
//     while (!count.hasOwnProperty(s[l]) && l < r) l++;
//   };
//   const moveRight = (tryLeft = true) => {
//     if (r < s.length - 1) return r++;
//     tryLeft && moveLeft();
//   };
//   const updateMin = () => {
//     const str = s.slice(l, r + 1);
//     console.log(str, matches, count);
//     if (!minStr || str.length < minStr.length) minStr = str;
//     moveLeft();

//     console.log(str, matches, count);
//   };

//   // init pointers
//   while (!count.hasOwnProperty(s[l]) && l <= s.length - t.length) l++;
//   r = l;

//   // go through chars of s
//   while (r < s.length && l <= r) {
//     const ch = s[r];
//     if (!count.hasOwnProperty(ch)) {
//       moveRight();
//       continue;
//     }
//     console.log(count, ch, matches);
//     if (count[ch] > 0) matches++;
//     count[ch]--;

//     if (matches !== t.length) {
//       moveRight();
//       continue;
//     }
//     while (matches === t.length) updateMin();

//     moveRight(false);
//   }

//   return minStr;
// };

/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Time O(N + M) | SpaceO(N + M)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const isMissingArgs = !s.length || !t.length;
  if (isMissingArgs) return "";

  const frequencyMap = getFrequencyMap(t);
  const { start, end } = getWindowPointers(s, t, frequencyMap);

  return getSubString(s, start, end);
};

const getFrequencyMap = (str, frequencyMap = new Map()) => {
  for (const char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  return frequencyMap;
};

const getWindowPointers = (s, t, frequencyMap) => {
  let [left, right, matched, start, end] = [0, 0, 0, 0, s.length + 1];

  while (right < s.length) {
    matched = addRightFrequency(s, right, frequencyMap, matched);

    const canSlide = () => matched === t.length;
    while (canSlide()) {
      const window = right - left + 1;

      const isSmaller = window < end;
      if (isSmaller) {
        [start, end] = [left, window];
      }

      matched = subtractLeftFrequency(s, left, frequencyMap, matched);
      left++;
    }

    right++;
  }

  return { start, end };
};

const addRightFrequency = (s, right, frequencyMap, matched) => {
  const char = s[right];

  if (frequencyMap.has(char)) {
    frequencyMap.set(char, frequencyMap.get(char) - 1);

    const isInWindow = 0 <= frequencyMap.get(char);
    if (isInWindow) matched++;
  }

  return matched;
};

const subtractLeftFrequency = (s, left, frequencyMap, matched) => {
  const char = s[left];

  if (frequencyMap.has(char)) {
    const isOutOfWindow = frequencyMap.get(char) === 0;
    if (isOutOfWindow) matched--;

    frequencyMap.set(char, frequencyMap.get(char) + 1);
  }

  return matched;
};

const getSubString = (s, start, end) =>
  end <= s.length ? s.slice(start, start + end) : "";

console.log(minWindow("ADOBECODEBANC", "ABC")); //BANC
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
// console.log(minWindow("bbaac", "aba"));
console.log(minWindow("acbba", "aab"));
