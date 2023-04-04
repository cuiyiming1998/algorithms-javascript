/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  // 思路: 双指针
  // 匹配成功 同时++
  // 不匹配 t指针++
  // 判断最后s指针和s的长度相同

  if (s.length === 0)
    return true

  let sPos = 0
  let tPos = 0
  while (tPos < t.length && sPos < s.length) {
    if (s[sPos] === t[tPos]) {
      sPos++
    }
    tPos++
  }
  return sPos === s.length
}
// @lc code=end
