/*
 * @lc app=leetcode.cn id=1413 lang=typescript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
function minStartValue(nums: number[]): number {
  // 思路:
  // startValue + sum >= 1
  // sum >= 1 - startValue
  let startValue = 0
  let sum = 0
  for (const num of nums) {
    sum += num
    startValue = Math.min(startValue, sum)
  }
  return 1 - startValue
}
// @lc code=end
