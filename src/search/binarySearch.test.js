import { filterByWhiteList } from './binarySearch.js'
import chai from 'chai'
const { expect } = chai

describe('二分查找', () => {
  const whiteList = [
    10, 11, 12, 16, 18, 23, 29, 33, 48, 48, 54, 57, 68, 77, 84, 98
  ]
  const template = [
    23, 50, 99, 48
  ]
  it('binary search', () => {
    const result = filterByWhiteList(template, whiteList)
    expect(result).lengthOf(2)
    expect(result[1]).to.be.equal(48)
  })
})
