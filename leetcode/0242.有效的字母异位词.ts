/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  return s.split('').sort().toString() === t.split('').sort().toString()
}
// @lc code=end
