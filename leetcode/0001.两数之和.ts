/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const targetMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const targetNum = target - current
    const targetIndex = targetMap.get(targetNum)
    if (targetIndex === undefined)
      targetMap.set(current, i)
    else
      return [targetIndex, i]
  }
  return []
}
// @lc code=end
