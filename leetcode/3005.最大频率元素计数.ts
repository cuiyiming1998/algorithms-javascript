/*
 * @lc app=leetcode.cn id=3005 lang=typescript
 *
 * [3005] 最大频率元素计数
 */

// @lc code=start
function maxFrequencyElements(nums: number[]): number {
  const map: Record<number, number> = {}
  let max = 0
  let result = 0

  // 先遍历数组，统计每个元素的出现次数
  nums.map((num) => {
    map[num] = (map[num] || 0) + 1
  })

  // 遍历map，找到出现次数最多的元素的出现次数
  for (const num in map) {
    max = Math.max(max, map[num])
  }

  // 再次遍历map，统计出现次数最多的元素的总个数
  for (const num in map) {
    if (map[num] === max) {
      result += max
    }
  }
  return result
}
// @lc code=end
