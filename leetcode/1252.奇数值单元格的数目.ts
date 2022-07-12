/*
 * @lc app=leetcode.cn id=1252 lang=typescript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
function oddCells(m: number, n: number, indices: number[][]): number {
  // 基于暴力法优化
  // 由于每次只会将行和列的数+1, 因此使用两个数组分别记录每一行和每一列被增加的次数
  // 每一次[r, c] 将row[i]和col[c]的值分别+1
  // 最后(x, y)位置的数为row[x] + col[y]
  const rows: number[] = new Array(m).fill(0);
  const cols: number[] = new Array(n).fill(0);

  for (const index of indices) {
    rows[index[0]] ++
    cols[index[1]] ++
  }
  let res = 0
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      if (0 !== ((rows[i] + cols[j]) & 1)) {
        res ++
      }
    }
  }
  return res
};
// @lc code=end

