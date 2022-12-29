/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  // 思路:
  // 双向map存储 判断是否相同
  if (s.length !== t.length) {
    return false
  }
  const sm = new Map<string, string>()
  const tm = new Map<string, string>()

  for (let i = 0; i < s.length; i++) {
    const sv = sm.get(s[i])
    const tv = tm.get(t[i])
    if ((sv && sv !== t[i]) || (tv && tv !== s[i])) {
      return false
    }
    sm.set(s[i], t[i])
    tm.set(t[i], s[i])
  }
  return true
}
// @lc code=end
