/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 思路: 二分查找
  let left = 0
  let right: number = nums.length - 1
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    const midNum = nums[mid]
    if (target === midNum) {
      return mid
    } else if (target > midNum) {
      left = mid + 1
    } else if (target < midNum) {
      right = mid - 1
    }
  }
  return left
}
// @lc code=end
