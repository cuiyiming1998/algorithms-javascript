/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
  Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 思路: 逆向双指针
  // nums1后半部分是空的
  // 从nums1, nums2最后一个元素开始互相比较, 大的放入num1的最后面
  let p1: number = m - 1
  let p2: number = n - 1
  let len: number = m + n - 1 // 总长度
  let cur: number

  while (p1 >= 0 || p2 >= 0) {
    // 如果一个数组减没了
    if (-1 === p1) {
      cur = nums2[p2--]
    } else if (-1 === p2) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--]
    } else {
      cur = nums2[p2--]
    }
    nums1[len--] = cur
  }
}
// @lc code=end
