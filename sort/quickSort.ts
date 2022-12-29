/**
 * @description: 找一个基准值 比他小的放左侧 比他大的放右侧
 */
export const quickSort: Sort = {
  name: '快速排序',
  spaceMax: 'O(1)',
  spaceMin: '',
  timeMax: 'O(n2)',
  timeMaxDesc: '每次都取到最大或最小',
  timeMin: 'O(nlogn)',
  timeMinDesc: '平均',
  fn: (arr: number[]) => {
    if (arr.length < 1) {
      return arr
    }
    // 取基准数
    const priorIndex = Math.floor(arr.length / 2)
    // 切割数组
    const prior = arr.splice(priorIndex, 1)[0]
    // 遍历, 比较
    let left: number[] = []
    let right: number[] = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < prior) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort.fn(left).concat([prior], quickSort.fn(right))
  }
}
