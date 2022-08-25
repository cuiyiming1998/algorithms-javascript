/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head
  }
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
};
// @lc code=end

