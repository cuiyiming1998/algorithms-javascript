/*
 * @lc app=leetcode.cn id=593 lang=typescript
 *
 * [593] 有效的正方形
 */

// @lc code=start
function validSquare(
  p1: number[],
  p2: number[],
  p3: number[],
  p4: number[],
): boolean {
  // 思路: 直接模拟
  // 从4个点中选3个点 检查是否能构成直角三角形
  // 保存直角边长 和剩下的作比较 如果都相等 则true
  return (
    calc(p1, p2, p3) && calc(p1, p2, p4) && calc(p1, p3, p4) && calc(p2, p3, p4)
  )
}

function calc(a: number[], b: number[], c: number[]): boolean {
  const l1: number = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
  const l2: number = (a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2
  const l3: number = (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2
  if (!l1 || !l2 || !l3)
    return false

  const flag
    = (l1 == l2 && l1 + l2 == l3)
    || (l1 == l3 && l1 + l3 == l2)
    || (l2 == l3 && l2 + l3 == l1)
  return flag
}
// @lc code=end
