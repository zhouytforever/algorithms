import { sqrtBinary } from './sqrt-binary.js'
describe('sqrt-binary', () => {
  it('case 1', () => {
    const input = 4
    const result = sqrtBinary(input)
    expect(result).to.equal(2)
  })
  it('case 2', () => {
    const input = 8
    const result = sqrtBinary(input)
    expect(result).to.equal(2)
  })
})
