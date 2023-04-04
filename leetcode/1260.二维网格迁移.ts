/*
 * @lc app=leetcode.cn id=1260 lang=typescript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
  // 思路: 把二维数组转化成一维数组
  // 相当于把数组向右挪k次 循环
  // m为行 n为列 grid[i][j]的下标为 i * n + j
  // 迁移k次后下标为 (i * n + j + k) % (m * n)
  // 在网格的位置为
  const m: number = grid.length
  const n: number = grid[0].length
  const res: number[][] = []
  for (let i = 0; i < m; i++) {
    const row: number[] = []
    for (let j = 0; j < n; j++)
      row.push(0)

    res.push(row)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const index = (i * n + j + k) % (m * n)
      res[Math.floor(index / n)].splice(index % n, 1, grid[i][j])
    }
  }

  return res
}
// @lc code=end
