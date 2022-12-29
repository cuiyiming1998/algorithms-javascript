/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
  let str = ''
  let arr = [
    {
      name: 'M',
      value: 1000
    },
    {
      name: 'CM',
      value: 900
    },
    {
      name: 'D',
      value: 500
    },
    {
      name: 'CD',
      value: 400
    },
    {
      name: 'C',
      value: 100
    },
    {
      name: 'XC',
      value: 90
    },
    {
      name: 'L',
      value: 50
    },
    {
      name: 'XL',
      value: 40
    },
    {
      name: 'X',
      value: 10
    },
    {
      name: 'IX',
      value: 9
    },
    {
      name: 'V',
      value: 5
    },
    {
      name: 'IV',
      value: 4
    },
    {
      name: 'I',
      value: 1
    }
  ]
  while (num > 0) {
    if (arr[0].value <= num) {
      const { value, name } = arr[0]
      num -= value
      str += name
    } else {
      arr.shift()
    }
  }
  return str
}
// @lc code=end
