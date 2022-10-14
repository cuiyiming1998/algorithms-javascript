import { describe, expect, it, vi } from 'vitest'

import { myPromise } from '../index'

describe('Promise', () => {
	it('happy path', () => {
		let a = 0
		const promise = new myPromise((resolve, reject) => {
			a = 1
			resolve(1)
		})
		expect(a).toBe(1)
	})

	it('then -> res', () => {
		let a = 0
		const promise = new myPromise((resolve, reject) => {
			resolve(1)
		}).then(res => {
			a = res
		})

		expect(a).toBe(1)
	})

	it('then -> err', () => {
		let a = 0
		const promise = new myPromise((resolve, reject) => {
			reject(1)
		}).then(
			res => {
				a = res
			},
			err => {
				a = err
			}
		)

		expect(a).toBe(1)
	})

	it('should change value after 1 sec', () => {
		let a = 0
		const promise = new myPromise((resolve, reject) => {
			vi.useFakeTimers()
			setTimeout(() => {
				a = 5
				resolve(4)
			}, 1000)
			vi.runAllTimers()
		}).then(res => {
			a = res
			expect(a).toBe(4)
		})
	})

	it('then should be chained', () => {
		let a = 0
		const promise = new myPromise((resolve, reject) => {
			resolve(1)
		})
			.then(res => {
				a = res
				expect(a).toBe(1)
				return 2
			})
			.then(res => {
				a = res
				expect(a).toBe(2)
			})
	})

	it('all', () => {
		let res = []

		let p1 = new myPromise((r, j) => {
			r(1)
		})
		let p2 = new myPromise((r, j) => {
			r(2)
		})

		myPromise.all([p1, p2]).then(r => {
			res = r
		})

		expect(res).toStrictEqual([1, 2])
	})
})
