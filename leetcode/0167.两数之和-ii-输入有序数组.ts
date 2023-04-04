/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // 思路: 1. 二分
  // 固定第一个数 第二个数就是target - number
  // 因为是有序的 二分查找另一个数
  // 2. 双指针
  // left和right
  const len: number = numbers.length
  let left = 0
  let right: number = len
  while (left <= right) {
    const sum: number = numbers[left] + numbers[right]
    if (sum === target)
      return [left + 1, right + 1]
    else if (sum < target) {
      left++
    }
    else {
      right--
    }
  }
  return [-1, -1]
}
// @lc code=end
