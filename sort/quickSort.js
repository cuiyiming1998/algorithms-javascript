const arr = [10, 9, 8, 5, 4, 2, 1]

/**
 * @description: 找一个基准值 比他小的放左侧 比他大的放右侧
 */
const quickSort = (arr) => {
  if (arr.length < 1) {
    return arr
  }
  // 取基准数
  const priorIndex = Math.floor(arr.length / 2)
  // 切割数组
  const prior = arr.splice(priorIndex, 1)[0]
  // 遍历, 比较
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < prior) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([prior], quickSort(right))
}

console.log(`快速排序 \n [${arr}]的结果为${quickSort(arr)} \n 时间复杂度(最差情况每次都取到最大或最小) O(n2) \n 时间复杂度(平均) O(nlogn) \n 空间复杂度 O(1)`)
