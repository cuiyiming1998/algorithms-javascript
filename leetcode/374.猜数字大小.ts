/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// @ts-nocheck
function guessNumber(n: number): number {
  // 思路: 二分
  let left = 1
  let right: number = n

  while (left < right) {
    const mid: number = Math.floor(left + (right - left) / 2)
    const res: number = guess(mid)
    if (res === 0)
      return mid

    if (res === -1)
      right = mid - 1
    else if (res === 1)
      left = mid + 1
  }

  return left
}
// @lc code=end
