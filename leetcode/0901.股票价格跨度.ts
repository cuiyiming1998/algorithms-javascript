/*
 * @lc app=leetcode.cn id=901 lang=typescript
 *
 * [901] 股票价格跨度
 */

// @lc code=start
class StockSpanner {
    // 思路: 单调栈
    // 栈的元素是[当前天数, 当前的价格]
    // next里 循环栈 将小于等于price的全部弹出
    // 得到的栈顶[0]就是上次大于Price的天数
    // 栈顶[1]就是上次的价格
    // 将本次入栈, 然后计算天数
    public stack: number[][] = []
    public day: number
    constructor() {
      this.stack.push([-1, Infinity])
      this.day = -1
    }

    next(price: number): number {
      this.day ++
      while(price >= this.stack[this.stack.length - 1][1]) {
        this.stack.pop()
      }
      let res = this.day - this.stack[this.stack.length - 1][0]
      this.stack.push([this.day, price])
      return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

