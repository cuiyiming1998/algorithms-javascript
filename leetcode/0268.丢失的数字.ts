/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  // 思路: set

  let set = new Set<number>()
  const n: number = nums.length
  for (let i = 0; i < n; i++) {
    set.add(nums[i])
  }

  let res = -1
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      res = i
      break
    }
  }

  return res
}
// @lc code=end
