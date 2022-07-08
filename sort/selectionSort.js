const arr = [10, 9, 8, 5, 4, 2, 1]

/**
 * @description: 从数组全长开始, 选择最小的数放在数组最前面, 然后忽略交换后的数字, 再次执行
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i ++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 交换最小值
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

console.log(`选择排序 \n [${arr}]的结果为${selectionSort(arr)} \n 时间复杂度 O(n2) \n 空间复杂度 O(1)`)