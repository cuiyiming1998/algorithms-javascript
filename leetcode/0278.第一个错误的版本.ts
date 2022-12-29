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

let solution = function (isBadVersion: any) {
  // 思路: 二分查找
  return function (n: number): number {
    let left = 1
    let right: number = n

    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2)
      if (isBadVersion(mid)) {
        // 因为要找第一个 所以应该从左边找起
        // 这里要继续往左找
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}
// @lc code=end
