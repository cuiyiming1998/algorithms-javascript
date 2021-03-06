/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  // 思路: 二分查找
  return function (n: number): number {
    let left: number = 1
    let right: number = n
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}
// @lc code=end
