/*
 * @lc app=leetcode.cn id=592 lang=typescript
 *
 * [592] 分数加减运算
 */

// @lc code=start
function fractionAddition(expression: string): string {
  let denominator = 0 // 分子
  let numerator = 1 // 分母
  let index = 0
  let len: number = expression.length

  while (index < len) {
    let _denominator = 0
    let sign = 1 // 符号
    if ('-' === expression[index] || '+' === expression[index]) {
      sign = '-' === expression[index] ? -1 : 1
      index++
    }
    while (index < len && isDigit(expression[index])) {
      _denominator =
        _denominator * 10 + expression[index].charCodeAt(0) - '0'.charCodeAt(0)
      index++
    }
    _denominator = _denominator * sign
    index++

    let _numerator = 0
    while (index < len && isDigit(expression[index])) {
      _numerator =
        _numerator * 10 + expression[index].charCodeAt(0) - '0'.charCodeAt(0)
      index++
    }

    denominator = denominator * _numerator + _denominator * numerator
    numerator *= _numerator
  }

  if (denominator === 0) {
    return '0/1'
  }
  const g = gcd(Math.abs(denominator), numerator)
  return Math.floor(denominator / g) + '/' + Math.floor(numerator / g)
}

// 获取最大公约数
const gcd = (a, b) => {
  let remainder = a % b
  while (0 !== remainder) {
    a = b
    b = remainder
    remainder = a % b
  }
  return b
}

const isDigit = (n) => {
  return parseFloat(n).toString() === 'NaN' ? false : true
}
// @lc code=end
