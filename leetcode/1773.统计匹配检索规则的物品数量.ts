/*
 * @lc app=leetcode.cn id=1773 lang=typescript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  // 思路: 用Map代替下标
  const map = {
    type: 0,
    color: 1,
    name: 2
  }
  let res: number = 0

  for (const item of items) {
    if (item[map[ruleKey]] === ruleValue) {
      res ++
    }
  }

  return res
};
// @lc code=end

