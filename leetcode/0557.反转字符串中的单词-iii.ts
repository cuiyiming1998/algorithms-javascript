/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
  // 思路: 双指针
  let wordsArr: string[] = s.split(' ')

  const reverse = (arr: string[]): string[] => {
    let left = 0
    let right: number = arr.length - 1
    while (left <= right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    return arr
  }

  let res = wordsArr.map((item) => {
    return reverse(item.split('')).join('')
  })

  return res.join(' ')
}
// @lc code=end
