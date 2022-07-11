export const bubbleSort: Sort = {
  name: '冒泡排序',
  spaceMax: 'O(1)',
  timeMax: 'O(n2)',
  fn: (arr) =>  {
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
}
