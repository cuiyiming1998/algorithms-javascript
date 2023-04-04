/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 思路: 快慢指针
  // 快指针比慢指针快n
  // 快指针遍历到末尾 慢指针就是要删除的
  const dummy = new ListNode()
  dummy.next = head
  let n1 = dummy
  let n2 = dummy
  for (let i = 0; i <= n; i++) {
    // n2移动n+1次
    n2 = n2.next
  }
  while (n2 !== null) {
    // 同时移动n1，n2
    n1 = n1.next
    n2 = n2.next
  }
  n1.next = n1.next.next // 删除元素
  return dummy.next
}
// @lc code=end
