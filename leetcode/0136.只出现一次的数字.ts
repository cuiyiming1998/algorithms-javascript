/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // 思路: 异或
  // 任何数和0异或 结果都等于它本身
  // 任何数和自身异或 结果都等于0
  // 异或运算满足交换律和结合律
  let res = 0
  for (const i of nums) {
    res ^= i
  }
  return res
}
// @lc code=end
