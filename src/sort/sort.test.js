import {
  print,
  show,
  isSorted,
  randomArray,
  selection,
  insertion,
  shell
} from './sort.js'
import chai from 'chai'
const { expect } = chai

const expectRun = (arr, fn) => {
  try {
    const result = fn(c)
    // show(result)
    expect(result).to.be.an('array').lengthOf(arr.length)
    expect(isSorted(result)).to.be.equal(true)
  } catch (e) {
    print(e)
  }
}

const N = 20
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
})
