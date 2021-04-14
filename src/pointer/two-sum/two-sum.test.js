import { twoSum } from './two-sum.js'
describe('two-sum', () => {
  it('case 1', () => {
    const input = [2, 7, 11, 15]
    const target = 9
    const result = twoSum(input, target)
    result.should.to.deep.equal([1, 2])
  })
  it('case 2', () => {
    const input = [2, 3, 4]
    const target = 6
    const result = twoSum(input, target)
    result.should.to.deep.equal([1, 3])
  })
  it('case 3', () => {
    const input = [-1, 0]
    const target = -1
    const result = twoSum(input, target)
    result.should.to.deep.equal([1, 2])
  })
})
