/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
  const map: number[][] = new Array(mat.length)
  const queue: number[][] = []
  for (let i = 0; i < mat.length; i++) {
    map[i] = new Array(mat[0].length).fill(Infinity)
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        queue.push([i, j])
        map[i][j] = 0
      }
    }
  }
  // 寻找0旁边的1
  while (queue.length) {
    const size: number = queue.length
    for (let k = 0; k < size; k++) {
      const arr = queue.shift()
      if (arr) {
        const [i, j] = arr
        if (i - 1 >= 0 && map[i - 1][j] > map[i][j] + 1) {
          map[i - 1][j] = map[i][j] + 1
          queue.push([i - 1, j])
        }
        if (i + 1 < map.length && map[i + 1][j] > map[i][j] + 1) {
          map[i + 1][j] = map[i][j] + 1
          queue.push([i + 1, j])
        }
        if (j - 1 >= 0 && map[i][j - 1] > map[i][j] + 1) {
          map[i][j - 1] = map[i][j] + 1
          queue.push([i, j - 1])
        }
        if (j + 1 < map[0].length && map[i][j + 1] > map[i][j] + 1) {
          map[i][j + 1] = map[i][j] + 1
          queue.push([i, j + 1])
        }
      }
    }
  }

  return map
}
// @lc code=end
