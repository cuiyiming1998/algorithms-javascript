/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x === 0)
    return true

  if (x < 0 || x % 10 === 0)
    return false

  let reverseX = 0
  let rest = x
  while (rest >= 10) {
    reverseX = reverseX * 10 + (rest % 10)
    rest = Math.floor(rest / 10)
  }
  return x === reverseX * 10 + rest
}
// @lc code=end
