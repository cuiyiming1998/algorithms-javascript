/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
	// 思路: 头尾双指针不断往中间前进

	// 过滤不合法的字符
	let str = s.replace(/[\W|_]/g, '').toLowerCase()

	if (!str.length) {
		return true
	}
	let left: number = 0
	let right: number = str.length - 1
	while (left < right) {
		if (str[left] === str[right]) {
			left++
			right--
		} else {
			return false
		}
	}

	return true
}
// @lc code=end
