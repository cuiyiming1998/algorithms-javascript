/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  // 思路: 使用双指针
  // 循环nums 每次挑nums[i]作为基准
  // nums[i]后面的元素设置left和right
  // 小于0 -> left ++  大于0 -> right --
  // 三数相加等于0 就是结果
  let res: number[][] = []
  if (nums.length < 3) {
    return res
  }
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] > 0) {
      // 最小的数大于0 无论如何相加也无法得到0
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 如果和上一个数相同, 得出的结果就是重复的, 跳过
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let answer = nums[i] + nums[left] + nums[right]
      if (0 === answer) {
        // 得到结果, 添加进res
        res.push([nums[i], nums[left], nums[right]])
        // 继续寻找
        while (left < right && nums[left] === nums[left + 1]) {
          left ++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right --
        }
        left ++
        right --
      } else if (answer > 0) {
        right --
      } else if (answer < 0) {
        left ++
      }
    }
  }
  return res
};
// @lc code=end

