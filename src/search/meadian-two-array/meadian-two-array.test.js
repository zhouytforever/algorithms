import { meadianTwoArray } from './meadian-two-array.js'
describe('meadian-two-array', () => {
  it('case 1', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const result = meadianTwoArray(nums1, nums2)
    expect(result).to.equal(2.00000)
  })
  it('case 2', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const result = meadianTwoArray(nums1, nums2)
    expect(result).to.equal(2.50000)
  })
  it('case 3', () => {
    const nums1 = [0, 0]
    const nums2 = [0, 0]
    const result = meadianTwoArray(nums1, nums2)
    expect(result).to.equal(0.00000)
  })
  it('case 4', () => {
    const nums1 = []
    const nums2 = [1]
    const result = meadianTwoArray(nums1, nums2)
    expect(result).to.equal(1.00000)
  })
  it('case 5', () => {
    const nums1 = [2]
    const nums2 = []
    const result = meadianTwoArray(nums1, nums2)
    expect(result).to.equal(2.00000)
  })
})
