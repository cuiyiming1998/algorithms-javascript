/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  // 思路: 遍历nums
  // 使用map存储每个数字出现的次数
  // 如果发现大于nums / 2 直接返回
  let map = new Map<number, number>()
  const count: number = nums.length / 2
  let res: number = 0

  if (nums.length < 2) {
    return nums[0]
  }

  for (let num of nums) {
    let key = map.get(num)
    if (undefined !== key) {
      map.set(num, key + 1)
      key = map.get(num) as number
      if (key > count) {
        res = num
      }
    } else {
      map.set(num, 1)
    }
  }
  return res
};
// @lc code=end

