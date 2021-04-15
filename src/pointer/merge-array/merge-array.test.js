import { mergeArray } from './merge-array.js'
describe('merge-array', () => {
  it('case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3
    const result = mergeArray(nums1, m, nums2, n)
    result.should.to.deep.equal([1, 2, 2, 3, 5, 6])
  })
  it('case 2', () => {
    const nums1 = [1]
    const m = 1
    const nums2 = []
    const n = 0
    const result = mergeArray(nums1, m, nums2, n)
    result.should.to.deep.equal([1])
  })
})
