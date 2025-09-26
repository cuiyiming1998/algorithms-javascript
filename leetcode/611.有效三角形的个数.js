/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 *
 * https://leetcode.cn/problems/valid-triangle-number/description/
 *
 * algorithms
 * Medium (54.86%)
 * Likes:    663
 * Dislikes: 0
 * Total Accepted:    137.8K
 * Total Submissions: 250.5K
 * Testcase Example:  '[2,2,3,4]'
 *
 * 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [2,2,3,4]
 * 输出: 3
 * 解释:有效的组合是:
 * 2,3,4 (使用第一个 2)
 * 2,3,4 (使用第二个 2)
 * 2,2,3
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [4,2,3,4]
 * 输出: 4
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
let triangleNumber = function(nums) {
  if (nums.length < 3) {
    return 0
  }

  // 两边之和大于第三边 排序
  nums.sort((a, b) => a - b)

  let result = 0

  // 固定最大的边，用双指针找另外两条边
  // [2, 2, 3, 4]
  //  👆🏻    👆🏻
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0
    let right = i - 1

    while (left < right) {
      // 三角形条件：两边之和大于第三边
      if (nums[left] + nums[right] > nums[i]) {
        // 如果 nums[left] + nums[right] > nums[i]
        // 那么 nums[left+1] + nums[right], nums[left+2] + nums[right], ..., nums[right-1] + nums[right]
        // 都满足条件，共有 right - left 个组合
        result += right - left
        right--
      } else {
        left++
      }
    }
  }

  return result
}
// @lc code=end
