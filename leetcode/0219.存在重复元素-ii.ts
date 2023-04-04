/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const curr: number = nums[i]
    if (map.has(curr) && i - map.get(curr) <= k)
      return true

    map.set(curr, i)
  }
  return false
}
// @lc code=end
