import { singleItemSorted } from './single-item-sorted.js'
describe('single-item-sorted', () => {
  it('case 1', () => {
    const input = [1, 1, 2, 3, 3, 4, 4, 8, 8]
    const result = singleItemSorted(input)
    expect(result).to.equal(2)
  })
  it('case 2', () => {
    const input = [3, 3, 7, 7, 10, 11, 11]
    const result = singleItemSorted(input)
    expect(result).to.equal(10)
  })
  it('case 3', () => {
    const input = [3, 3, 7]
    const result = singleItemSorted(input)
    expect(result).to.equal(7)
  })
})
