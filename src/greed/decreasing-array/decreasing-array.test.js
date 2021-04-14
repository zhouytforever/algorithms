import { decreasingArray } from './decreasing-array.js'
describe('decreasing-array', () => {
  it('case 1', () => {
    const input = [4, 2, 3]
    const result = decreasingArray(input)
    result.should.to.equal(true)
  })
  it('case 2', () => {
    const input = [4, 2, 1]
    const result = decreasingArray(input)
    result.should.to.equal(false)
  })
})
