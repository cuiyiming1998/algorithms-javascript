/*
 * @lc app=leetcode.cn id=1039 lang=javascript
 *
 * [1039] 多边形三角剖分的最低得分
 *
 * https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/description/
 *
 * algorithms
 * Medium (68.12%)
 * Likes:    330
 * Dislikes: 0
 * Total Accepted:    35.4K
 * Total Submissions: 51.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 你有一个凸的 n 边形，其每个顶点都有一个整数值。给定一个整数数组 values ，其中 values[i] 是第 i 个顶点的值（即 顺时针顺序
 * ）。
 *
 * 假设将多边形 剖分 为 n - 2 个三角形。对于每个三角形，该三角形的值是顶点标记的乘积，三角剖分的分数是进行三角剖分后所有 n - 2
 * 个三角形的值之和。
 *
 * 返回 多边形进行三角剖分后可以得到的最低分 。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：values = [1,2,3]
 * 输出：6
 * 解释：多边形已经三角化，唯一三角形的分数为 6。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：values = [3,7,4,5]
 * 输出：144
 * 解释：有两种三角剖分，可能得分分别为：3*7*5 + 4*5*7 = 245，或 3*4*5 + 3*4*7 = 144。最低分数为 144。
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：values = [1,3,1,4,1,5]
 * 输出：13
 * 解释：最低分数三角剖分的得分情况为 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13。
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == values.length
 * 3 <= n <= 50
 * 1 <= values[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
let minScoreTriangulation = function(values) {
  const n = values.length
  const memo = new Map()

  function dp(i, j) {
    // 基础情况：区间长度小于3，无法形成三角形
    if (j - i < 2) {
      return 0
    }

    const key = `${i}-${j}`
    if (memo.has(key)) {
      return memo.get(key)
    }

    let result = Infinity
    // 枚举中间点k，将多边形分成两部分
    for (let k = i + 1; k < j; k++) {
      // 三角形 (i, k, j) 的得分 + 左边多边形的最小得分 + 右边多边形的最小得分
      const score = values[i] * values[k] * values[j] + dp(i, k) + dp(k, j)
      result = Math.min(result, score)
    }

    memo.set(key, result)
    return result
  }

  return dp(0, n - 1)
}
// @lc code=end
