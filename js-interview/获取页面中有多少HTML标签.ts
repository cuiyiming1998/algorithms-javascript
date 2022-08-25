/**
 * @description: 获取当前打开的页面中有多少html标签
 * @param { Void }
 * @return { Void }
 */

const getAllTagNames = () => {
	const elements = document.querySelectorAll('*')
	const nodeNames: string[] = Array.from(elements).map((n) => n.nodeName)
  const size: number = new Set([...nodeNames]).size
  console.log(`当前页面共有${size}个HTML标签`)
	return size
}

/**
 * @description: 获取页面中排行全三的标签
 * @param { Void }
 * @return { Void }
 */

const getTop3Elements = () => {
  const elements: string[] = [...document.querySelectorAll('*')].map(n => n.nodeName)
  const elementMap: { [propName: string]: number } = elements.reduce((pre, cur) => {
    pre[cur] = (pre[cur] || 0) + 1
    return pre
  }, {})

  const sortedArr: [string, number][] = Object.entries(elementMap).sort((a, b) => b[1] - a[1])
  console.table(sortedArr)
  return sortedArr.slice(0, 3)
}