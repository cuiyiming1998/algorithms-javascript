/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  let map = new Map<string, number>()
  let res = true

  // 构建map
  for (const i of magazine) {
    let num = map.get(i)
    map.set(i, num ? ++num : num = 1)
  }

  for (const i of ransomNote) {
    let num = map.get(i)
    if (num && num > 0) {
      map.set(i, --num)
    } else {
      res = false
      break
    }
  }

  return res
};
// @lc code=end

