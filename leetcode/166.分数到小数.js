/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 *
 * https://leetcode.cn/problems/fraction-to-recurring-decimal/description/
 *
 * algorithms
 * Medium (33.76%)
 * Likes:    525
 * Dislikes: 0
 * Total Accepted:    78K
 * Total Submissions: 229.5K
 * Testcase Example:  '1\n2'
 *
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。
 *
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 *
 * 如果存在多个答案，只需返回 任意一个 。
 *
 * 对于所有给定的输入，保证 答案字符串的长度小于 10^4 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：numerator = 1, denominator = 2
 * 输出："0.5"
 *
 *
 * 示例 2：
 *
 *
 * 输入：numerator = 2, denominator = 1
 * 输出："2"
 *
 *
 * 示例 3：
 *
 *
 * 输入：numerator = 4, denominator = 333
 * 输出："0.(012)"
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31 <= numerator, denominator <= 2^31 - 1
 * denominator != 0
 *
 *
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = function (numerator, denominator) {
  // 整除的情况
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString()
  }

  // 不整除的情况
  const result = []

  // 整数部分
  if (numerator < 0 ^ denominator < 0) {
    result.push('-')
  }
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  const integer = Math.floor(numerator / denominator)
  result.push(integer.toString())
  result.push('.')

  // 小数部分
  const fractionPart = []
  const remainderIndexDict = new Map()
  let remainder = numerator % denominator
  let index = 0

  while (remainder !== 0 && !remainderIndexDict.has(remainder)) {
    // 余数补0取余数获取小数位, 如果字典里有余数说明遇到了循环
    remainderIndexDict.set(remainder, index)
    remainder *= 10
    const fraction = Math.floor(remainder / denominator)
    fractionPart.push(fraction.toString())
    remainder %= denominator
    index++
  }

  // 无限循环
  if (remainder !== 0) {
    // 找到循环的起始位置
    const startIndex = remainderIndexDict.get(remainder)
    // 插入括号
    fractionPart.splice(startIndex, 0, '(')
    fractionPart.push(')')
  }

  result.push(fractionPart.join(''))
  result.push('')
  return result.join('')
}
// @lc code=end
