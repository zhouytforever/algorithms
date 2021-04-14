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
  it('case 3', () => {
    const input = [3, 4, 2, 3]
    const result = decreasingArray(input)
    result.should.to.equal(false)
  })
  it('case 4', () => {
    const input = [1, 4, 2, 5]
    const result = decreasingArray(input)
    result.should.to.equal(true)
  })
  it('case 5', () => {
    const input = [3, 4, 2, 5]
    const result = decreasingArray(input)
    result.should.to.equal(true)
  })
})
