/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  // 思路: 映射
  // (i, j) -> i * n + j
  // i = Math.floor(x / n)
  // j = x % n
  // n 为列数 即 mat[0].length
  const m: number = mat.length
  const n: number = mat[0].length

  if (m * n !== r * c)
    return mat

  const res: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0))
  for (let i = 0; i < m * n; ++i)
    res[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n]

  return res
}
// @lc code=end
