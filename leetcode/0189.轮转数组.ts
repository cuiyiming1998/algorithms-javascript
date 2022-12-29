/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // 思路:
  // 将nums全部反转
  // 然后反转前k个
  // 再反转后length - k个
  const times: number = k % nums.length // 超出的部分
  if (nums.length > 1) {
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, times - 1)
    reverse(nums, times, nums.length - 1)
  }
  function reverse(arr, left, right) {
    while (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
}
// @lc code=end
