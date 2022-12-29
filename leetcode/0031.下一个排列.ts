/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // 思路：从后往前找, 找前一个数比后一个数小的情况
  // 如果没有这种情况, 就说明已经是最大了, 直接reverse
  // 如果有 则记住第一个小的位置的索引i, 他后面的值的索引为j
  // 然后从后往前找比nums[i]要大的数, 交换两个值
  // 对nums[i]后的数字进行排序(从小到大, 后面的值前面已经判断过了是递减的, 只需要两两交换)
  // 需要优化时间和空间
  let len: number = nums.length
  let i: number = len - 2
  let j: number = len - 1
  let k: number = len - 1
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }
  if (i < 0) {
    // 如果是递减的
    nums.reverse()
  } else {
    while (nums[k] <= nums[i]) {
      k--
    }
    ;[nums[k], nums[i]] = [nums[i], nums[k]]
    for (let l = nums.length - 1; j < l; ++j, --l) {
      ;[nums[j], nums[l]] = [nums[l], nums[j]]
    }
  }
}
// @lc code=end
