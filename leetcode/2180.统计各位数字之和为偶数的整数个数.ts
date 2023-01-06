/*
 * @lc app=leetcode.cn id=2180 lang=typescript
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
function countEven(num: number): number {
  let res = 0

  for (let i = 1; i <= num; i++) {
    let x = i
    let sum = 0

    // 削减位数 sum每次加最后一位的数字
    while (x !== 0) {
      sum += x % 10
      x = Math.floor(x / 10)
    }

    if (sum % 2 === 0) {
      res += 1
    }
  }

  return res
}
// @lc code=end
