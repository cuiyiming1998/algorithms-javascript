/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  // 思路: 双指针
  // 头尾取平方, 比较大小, 放进新数组
  let left: number = 0
  let right: number = nums.length - 1
  let res: number[] = []

  while (left <= right) {
    const leftNum = nums[left] ** 2
    const rightNum = nums[right] ** 2
    if (leftNum > rightNum) {
      res.unshift(leftNum)
      left ++
    } else {
      res.unshift(rightNum)
      right --
    }
  }

  return res
};
// @lc code=end

