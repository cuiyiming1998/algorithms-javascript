/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  // 思路:
  // 先算出全部数组和为total
  // 遍历到第i个的时候, 记他的左侧为sum
  // 那么右侧就为total - nums[i] - sum
  // 据题意可知左右元素相等
  // sum = total - nums[i] - sum
  // 2 * sum + nums[i] = total
  let res: number = -1
  const total = nums.reduce((a, b) => a + b, 0)
  let sum = 0

  for (let i = 0; i < nums.length; i ++) {
    if (2 * sum + nums[i] === total) {
      return i
    }
    sum += nums[i]
  }
  return -1
};
// @lc code=end

