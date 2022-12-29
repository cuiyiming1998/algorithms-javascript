/*
 * @lc app=leetcode.cn id=1460 lang=typescript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
function canBeEqual(target: number[], arr: number[]): boolean {
  target.sort((a, b) => a - b)
  arr.sort((a, b) => a - b)

  return target.toString() === arr.toString()
}
// @lc code=end
