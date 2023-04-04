/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n < 1)
    return false

  while (n % 5 === 0)
    n /= 5

  while (n % 3 === 0)
    n /= 3

  while (n % 2 === 0)
    n /= 2

  return n === 1
}
// @lc code=end
