import { intervals } from './intervals.js'

describe('无重叠区间', () => {
  it('case 1', () => {
    const input = [[1, 2], [2, 3], [3, 4], [1, 3]]
    const out = intervals(input)
    out.should.to.equal(1)
  })
  it('case 2', () => {
    const input = [[1, 2], [1, 2], [1, 2]]
    const out = intervals(input)
    out.should.to.equal(2)
  })
  it('case 3', () => {
    const input = [[1, 2], [2, 3]]
    const out = intervals(input)
    out.should.to.equal(0)
  })
  it('case 4', () => {
    const input = [[1, 2], [2, 4], [1, 3]]
    const out = intervals(input)
    out.should.to.equal(1)
  })
})
