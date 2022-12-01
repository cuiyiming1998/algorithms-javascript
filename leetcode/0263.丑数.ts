/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n < 1) {
    return false
  }
  while (0 === n % 5) {
    n /= 5
  }
  while (0 === n % 3) {
    n /= 3
  }
  while (0 === n % 2) {
    n /= 2
  }

  return 1 === n
};
// @lc code=end

