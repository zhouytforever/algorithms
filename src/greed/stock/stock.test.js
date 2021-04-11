import { stock } from './stock.js'
describe('stock', () => {
  it('case 1', () => {
    const input = [7, 1, 5, 3, 6, 4]
    const result = stock(input)
    result.should.to.equal(7)
  })
  it('case 2', () => {
    const input = [1, 2, 3, 4, 5]
    const result = stock(input)
    result.should.to.equal(4)
  })
  it('case 3', () => {
    const input = [7, 6, 4, 3, 1]
    const result = stock(input)
    result.should.to.equal(0)
  })
})
