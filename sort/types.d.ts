declare interface Sort {
  name: string // 排序名
  spaceMax: string // 最大空间复杂度
  spaceMaxDesc?: string // 最大空间复杂度原因
  spaceMin?: string // 最小空间复杂度
  spaceMinDesc?: string // 最小空间复杂度原因
  timeMax: string // 最大时间复杂度
  timeMaxDesc?: string // 最大时间复杂度原因
  timeMin?: string // 最小时间复杂度
  timeMinDesc?: string // 最小时间复杂度原因
  fn: any
}