/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let list = new ListNode(0)
  let temp = list
  let sum = 0
  let n = 0 // 进位

  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    sum = n1 + n2 + n // 进位
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    n = sum >= 10 ? 1 : 0
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (n > 0) {
    temp.next = new ListNode(n)
  }

  return list.next
}
// @lc code=end
