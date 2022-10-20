/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // 思路: 每次确定一个mid值
  // 用中间值去和target比较
  // 如果大于target, 则说明目标值在左边, right赋值为mid - 1
  // 如果小于target, 则说明目标值在右边, left赋值为mid + 1
  // 重复二分 直到left > right
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 寻找中间的数
    // 这里可以使用 (left + right) / 2
    // 或者 (left + right) >> 1 这种运算好像比上面快
    const mid = Math.floor((right - left) / 2) + left
    let num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      right = mid - 1
    } else if (num < target) {
      left = mid + 1
    }
  }
  return -1
};
// @lc code=end

