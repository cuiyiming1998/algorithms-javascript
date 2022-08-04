/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // if (!prices.length) {
  //   return 0
  // }
  let minPrice: number = prices[0]
  let profit: number = 0
  for (const i of prices) {
    // 最低买入点
    minPrice = Math.min(i, minPrice)
    profit = Math.max(i - minPrice, profit)
  }
  return profit
};
// @lc code=end

