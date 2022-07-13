/*
 * @lc app=leetcode.cn id=735 lang=typescript
 *
 * [735] 行星碰撞
 */

// @lc code=start
function asteroidCollision(asteroids: number[]): number[] {
  // 思路: 维护一个栈
  // 每循环一次asteroids, 判断是否和栈内的行星相撞
  // 如果相撞 判断大小 然后执行入栈出栈操作
  let collisionStack: number[] = []
  for (let i = 0; i < asteroids.length; i++) {
    let currentAsteroid = asteroids[i]
    if (collisionStack.length <= 0) {
      // 如果栈内没有, 直接入栈
      collisionStack.push(currentAsteroid)
    } else {
      while (1) {
        let preAsteroid = collisionStack.pop() as number
        if (
          preAsteroid * currentAsteroid >= 0 ||
          (preAsteroid < 0 && currentAsteroid > 0)
        ) {
          // 如果两个行星大小同号 或者 前面向左后面向右 -> 都不会相撞
          collisionStack.push(preAsteroid)
          collisionStack.push(currentAsteroid)
          break
        } else if (0 === preAsteroid + currentAsteroid) {
          // 两个行星大小相同 相撞后全没了
          break
        } else {
          // 前边的向右, 后边的向左, 相撞
          const vCurrentAsteroid = Math.abs(currentAsteroid)
          currentAsteroid =
            preAsteroid > vCurrentAsteroid ? preAsteroid : currentAsteroid
          if (collisionStack.length <= 0) {
            collisionStack.push(currentAsteroid)
            break
          }
        }
      }
    }
  }

  return collisionStack
}
// @lc code=end
