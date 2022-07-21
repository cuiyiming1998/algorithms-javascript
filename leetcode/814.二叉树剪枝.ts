/*
 * @lc app=leetcode.cn id=814 lang=typescript
 *
 * [814] 二叉树剪枝
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

function pruneTree(root: TreeNode | null): TreeNode | null {
  // 思路: 递归
  // 对left和right递归 当!left, !right和val === 0 时 返回null
  // 否则return root
  if (!root) {
    return null
  }
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  if (!root.left && !root.right && 0 === root.val) {
    return null
  }
  return root
};
// @lc code=end

