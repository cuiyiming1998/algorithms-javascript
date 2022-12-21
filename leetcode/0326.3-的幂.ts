/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3 的幂
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  while (n !== 0 && n % 3 == 0) {
    n = Math.floor(n / 3)
  }
  return 1 === n
};
// @lc code=end

