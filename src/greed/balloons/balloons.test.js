import { balloons } from './balloons.js'
describe('balloons', () => {
  it('case 1', () => {
    const input = [[10, 16], [2, 8], [1, 6], [7, 12]]
    const result = balloons(input)
    result.should.to.equal(2)
  })
  it('case 2', () => {
    const input = [[1, 2], [3, 4], [5, 6], [7, 8]]
    const result = balloons(input)
    result.should.to.equal(4)
  })
  it('case 3', () => {
    const input = [[1, 2], [2, 3], [3, 4], [4, 5]]
    const result = balloons(input)
    result.should.to.equal(2)
  })
  it('case 4', () => {
    const input = [[1, 2]]
    const result = balloons(input)
    result.should.to.equal(1)
  })
  it('case 5', () => {
    const input = [[2, 3], [2, 3]]
    const result = balloons(input)
    result.should.to.equal(1)
  })
  it('case 6', () => {
    const input = [[-2147483646, -2147483645], [2147483646, 2147483647]]
    const result = balloons(input)
    result.should.to.equal(2)
  })
})
