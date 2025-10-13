/*
 * @lc app=leetcode.cn id=2273 lang=javascript
 *
 * [2273] 移除字母异位词后的结果数组
 *
 * https://leetcode.cn/problems/find-resultant-array-after-removing-anagrams/description/
 *
 * algorithms
 * Easy (61.05%)
 * Likes:    36
 * Dislikes: 0
 * Total Accepted:    19.4K
 * Total Submissions: 30.3K
 * Testcase Example:  '["abba","baba","bbaa","cd","cd"]'
 *
 * 给你一个下标从 0 开始的字符串 words ，其中 words[i] 由小写英文字符组成。
 *
 * 在一步操作中，需要选出任一下标 i ，从 words 中 删除 words[i] 。其中下标 i 需要同时满足下述两个条件：
 *
 *
 * 0 < i < words.length
 * words[i - 1] 和 words[i] 是 字母异位词 。
 *
 *
 * 只要可以选出满足条件的下标，就一直执行这个操作。
 *
 * 在执行所有操作后，返回 words 。可以证明，按任意顺序为每步操作选择下标都会得到相同的结果。
 *
 * 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。例如，"dacb" 是 "abdc"
 * 的一个字母异位词。
 *
 *
 *
 * 示例 1：
 *
 * 输入：words = ["abba","baba","bbaa","cd","cd"]
 * 输出：["abba","cd"]
 * 解释：
 * 获取结果数组的方法之一是执行下述步骤：
 * - 由于 words[2] = "bbaa" 和 words[1] = "baba" 是字母异位词，选择下标 2 并删除 words[2] 。
 * ⁠ 现在 words = ["abba","baba","cd","cd"] 。
 * - 由于 words[1] = "baba" 和 words[0] = "abba" 是字母异位词，选择下标 1 并删除 words[1] 。
 * ⁠ 现在 words = ["abba","cd","cd"] 。
 * - 由于 words[2] = "cd" 和 words[1] = "cd" 是字母异位词，选择下标 2 并删除 words[2] 。
 * ⁠ 现在 words = ["abba","cd"] 。
 * 无法再执行任何操作，所以 ["abba","cd"] 是最终答案。
 *
 * 示例 2：
 *
 * 输入：words = ["a","b","c","d","e"]
 * 输出：["a","b","c","d","e"]
 * 解释：
 * words 中不存在互为字母异位词的两个相邻字符串，所以无需执行任何操作。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 10
 * words[i] 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
let removeAnagrams = function(words) {
  const res = [words[0]]
  for (let i = 1; i < words.length; i ++) {
    if (words[i].split('').sort().join() !== words[i - 1].split('').sort().join()) {
      res.push(words[i])
    }
  }

  return res
}
// @lc code=end
