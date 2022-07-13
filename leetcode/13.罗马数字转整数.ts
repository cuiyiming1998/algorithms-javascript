/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  let ans: number = 0
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  let i = 0
  while (i < s.length) {
    if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
      ans += map[s.substring(i, i + 2)]
      i += 2
    } else {
      ans += map[s.substring(i, i + 1)]
      i ++
    }
  }
  return ans
}
// @lc code=end
