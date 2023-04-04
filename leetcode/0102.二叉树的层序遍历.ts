/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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
function levelOrder(root: TreeNode | null): number[][] {
  // 思路: 广度优先搜素
  // 使用队列
  const res: number[][] = []
  if (!root)
    return res

  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length !== 0) {
    res.push([]) // 新的一层
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left)
        queue.push(node.left)

      if (node.right)
        queue.push(node.right)
    }
  }

  return res
}
// @lc code=end
