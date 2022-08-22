/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let res: number[][] = []

  for (let i = 0; i < numRows; i ++) {
    // 构建当前行 全为1
    let row: number[] = new Array(i + 1).fill(1)
    // 和上一行的j - 1 j进行计算 全加完就为当前行的值
    for (let j = 1; j < row.length - 1; j ++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(row)
  }

  return res
};
// @lc code=end

