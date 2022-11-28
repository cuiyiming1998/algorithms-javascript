/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
	let rows: number[][] = []
	for (let i = 0; i < rowIndex + 1; i++) {
		let row: number[] = new Array(i + 1).fill(1)
		for (let j = 1; j < row.length - 1; j++) {
			row[j] = rows[i - 1][j - 1] + rows[i - 1][j]
		}
		rows.push(row)
	}

	return rows[rowIndex]
}
// @lc code=end
