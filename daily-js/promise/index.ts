import { PromiseState } from "./promiseState"

/**
 * description
 * 简单实现一个promise
 *
 */

class myPromise {
	private promiseState: PromiseState
  private promiseResult: any

	constructor(fn) {
		// 1. 初始化value
		this.initValue()
		// 2. 初始化this指向
		this.initThis()
		// 执行函数
    fn(this.resolve, this.reject)
	}

	initValue() {
    // 初始化result
    this.promiseResult = null
    // 初始化pending状态
		this.promiseState = PromiseState.PENDING
	}
	initThis() {
    this.resolve.bind(this)
    this.reject.bind(this)
  }

  resolve(value) {
    // 1. 修改状态
    this.promiseState = PromiseState.FULFILLED
    // 2. 修改result
    this.promiseResult = value

    console.log('触发了resolve')
  }

  reject(reason) {
    // 1. 修改状态
    this.promiseState = PromiseState.REJECTED
    // 2. 修改result
    this.promiseResult = reason

    console.log('触发了reject')
  }

}
