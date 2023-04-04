/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

// @ts-nocheck
function preorder(root: Node | null): number[] {
  // 思路: 递归
  const res: number[] = []

  const helper = (node: Node) => {
    if (!node || node?.val === null)
      return

    res.push(node.val)
    for (const child of node.children)
      helper(child)
  }

  helper(root)

  return res
}
// @lc code=end
