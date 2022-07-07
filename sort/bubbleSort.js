const arr = [100, 3534, 233, 455, 934, 234, 333]

const bubbleSort = (arr) => {
  let temp
  for (let i = 0; i < arr.length - 1; i ++) {
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(`冒泡排序\n[${arr}]的结果为${bubbleSort(arr)}`)