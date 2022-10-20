/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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
function middleNode(head: ListNode | null): ListNode | null {
  // 思路: 快慢两个指针
  // 快指针走2步 慢指针走1步
  // 当快指针遍历到末尾时, 慢指针正好在中间
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast && fast.next) {
    slow = slow?.next || null
    fast = fast?.next?.next || null
  }
  return slow
}
// @lc code=end
