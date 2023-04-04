/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  // 思路: 从后往前遍历
  let index = s.length - 1
  let len = 0
  while (s[index] === ' ') {
    index--
  }
  while (s[index] !== ' ' && index >= 0) {
    len++
    index--
  }

  return len
}
// @lc code=end
