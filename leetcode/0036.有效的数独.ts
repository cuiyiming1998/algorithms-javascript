/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  // 思路:
  // 使用map记录每一行每一列和每一个九宫格中, 每个数字出现的次数
  // 由于值都为数字 可以用数组来记录
  // 每一个数字进来, 对应的行和列 下标就为num - 1
  // 最后判断行和列下标的值 是否 > 1
  const rows: number[][] = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const columns: number[][] = new Array(9)
    .fill(0)
    .map(() => new Array(9).fill(0))
  const subboxes: number[][][] = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const index: number = Number(num) - 1
        rows[i][index]++
        columns[j][index]++
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        const row: number = rows[i][index]
        const col: number = columns[j][index]
        const subbox: number
          = subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]
        if (row > 1 || col > 1 || subbox > 1)
          return false
      }
    }
  }
  return true
}
// @lc code=end
