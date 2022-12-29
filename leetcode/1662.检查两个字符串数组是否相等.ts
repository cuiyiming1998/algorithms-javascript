/*
 * @lc app=leetcode.cn id=1662 lang=typescript
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  // return word1.join('') === word2.join('')

  // 思路: 双指针
  const m: number = word1.length
  const n: number = word2.length

  // i, j 分别为word1, word2的位置
  // p, q 分别为word1[i], word2[j]的位置
  let i = 0,
    j = 0,
    p = 0,
    q = 0
  while (i < m && j < n) {
    if (word1[i][p] !== word2[j][q]) {
      return false
    }
    p += 1
    q += 1
    if (p === word1[i].length) {
      p = 0
      i++
    }
    if (q === word2[j].length) {
      q = 0
      j++
    }
  }
  return i === m && j === n
}
// @lc code=end
