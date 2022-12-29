/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  let res = 0
  if (dividend === -(2 ** 31) && divisor === -1) {
    return 2 ** 31 - 1
  }
  if (dividend === -(2 ** 31) && divisor === 1) {
    return -(2 ** 31)
  }
  return res
}
// @lc code=end
