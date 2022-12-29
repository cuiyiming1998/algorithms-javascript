/*
 * @lc app=leetcode.cn id=1684 lang=typescript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set<string>()
  for (const i of allowed) {
    set.add(i)
  }
  let res = 0
  for (const word of words) {
    let matched = true

    for (const c of word) {
      if (!set.has(c)) {
        matched = false
        break
      }
    }
    if (matched) {
      res++
    }
  }
  return res
}
// @lc code=end
