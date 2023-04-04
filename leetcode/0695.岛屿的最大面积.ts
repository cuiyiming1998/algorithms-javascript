/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
  // 思路: dfs或者bfs
  let s = 0

  const dfs = (x: number, y: number): number => {
    if (!grid[x] || !grid[x][y])
      return 0

    grid[x][y] = 0
    let sum = 1
    sum += dfs(x + 1, y)
    sum += dfs(x - 1, y)
    sum += dfs(x, y + 1)
    sum += dfs(x, y - 1)

    return sum
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j])
        s = Math.max(s, dfs(i, j))
    }
  }
  return s
}
// @lc code=end
