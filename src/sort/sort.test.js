import { isSorted, randomArray } from './tools.js'
import { print } from '../utils.js'
import {
  selection,
  insertion,
  shell,
  quickSort,
  mergeSort
} from './sort.js'

import chai from 'chai'
const { expect } = chai

const expectRun = (arr, fn, ...compareFn) => {
  try {
    const result = fn(arr, ...compareFn)
    print(result)
    expect(result).to.be.an('array').lengthOf(arr.length)
    expect(isSorted(result)).to.be.equal(true)
  } catch (e) {
    console.error(e)
  }
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
    expectRun(c, mergeSort)
  })
  it('快速排序', () => {
    const lessFn = (a, b) => a < b
    const greaterFn = (a, b) => a > b
    expectRun(c, quickSort, lessFn, greaterFn)
  })
})
