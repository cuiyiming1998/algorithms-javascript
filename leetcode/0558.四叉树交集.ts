/*
 * @lc app=leetcode.cn id=558 lang=typescript
 *
 * [558] 四叉树交集
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function intersect(t1: Node | null, t2: Node | null): Node | null {
  // 抄的题解
  if (t1.isLeaf && t2.isLeaf) {
    if (t1.val)
      return t1
    else if (t2.val)
      return t2
    else return t1
  }
  const ans: Node = new Node()
  ans.topLeft = intersect(
    t1.isLeaf ? t1 : t1.topLeft,
    t2.isLeaf ? t2 : t2.topLeft,
  )
  ans.topRight = intersect(
    t1.isLeaf ? t1 : t1.topRight,
    t2.isLeaf ? t2 : t2.topRight,
  )
  ans.bottomLeft = intersect(
    t1.isLeaf ? t1 : t1.bottomLeft,
    t2.isLeaf ? t2 : t2.bottomLeft,
  )
  ans.bottomRight = intersect(
    t1.isLeaf ? t1 : t1.bottomRight,
    t2.isLeaf ? t2 : t2.bottomRight,
  )
  const a: boolean
    = ans.topLeft.isLeaf
    && ans.topRight.isLeaf
    && ans.bottomLeft.isLeaf
    && ans.bottomRight.isLeaf
  const b: boolean
    = ans.topLeft.val
    && ans.topRight.val
    && ans.bottomLeft.val
    && ans.bottomRight.val
  const c: boolean
    = ans.topLeft.val
    || ans.topRight.val
    || ans.bottomLeft.val
    || ans.bottomRight.val

  ans.isLeaf = a && (b || !c)
  ans.val = ans.topLeft.val

  if (ans.isLeaf)
    ans.topLeft = ans.topRight = ans.bottomLeft = ans.bottomRight = null

  return ans
}
// @lc code=end
