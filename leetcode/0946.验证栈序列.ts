/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack: number[] = []
  let len: number = pushed.length
  for (let i = 0, j = 0; i < len; i ++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j ++
    }
  }
  return 0 === stack.length
};
// @lc code=end

