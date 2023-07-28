/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let res = ''
  const maxLength = Math.max(a.length, b.length)

  const aa = a.padStart(maxLength, '0')
  const bb = b.padStart(maxLength, '0')

  // 10
  // 01
  let flag = 0 // 进位
  let sum = 0

  for (let i = maxLength - 1; i >= 0; i--) {
    const numA = parseInt(aa[i])
    const numB = parseInt(bb[i])
    sum = numA + numB + flag

    flag = Math.floor(sum / 2)

    res = `${sum % 2}${res}`
  }

  if (flag)
    res = `1${res}`

  return res
}
// @lc code=end
