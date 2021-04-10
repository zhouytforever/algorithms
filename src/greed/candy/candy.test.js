import { candy } from './candy.js'
describe('分配糖果', () => {
  it('case 1', () => {
    const input = [1, 0, 2]
    const out = candy(input)
    out.should.to.equal(5)
  })
  it('case 2', () => {
    const input = [1, 2, 2]
    const out = candy(input)
    out.should.to.equal(4)
  })
})
