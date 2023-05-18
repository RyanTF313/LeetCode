// NAME: 14. Longest Common Prefix

// INSTRUCTIONS:
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// SOLUTION:
var longestCommonPrefix = function(strs) {
    // check border cases size 1 array and empty first word)
  if (!strs[0] || strs.length ==  1) return strs[0] || "";
  let i = 0;
  // while all words have the same character at position i, increment i
  while(strs[0][i] && strs.every(w => w[i] === strs[0][i]))
    i++;
  
  // prefix is the substring from the beginning to the last successfully checked i
  return strs[0].substr(0, i);
};

// SOLUTION 2
var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
