/*
 * @lc app=leetcode.cn id=1758 lang=typescript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
function minOperations(s: string): number {
  // 思路: 交替字符串 无非就是'01010101...'或者'10101010'
  // 比较s变成两种字符串的操作数 取最小的次数

  let count1 = 0 // 010101的次数
  let count2 = 0 // 101010的次数

  //  11010111
  for (let i = 0; i < s.length; i++) {
    if (i & 1) {
      s[i] === '0' ? count1++ : count2++
    }
    else {
      s[i] === '1' ? count1++ : count2++
    }
  }

  return Math.min(count1, count2)
}
// @lc code=end
