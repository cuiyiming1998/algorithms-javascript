/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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
function reverseList(head: ListNode | null): ListNode | null {
	let prev = null
	let curr = head
	while (curr) {
		const next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}
// @lc code=end
