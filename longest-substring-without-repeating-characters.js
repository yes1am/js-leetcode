// 最长不重复子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/

var lengthOfLongestSubstring = function(s) {
  let max = s.length ? 1 : 0;
  let start = 0;
  let ret = 0;

  for(let i = 0; i < s.length; i++) {
      let number = ret ? ret - 1 : 0;
      for(let j = start || i + 1; j <= s.length; j++) {
        const slice = s.slice(i,j)
          if(!slice.includes(s[j])) {
              number++;
              max = Math.max(max,number);
              start = 0;
              ret = 0;
          } else {
            start = j;
            ret = j - i;
            break;
          }
      }
  }
  return max;
};

// console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("bbbb"))
console.log(lengthOfLongestSubstring("abcabcaa"))