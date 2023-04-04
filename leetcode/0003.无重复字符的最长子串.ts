/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const len = s.length
  let maxLength = 0
  const set = new Set()
  let j = 0
  for (let i = 0; i < len; i++) {
    if (!set.has(s[i])) {
      // 如果没有
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size)
    }
    else {
      // 如果有，则删除
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }
  return maxLength
}
// @lc code=end
