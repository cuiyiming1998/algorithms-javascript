/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = []
  const len: number = pushed.length
  for (let i = 0, j = 0; i < len; i++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }
  return stack.length === 0
}
// @lc code=end
