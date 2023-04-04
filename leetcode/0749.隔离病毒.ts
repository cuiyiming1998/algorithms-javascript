/*
 * @lc app=leetcode.cn id=749 lang=typescript
 *
 * [749] 隔离病毒
 */

// @lc code=start
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
const containVirus = function (isInfected) {
  // 思路: 真不会 复制的
  const m = isInfected.length
  const n = isInfected[0].length
  let ans = 0
  while (true) {
    const neighbors = []
    const firewalls = []
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        if (isInfected[i][j] === 1) {
          const queue: number[][] = []
          queue.push([i, j])
          const neighbor = new Set()
          let firewall = 0
          const idx = neighbors.length + 1
          isInfected[i][j] = -idx

          while (queue.length > 0) {
            const arr = queue.shift()
            const x = arr[0]
            const y = arr[1]
            for (let d = 0; d < 4; ++d) {
              const nx = x + dirs[d][0]
              const ny = y + dirs[d][1]
              if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                if (isInfected[nx][ny] === 1) {
                  queue.push([nx, ny])
                  isInfected[nx][ny] = -idx
                }
                else if (isInfected[nx][ny] === 0) {
                  ++firewall
                  neighbor.add(getHash(nx, ny))
                }
              }
            }
          }
          neighbors.push(neighbor)
          firewalls.push(firewall)
        }
      }
    }

    if (neighbors.length === 0)
      break

    let idx = 0
    for (let i = 1; i < neighbors.length; ++i) {
      if (neighbors[i].size > neighbors[idx].size)
        idx = i
    }
    ans += firewalls[idx]
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        if (isInfected[i][j] < 0) {
          if (isInfected[i][j] !== -idx - 1)
            isInfected[i][j] = 1
          else
            isInfected[i][j] = 2
        }
      }
    }
    for (let i = 0; i < neighbors.length; ++i) {
      if (i !== idx) {
        for (const val of neighbors[i]) {
          const x = val >> 16
          const y = val & ((1 << 16) - 1)
          isInfected[x][y] = 1
        }
      }
    }
    if (neighbors.length === 1)
      break
  }
  return ans
}

function getHash(x, y) {
  return (x << 16) ^ y
}
// @lc code=end
