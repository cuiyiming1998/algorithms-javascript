/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
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
function postorder(root: Node | null): number[] {
  const res: number[] = []

  const order = (root: Node | null) => {
    if (!root)
      return

    if (root.children.length) {
      root.children.map((node) => {
        order(node)
      })
    }
    res.push(root.val)
  }
  order(root)

  return res
}
// @lc code=end
