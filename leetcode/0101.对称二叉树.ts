/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
}

function check(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right)
    return true

  if (!left || !right)
    return false

  return (
    left.val === right.val
    && check(left.left, right.right)
    && check(left.right, right.left)
  )
}
// @lc code=end
