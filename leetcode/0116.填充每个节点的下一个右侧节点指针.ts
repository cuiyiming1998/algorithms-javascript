/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-nocheck
function connect(root: Node | null): Node | null {
  if (!root)
    return root

  const queue = [root]

  while (queue.length > 0) {
    let size = queue.length
    while (size > 0) {
      size--
      const offer = queue.shift()

      if (offer) {
        if (size === 0)
          offer.next = null
        else
          offer.next = queue[0]
      }

      if (offer && offer.left)
        queue.push(offer.left)
      if (offer && offer.right)
        queue.push(offer.right)
    }
  }

  return root
}
// @lc code=end
