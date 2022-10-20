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
  let m: number = matrix.length
  let n: number = matrix[0].length
  let rows: boolean[] = new Array(m).fill(false)
  let cols: boolean[] = new Array(n).fill(false)

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (0 === matrix[i][j]) [
        rows[i] = cols[j] = true
      ]
    }
  }

  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0
      }
    }
  }

};
// @lc code=end

