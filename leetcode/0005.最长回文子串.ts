/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s
  }
  let res: string = ''
  for (let i = 0; i < s.length; i ++) {
    let s1 = judge(s, i, i)
    let s2 = judge(s, i, i + 1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
};

function judge(s: string, left: number, right: number) {
  while (left >=0 && right < s.length && s[left] === s[right]) {
    left --
    right ++
  }
  return s.substring(left + 1, right)
}
// @lc code=end

