import { minimumRotatedArray } from './minimum-rotated-array.js'
describe('minimum-rotated-array', () => {
  it('case 2', () => {
    const input = [2, 2, 2, 0, 1]
    const result = minimumRotatedArray(input)
    expect(result).to.equal(0)
  })
  it('case 3', () => {
    const input = [2, 2, 2, 4, 6, 0, 1]
    const result = minimumRotatedArray(input)
    expect(result).to.equal(0)
  })
  it('case 4', () => {
    const input = [2, 2, 2, 4, 6, 1, 1]
    const result = minimumRotatedArray(input)
    expect(result).to.equal(1)
  })
  it('case 5', () => {
    const input = [2, 2, 2, 4, 6, 2, 2]
    const result = minimumRotatedArray(input)
    expect(result).to.equal(2)
  })
  it('case 1', () => {
    const input = [1, 3, 5]
    const result = minimumRotatedArray(input)
    expect(result).to.equal(1)
  })
})
