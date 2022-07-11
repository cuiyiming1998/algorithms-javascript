/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let targetMap = new Map()
  for (let i = 0; i < nums.length; i ++) {
    let current = nums[i]
    let targetNum = target - current
    let targetIndex = targetMap.get(targetNum)
    if (targetIndex === undefined) {
      targetMap.set(current, i)
    } else {
      return [targetIndex, i]
    }
  }
  return []
};
// @lc code=end

