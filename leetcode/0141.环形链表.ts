/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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
function hasCycle(head: ListNode | null): boolean {
  // 思路: 快慢指针
  // 如果是一个环的话 快慢针总会相遇
  if (!head || !head.next)
    return false

  let slow: ListNode = head
  let fast: ListNode = head.next
  while (slow !== fast) {
    if (fast.next === null || fast.next.next === null)
      return false

    slow = slow.next
    fast = fast.next.next
  }
  return true
}
// @lc code=end
