/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let ans: string = ''
  if (strs.length <= 0) {
    return ans
  }
  let first: string = strs[0]
  let i: number = 0
  for (; i < first.length; i++) {
    let j: number = 0
    let flag: boolean = true
    let str = first.charAt(i)
    while (j < strs.length) {
      if (strs[j][i] !== str) {
        flag = false
      }
      j++
    }
    if (!flag) {
      break
    }
  }
  ans = first.substring(0, i)
  return ans
}
// @lc code=end
