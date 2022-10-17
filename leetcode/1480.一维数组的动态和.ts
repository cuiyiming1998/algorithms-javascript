/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i ++) {
    nums[i] += nums[i - 1]
  }

  return nums
};
// @lc code=end

