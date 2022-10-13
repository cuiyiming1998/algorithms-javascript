import { isFunc } from '../shared/index.js'
import { PromiseState } from './promiseState.js'

/**
 * description
 * 简单实现一个promise
 *
 */

export class myPromise {
	private promiseState: PromiseState = PromiseState.PENDING
	private promiseResult: any

	private setPromiseResult(value: any) {
		this.promiseResult = value
	}

	private setPromiseState(state: PromiseState) {
		this.promiseState = state
	}

	private isPending() {
		return PromiseState.PENDING === this.promiseState
	}

	constructor(fn) {
		// 1. 初始化value
		this.initValue()
		// 2. 执行函数
		// 如果函数内部有throw的话 那么相当于reject
		try {
			fn(this.resolve, this.reject)
		} catch (e) {
			this.reject(e)
		}
	}

	initValue() {
		// 初始化result
		this.setPromiseResult(null)
		// 初始化pending状态
		this.setPromiseState(PromiseState.PENDING)
	}

	// resolve和reject等方法外部需要调用
	// 这里直接写成箭头函数 否则会找不到this
	resolve = (value: any) => {
		// 如果是Pending状态 再修改
		if (!this.isPending()) {
			return
		}
		// 1. 修改状态
		this.setPromiseState(PromiseState.FULFILLED)
		// 2. 修改result
		this.setPromiseResult(value)

		console.log(`resolve: ${value}`)
	}

	reject = (reason: any) => {
		if (!this.isPending()) {
			return
		}
		// 1. 修改状态
		this.setPromiseState(PromiseState.REJECTED)
		// 2. 修改result
		this.setPromiseResult(reason)

		console.log(`reject: ${reason}`)
	}

	then(onFulfilled?: any, onRejected?: any) {
		// 校验两个参数, 应该为function
		!isFunc(onFulfilled) && (onFulfilled = val => val)
		!isFunc(onRejected) &&
			(onRejected = reason => {
				throw reason
			})

    if (PromiseState.FULFILLED === this.promiseState) {
      onFulfilled(this.promiseResult)
    } else if (PromiseState.REJECTED === this.promiseState) {
      onRejected(this.promiseResult)
    }
	}
}
