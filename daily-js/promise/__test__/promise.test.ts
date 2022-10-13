import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

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
    }).then(res => a = 0, err => a = err)

    expect(a).toBe(1)
  })
})
