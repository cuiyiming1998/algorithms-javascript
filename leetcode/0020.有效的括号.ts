/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const len = s.length
  if (1 === len % 2) {
    return false
  }

  const map = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  const stack: string[] = []
  for (const i of s) {
    if (map.has(i)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(i)) {
        return false
      }
      stack.pop()
    } else {
      stack.push(i)
    }
  }
  return !stack.length
}

// @lc code=end
