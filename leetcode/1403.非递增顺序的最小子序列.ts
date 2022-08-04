/*
 * @lc app=leetcode.cn id=1403 lang=typescript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
function minSubsequence(nums: number[]): number[] {
  // 思路: 贪心
  // 从小到大排列 从后面取值 第一次满足的即为最大的序列
  let sum: number = 0
  let cur: number = 0
  let res: number[] = []
  nums.sort((a, b) => a - b)
  for (const num of nums) {
    sum += num
  }
  for (let i = nums.length - 1; i >= 0; i --) {
    cur += nums[i]
    res.push(nums[i])
    if (sum - cur < cur) {
      break
    }
  }
  return res
};
// @lc code=end

