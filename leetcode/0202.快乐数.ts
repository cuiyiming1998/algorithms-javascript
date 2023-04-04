/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function getNext(num: number) {
  return num
    .toString()
    .split('')
    .map(i => Number(i) ** 2)
    .reduce((a, b) => a + b)
}
function isHappy(n: number): boolean {
  // 思路: 快慢指针
  // 如果不是快乐数 最后会形成环 也就是快慢指针会相遇
  let slow: number = n
  let fast: number = getNext(n)

  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }

  return fast === 1
}
// @lc code=end
