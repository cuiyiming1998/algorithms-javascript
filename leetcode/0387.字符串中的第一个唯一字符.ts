/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  // 思路: 使用map存储出现过的字符
  // 如果没出现过 则更新value为下标
  // 如果出现过则更新为false状态代表出现过
  // 遍历map取第一个不为false的value即可
  const map = new Map<string, boolean | number>()
  let res = -1
  for (let i = 0; i < s.length; i++) {
    if (typeof map.get(s[i]) === 'undefined')
      map.set(s[i], i)
    else
      map.set(s[i], false)
  }
  for (const value of map.values()) {
    if (typeof value === 'number') {
      res = value
      break
    }
  }

  return res
}
// @lc code=end
