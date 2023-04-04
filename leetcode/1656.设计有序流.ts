/*
 * @lc app=leetcode.cn id=1656 lang=typescript
 *
 * [1656] 设计有序流
 */

// @lc code=start
class OrderedStream {
  // 思路: 模拟
  // 如果插入位置在ptr 则移动 然后Push
  private ptr: number
  private data: string[]
  constructor(n: number) {
    this.ptr = 0
    this.data = new Array<string>(n)
  }

  insert(idKey: number, value: string): string[] {
    this.data[--idKey] = value
    const res: string[] = []
    while (this.ptr < this.data.length && this.data[this.ptr])
      res.push(this.data[this.ptr++])

    return res
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end
