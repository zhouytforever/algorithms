import { isSorted, randomArray } from './tools.js'
import { print } from '../utils.js'
import {
  selection,
  insertion,
  shell,
  quick,
  merge
} from './sort.js'

import chai from 'chai'
const { expect } = chai

const expectRun = (input, fn, compareFn) => {
  let result
  try {
    result = fn(input, compareFn)
    print(fn, '>>>', result)
  } catch (e) {
    print('input in expectRun', input)
    print('result in expectRun', result)
    console.error(e)
  }
  expect(result).to.be.an('array').lengthOf(input.length)
  expect(isSorted(result), compareFn).to.be.equal(true)
}

const N = 8
const c = randomArray(N)
print([c])
describe('正确性', () => {
  it('选择排序', () => {
    expectRun(c, selection)
  })
  it('插入排序', () => {
    expectRun(c, insertion)
  })
  it('希尔排序', () => {
    expectRun(c, shell)
  })
  it('归并排序', () => {
    expectRun(c, merge)
  })
  it('快速排序', () => {
    const lessFn = (a, b) => a < b
    expectRun(c, quick, lessFn)
  })
})
