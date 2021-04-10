import { flowers } from './flowers.js'

describe('无重叠区间', () => {
  it('case 1', () => {
    const flowerbed = [1, 0, 0, 0, 1]
    const n = 1
    const out = flowers(flowerbed, n)
    out.should.to.equal(true)
  })
  it('case 2', () => {
    const flowerbed = [1, 0, 0, 0, 1]
    const n = 2
    const out = flowers(flowerbed, n)
    out.should.to.equal(false)
  })
})
