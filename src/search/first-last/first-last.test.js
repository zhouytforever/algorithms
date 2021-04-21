import { firstLast, firstLastLogN } from './first-last.js'
describe('first-last', () => {
  it('case 1', () => {
    const nums = [5, 7, 7, 8, 8, 10]
    const target = 8
    const result = firstLast(nums, target)
    expect(result).to.deep.equal([3, 4])
  })
  it('case 2', () => {
    const nums = [5, 7, 7, 8, 8, 10]
    const target = 6
    const result = firstLast(nums, target)
    expect(result).to.deep.equal([-1, -1])
  })
  it('case 3', () => {
    const nums = []
    const target = 0
    const result = firstLast(nums, target)
    expect(result).to.deep.equal([-1, -1])
  })
})
describe('firstLastLogN', () => {
  it('case 4', () => {
    const nums = [5, 7, 7, 8, 8, 10]
    const target = 6
    const result = firstLastLogN(nums, target)
    expect(result).to.deep.equal([-1, -1])
  })
  it('case 5', () => {
    const nums = []
    const target = 0
    const result = firstLastLogN(nums, target)
    expect(result).to.deep.equal([-1, -1])
  })
  it('case 7', () => {
    const nums = [5, 7, 7, 8, 8, 8, 10]
    const target = 8
    const result = firstLastLogN(nums, target)
    expect(result).to.deep.equal([3, 5])
  })
  it('case 8', () => {
    const nums = [5, 7, 7, 8, 8, 8, 8, 10]
    const target = 8
    const result = firstLastLogN(nums, target)
    expect(result).to.deep.equal([3, 6])
  })
  it('case 6', () => {
    const nums = [5, 7, 7, 8, 8, 10]
    const target = 8
    const result = firstLastLogN(nums, target)
    expect(result).to.deep.equal([3, 4])
  })
})
