/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // 思路: 双指针
  let left: number = 0
  let right: number = s.length - 1
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]]
    left ++
    right --
  }
};
// @lc code=end

