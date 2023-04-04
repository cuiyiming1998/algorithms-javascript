/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
  // 思路: start队头 end队尾
  // start % k   end % K 为实际位置
  private len = 0
  private start = 0
  private end = 0
  private queue: number[] = []
  constructor(k: number) {
    this.len = k
    this.queue.length = k
  }

  enQueue(value: number): boolean {
    // 在[end % len]处存入值 队尾后移一位
    if (this.isFull())
      return false

    this.queue[this.end % this.len] = value
    this.end++
    return true
  }

  deQueue(): boolean {
    // 队头向后移一位
    if (this.isEmpty())
      return false

    this.start++
    return true
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.start % this.len]
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[(this.end - 1) % this.len]
  }

  isEmpty(): boolean {
    // end === start 即为空
    return this.end === this.start
  }

  isFull(): boolean {
    // end - start === len 即为队列满
    return this.len === this.end - this.start
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
