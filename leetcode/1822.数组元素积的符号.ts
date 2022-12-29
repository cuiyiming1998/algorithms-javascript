/*
 * @lc app=leetcode.cn id=1822 lang=typescript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
function arraySign(nums: number[]): number {
  // 暴力解法:
  // const sum: number = nums.reduce((pre: number, cur: number) => {
  //   return pre * cur
  // }, 1)

  // const signFunc = (x: number): number => {
  //   if (!x) {
  //     return 0
  //   }
  //   return x > 0 ? 1 : -1
  // }
  // return signFunc(sum)

  // 思路:
  // 如果数组中存在0 那么结果就是0
  // 数组中遇到一个-1 就把结果取反
  let res = false

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (!n) {
      return 0
    }
    if (n < 0) {
      res = !res
    }
  }

  return res ? -1 : 1
}
// @lc code=end
