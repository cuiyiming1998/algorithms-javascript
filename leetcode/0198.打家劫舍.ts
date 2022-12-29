/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  // 思路: 动态规划
  // dp[n] = Math.max(dp[n - 1], dp[n - 2] + num)

  const len: number = nums.length
  if (!len) {
    return 0
  }
  let dp: number[] = new Array(len + 1)
  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[len]
}
// @lc code=end
