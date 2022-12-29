/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // 思路:
  // 1. 使用set 过后如果length小于原数组, 则说明有重复
  // 2. 使用map保存每一个值 如果遇到map中存在的则有重复

  // return new Set(nums).size < nums.length;

  let map = new Map<number, number>()
  for (const num of nums) {
    if (map.has(num)) {
      return true
    }
    map.set(num, num)
  }
  return false
}
// @lc code=end
