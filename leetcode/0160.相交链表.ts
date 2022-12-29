/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-nocheck
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // 思路: 使用set
  // 循环A 存入set
  // 循环B 看是否存在set中
  let set: Set<ListNode> = new Set()
  let a: ListNode | null = headA
  let b: ListNode | null = headB
  while (a) {
    set.add(a)
    a = a.next
  }
  while (b) {
    if (set.has(b)) {
      return b
    }
    b = b.next
  }
  return null
}
// @lc code=end
