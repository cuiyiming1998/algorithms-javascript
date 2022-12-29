/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  class Automaton {
    public state // 执行阶段
    public sign // 正负号
    public optionMap // 操作map [执行阶段state, [空格, 正负号, 数字, 其他]]
    public answer
    constructor() {
      this.state = 'start'
      this.sign = 1
      this.answer = 0
      this.optionMap = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
      ])
    }
    // 获取状态
    getIndex(str) {
      if (' ' === str) {
        return 0
      } else if ('-' === str || '+' === str) {
        return 1
      } else if (!isNaN(str)) {
        return 2
      } else {
        return 3
      }
    }

    // 执行转换
    get(str) {
      // 更新state
      this.state = this.optionMap.get(this.state)[this.getIndex(str)]
      if ('in_number' === this.state) {
        this.answer = this.answer * 10 + parseInt(str)
        this.answer =
          1 === this.sign
            ? Math.min(this.answer, Math.pow(2, 31) - 1)
            : Math.min(this.answer, -Math.pow(-2, 31))
      } else if ('signed' === this.state) {
        this.sign = '+' === str ? 1 : -1
      }
    }
  }

  let automaton = new Automaton()
  for (let str of s) {
    automaton.get(str)
  }

  return automaton.sign * automaton.answer
}
// @lc code=end
