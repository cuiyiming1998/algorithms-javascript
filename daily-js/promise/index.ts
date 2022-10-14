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
	private onFulFilledCallbacks
	private onRejectedCallbacks

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
		// 初始化回调
		this.onFulFilledCallbacks = []
		this.onRejectedCallbacks = []
	}

	// resolve和reject等方法外部需要调用
	// 这里直接写成箭头函数 否则会找不到this

	// 考虑到Promise内部会有异步的操作
	// 在promise内部不知道什么时候异步执行完毕了
	// 所以要在then里面判断
	// 那判断的逻辑就是 如果then里面 state还是pending状态的话
	// 那么promise里面就是异步操作了 需要保存到callbacks里面(因为then是链式调用, 所以使用[])
	// 在resolve/reject之后拿出来执行
	resolve = (value: any) => {
		// 如果是Pending状态 再修改
		if (!this.isPending()) {
			return
		}
		// 1. 修改状态
		this.setPromiseState(PromiseState.FULFILLED)
		// 2. 修改result
		this.setPromiseResult(value)
		// 3. 执行保存的任务
		this.executeFulFilledCallbacks()

		// console.log(`resolve: ${value}`)
	}

	reject = (reason: any) => {
		if (!this.isPending()) {
			return
		}
		// 1. 修改状态
		this.setPromiseState(PromiseState.REJECTED)
		// 2. 修改result
		this.setPromiseResult(reason)
		// 3. 执行保存的任务
		this.executeRejectedCallbacks()

		// console.log(`reject: ${reason}`)
	}

	executeFulFilledCallbacks = () => {
		while (this.onFulFilledCallbacks.length) {
			this.onFulFilledCallbacks.shift()(this.promiseResult)
		}
	}

	executeRejectedCallbacks = () => {
		while (this.onRejectedCallbacks.length) {
			this.onRejectedCallbacks.shift()(this.promiseResult)
		}
	}

	then(onFulfilled?: any, onRejected?: any): myPromise {
		// 校验两个参数, 应该为function
		!isFunc(onFulfilled) && (onFulfilled = val => val)
		!isFunc(onRejected) &&
			(onRejected = reason => {
				throw reason
			})

		// 需要构建一个新的Promise并且返回
		// 完成then的链式调用
		const nextPromise = new myPromise((resolve, reject) => {
			const p = cb => {
				// TODO then是个微任务
				const res = cb(this.promiseResult)
				if (res instanceof myPromise) {
					// 如果返回值是一个promise
					// 直接调用他的.then
					res.then(resolve, reject)
				} else {
					// 如果不是 那么resolve
					resolve(res)
				}
			}

			if (PromiseState.FULFILLED === this.promiseState) {
				p(onFulfilled)
			} else if (PromiseState.REJECTED === this.promiseState) {
				p(onRejected)
			} else if (PromiseState.PENDING === this.promiseState) {
				this.onFulFilledCallbacks.push(p.bind(this, onFulfilled))
				this.onRejectedCallbacks.push(p.bind(this, onRejected))
			}
		})
		return nextPromise
	}

	// Promise.all
	// 如果所有Promise都成 则返回成功结果的数组
	// 如果有一个失败 返回这个失败的结果
	// 如果有非promise 则当做成功resolve
	static all(promises: any[]): myPromise {
		const res: any[] = []
		let count: number = 0
		const len: number = promises.length

		const promise: myPromise = new myPromise((resolve, reject) => {
			const addData = (index, value) => {
				res[index] = value
				count++
				if (count === len) {
					// 如果count === len 也就是全部执行完了
					resolve(res)
				}
			}
			promises.forEach((promise, index) => {
				if (promise instanceof myPromise) {
					// 如果是Promise的话, 去执行.then
					promise.then(
						res => {
							addData(index, res)
						},
						err => {
							reject(err)
						}
					)
				} else {
					// 如果不是promise 则作为resolve
					addData(index, promise)
				}
			})
		})

		return promise
	}
}

// 延迟3秒后输出res
const promise = new myPromise((resolve, reject) => {
	setTimeout(() => {
		resolve(1)
	}, 3000)
}).then(res => console.log('res', res))
