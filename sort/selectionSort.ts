/**
 * @description: 从数组全长开始, 选择最小的数放在数组最前面, 然后忽略交换后的数字, 再次执行
 */
export const selectionSort: Sort = {
  name: '选择排序',
  spaceMax: 'O(1)',
  timeMax: 'O(n2)',
  fn: (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      // 交换最小值
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
  }
}
