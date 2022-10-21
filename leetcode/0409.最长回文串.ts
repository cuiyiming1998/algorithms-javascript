/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
  // 思路: 抽出所有出现偶数次的字符 然后Len + 2
  // 剩下如果有出现奇数次数的字符 len + 1
  let map = new Map<string, number>()
  let res: number = 0

  for (const l of s) {
    let current: number | undefined = map.get(l)
    if (!current) {
      map.set(l, 1)
    } else {
      res += 2
      map.delete(l)
    }
  }

  // 判断下是否全是偶数次
  if (res < s.length) {
    res += 1
  }

  return res
};
// @lc code=end

