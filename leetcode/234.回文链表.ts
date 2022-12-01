/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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
function isPalindrome(head: ListNode | null): boolean {
  // 思路: 遍历一遍链表 把值存在数组中
  // 然后再双指针判断一下
  // TODO: 可以优化为快慢指针
  let values: number[] = []
  if (!head) {
    return true
  }
  let node: ListNode = head
  while(null !== node) {
    values.push(node.val)
    node = node.next
  }
  let left: number = 0
  let right: number = values.length - 1
  while (left < right) {
    if (values[left] === values[right]) {
      left ++
      right --
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

