/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  // 思路: map
  // 使用map存储nums1中值出现的次数
  // 循环nums2在map中寻找, 如果找到 -> 次数 - 1 push到res中
  const res: number[] = []
  const map = new Map<number, number>()
  // 1. 构建map
  for (const num of nums1) {
    let cur: number | undefined = map.get(num)
    // 如果map中存在, 则值 + 1
    cur = cur ? cur + 1 : 1
    map.set(num, cur)
  }
  // 循环nums2, 寻找相同的值
  for (const num of nums2) {
    let cur: number | undefined = map.get(num)
    if (cur) {
      cur--
      res.push(num)
      map.set(num, cur)
    }
  }
  return res
}
// @lc code=end
