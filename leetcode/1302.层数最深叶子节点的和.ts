/*
 * @lc app=leetcode.cn id=1302 lang=typescript
 *
 * [1302] 层数最深叶子节点的和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// @ts-nocheck
function deepestLeavesSum(root: TreeNode | null): number {
  // 思路: dfs
  // 如果当前节点的level大于maxLevel, 则把sum重置为当前节点
  // 如果和maxLevel相同, 则 +val
  let sum = 0
  let maxLevel = 0
  const dfs = (node: TreeNode | null, level: number) => {
    if (!node)
      return

    if (level > maxLevel) {
      sum = node.val
      maxLevel = level
    }
    else if (level === maxLevel) {
      sum += node.val
    }
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 0)
  return sum
}
// @lc code=end
