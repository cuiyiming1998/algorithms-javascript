/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  // 思路: set填充
  let set = new Set()
  while(head !== null) {
    if (set.has(head)) {
      return head
    }
    set.add(head)
    head = head.next
  }
  return null
};
// @lc code=end

