/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  // 思路: 深度优先DFS
  // 触碰边界 / 当前颜色 === color / 当前颜色 !== 初始颜色 直接return
  const c: number = image[sr][sc]
  const dfs = (x, y) => {
    if (
      undefined === image[x]
      || undefined === image[x][y]
      || color === image[x][y]
      || c !== image[x][y]
    )
      return

    image[x][y] = color
    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
  }
  dfs(sr, sc)
  return image
}
// @lc code=end
