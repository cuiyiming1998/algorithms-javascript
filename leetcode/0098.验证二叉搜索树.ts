/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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
const helper = (node: TreeNode, min: number, max: number): boolean => {
  if (!node) {
    return true
  }
  if (node.val >= max || node.val <= min) {
    return false
  }
  return helper(node.left, min, node.val) && helper(node.right, node.val, max)
}
function isValidBST(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity)
};
// @lc code=end

