const arr = [10, 9, 8, 5, 4, 2, 1]

/**
 * @description: 将arr[0]当做一个有序序列, 剩下的是未排序的序列
 * 从头到尾依次扫描未排序序列, 将扫描到的元素插入到有序序列的合适位置
 */
const insertionSort = (arr) => {
  const len = arr.length
  let preIndex, current

  for (let i = 1; i < len; i ++) {
    preIndex = i - 1
    current = arr[i]

    while(preIndex >= 0 && arr[preIndex] > current) {
      // 交换
      arr[preIndex + 1] = arr[preIndex]
      preIndex --
    }
    arr[preIndex + 1] = current
  }

  return arr
}

console.log(`插入排序 \n [${arr}]的结果为${insertionSort(arr)} \n 时间复杂度(最好情况序列本身就有序) O(n) \n 时间复杂度(最差情况序列本身是递减的) O((n * (n -1)) / 2) \n 时间复杂度(平均) O(nlogn) \n 空间复杂度 O(1)`)