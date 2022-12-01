/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const len: number = digits.length
  for (let i = len - 1; i >= 0; i --) {
    // 数组最后一个元素++ 剩下的处理进位的情况
    digits[i] += 1
    digits[i] %= 10
    if (digits[i]) {
      // 如果+1后和10取余 结果不为0 那么说明不需要进位 直接返回即可
      return digits
    }
  }

  // 如果到这里还没有return 说明第一位也需要进位 那么需要在数组头补一位
  // 这时返回 10000...
  let res: number[] = new Array(len + 1).fill(0)
  res[0] = 1
  return res
};
// @lc code=end

