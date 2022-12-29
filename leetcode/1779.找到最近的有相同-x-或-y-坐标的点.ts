/*
 * @lc app=leetcode.cn id=1779 lang=typescript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  // 思路: 按照题意模拟

  let res = -1
  let distance = Infinity
  let len: number = points.length

  for (let i = 0; i < len; i++) {
    const current: number[] = points[i]
    const currentX: number = current[0]
    const currentY: number = current[1]
    if (x === currentX) {
      const currentDist: number = Math.abs(y - currentY)
      if (distance > currentDist) {
        distance = currentDist
        res = i
      }
    } else if (y === currentY) {
      const currentDist: number = Math.abs(x - currentX)
      if (distance > currentDist) {
        distance = currentDist
        res = i
      }
    }
  }
  return res
}
// @lc code=end
