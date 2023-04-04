import { describe, expect, it } from 'vitest'
import { forEach } from 'lodash-es'
import * as sortFunc from '../index'

describe('排序', () => {
  forEach(sortFunc, (sort: Sort) => {
    const arr = [10, 9, 8, 6, 5, 3, 2, 1]
    it(sort.name, () => {
      console.log(sort.name)
      if (sort.spaceMaxDesc)
        console.log(`空间复杂度(${sort.spaceMaxDesc}): ${sort.spaceMax}`)
      else
        console.log(`空间复杂度: ${sort.spaceMax}`)

      if (sort.spaceMinDesc)
        console.log(`空间复杂度(${sort.spaceMinDesc}): ${sort.spaceMin}`)

      if (sort.timeMaxDesc)
        console.log(`空间复杂度(${sort.timeMaxDesc}): ${sort.timeMax}`)
      else
        console.log(`时间复杂度: ${sort.timeMax}`)

      if (sort.timeMinDesc)
        console.log(`时间复杂度(${sort.timeMinDesc}): ${sort.timeMin}`)

      expect(sort.fn(arr)).toStrictEqual([1, 2, 3, 5, 6, 8, 9, 10])
    })
  })
})
