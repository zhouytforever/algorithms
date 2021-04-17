import { squareNumbers } from './square-numbers.js'
describe('square-numbers', () => {
  it('case 1', () => {
    const input = 5
    const result = squareNumbers(input)
    expect(result).to.equal(true)
  })
  it('case 2', () => {
    const input = 4
    const result = squareNumbers(input)
    expect(result).to.equal(true)
  })
  it('case 3', () => {
    const input = 3
    const result = squareNumbers(input)
    expect(result).to.equal(false)
  })
  it('case 4', () => {
    const input = 2
    const result = squareNumbers(input)
    expect(result).to.equal(true)
  })
  it('case 5', () => {
    const input = 1
    const result = squareNumbers(input)
    expect(result).to.equal(true)
  })
})
