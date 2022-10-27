/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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
function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	// 思路: 利用二插搜索树的特性
	// 左边的都比root小 右边的都比root大
	if (!root) {
		return null
	}
	let node = root
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(node!.left, p, q)
	}
	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(node!.right, p, q)
	}

	return node
}
// @lc code=end
