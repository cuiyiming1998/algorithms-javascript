/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 思路:
  // sum > 0 说明结果可能会增加 直接加num
  // 相反 直接舍弃 sum = 当前num
  // 将舍弃后的值和原sum作比较 取最大值

  let ans: number = nums[0]
  let sum: number = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(sum, ans)
  }
  return ans
};
// @lc code=end

