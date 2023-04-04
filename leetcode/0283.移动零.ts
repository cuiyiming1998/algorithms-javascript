/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 思路: 双指针
  // left = right = 0
  // 左侧都是正常数 右侧都是0 左指针遇到非零数 就和右侧交换
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
}
// @lc code=end
