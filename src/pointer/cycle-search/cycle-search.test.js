import { cycleSearch } from './cycle-search.js'
describe('cycle-search', () => {
  it('case 1', () => {
    const input = [3, 2, 0, -4]
    const pos = 1
    const result = cycleSearch(input, pos)
    expect(result).to.have.property('val', 2)
  })
  it('case 2', () => {
    const input = [1, 2]
    const pos = 0
    const result = cycleSearch(input, pos)
    expect(result).to.have.property('val', 1)
  })
  it('case 3', () => {
    const input = [1]
    const pos = -1
    const result = cycleSearch(input, pos)
    expect(result).to.be.a('null')
  })
})
