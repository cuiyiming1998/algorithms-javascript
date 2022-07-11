/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  const border = 2**31
  let res = 0
  let num = Math.abs(x)
  while (num > 0) {
    res = res * 10 + num % 10
    num = Math.floor(num / 10)
  }
  if (res > border || res < -border) {
    return 0
  }
  return x > 0 ? res : -res
};
// @lc code=end

