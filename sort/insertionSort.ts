/**
 * @description: 将arr[0]当做一个有序序列, 剩下的是未排序的序列
 * 从头到尾依次扫描未排序序列, 将扫描到的元素插入到有序序列的合适位置
 */
export const insertionSort: Sort = {
  name: '插入排序',
  spaceMax: 'O(1)',
  spaceMin: '',
  timeMax: 'O((n * (n -1)) / 2)',
  timeMaxDesc: '序列本身是递减的',
  timeMin: 'O(n)',
  timeMinDesc: '序列本身就有序',
  fn: (arr) => {
    console.log(`时间复杂度(平均) O(nlogn)`)
    const len = arr.length
    let preIndex, current
    for (let i = 1; i < len; i++) {
      preIndex = i - 1
      current = arr[i]
      while (preIndex >= 0 && arr[preIndex] > current) {
        // 交换
        arr[preIndex + 1] = arr[preIndex]
        preIndex--
      }
      arr[preIndex + 1] = current
    }
    return arr
  }
}
