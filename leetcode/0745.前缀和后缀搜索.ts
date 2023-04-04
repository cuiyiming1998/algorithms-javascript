/*
 * @lc app=leetcode.cn id=745 lang=typescript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
class WordFilter {
  // 思路: 暴力法
  // 维护一个map, 里面存储所有可能的前缀后缀的组合, 使用特殊字符进行连接, 作为key
  // 检索时使用相同的[ 前缀+特殊符号+后缀 ]的组合进行map.get
  private dict = new Map<string, number>()
  private symbol = '#'
  constructor(words: string[]) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const len = word.length
      for (let prefixIndex = 1; prefixIndex <= len; prefixIndex++) {
        for (let suffixIndex = 1; suffixIndex <= len; suffixIndex++) {
          const key = `${word.substring(0, prefixIndex)}${
            this.symbol
          }${word.substring(len - suffixIndex)}`
          this.dict.set(key, i)
        }
      }
    }
  }

  f(pref: string, suff: string): number {
    return this.dict.get(`${pref}${this.symbol}${suff}`) ?? -1
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end
