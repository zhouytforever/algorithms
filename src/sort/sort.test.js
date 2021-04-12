import { isSorted, randomArray } from './tools.js'

import {
  print,
  selection,
  insertion,
  shell,
  mergeSort
} from './sort.js'

import chai from 'chai'
const { expect } = chai

const expectRun = (arr, fn) => {
  try {
    const result = fn(c)
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
})
