/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  // 底为right - left
  // 高为height[left]和height[right]的最小值
  let s = Math.min(height[left], height[right]) * (right - left)
  while (left < right) {
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
    s = Math.max(s, Math.min(height[left], height[right]) * (right - left))
  }
  return s
}
// @lc code=end
