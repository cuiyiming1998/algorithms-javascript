/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m: number = matrix.length
  const n: number = matrix[0].length
  const rows: boolean[] = new Array(m).fill(false)
  const cols: boolean[] = new Array(n).fill(false)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0)
        [(rows[i] = cols[j] = true)]
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j])
        matrix[i][j] = 0
    }
  }
}
// @lc code=end
