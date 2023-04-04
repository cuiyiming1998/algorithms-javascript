/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  // 思路: 滑动窗口
  // 遍历每一个s2中长度为s1的子串 判断子串和s1中的每个字符个数是否相等
  const n: number = s1.length
  const m: number = s2.length
  if (n > m)
    return false

  const arr1: number[] = new Array(26).fill(0)
  const arr2: number[] = new Array(26).fill(0)

  for (let i = 0; i < n; i++) {
    arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    arr2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  if (arr1.toString() === arr2.toString())
    return true

  for (let i = n; i < m; i++) {
    arr2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    arr2[s2[i - n].charCodeAt(0) - 'a'.charCodeAt(0)]--
    if (arr1.toString() === arr2.toString())
      return true
  }
  return false
}
// @lc code=end
