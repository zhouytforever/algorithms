import { balloons } from './balloons.js'

describe('用最少数量的箭引爆气球', () => {
  it('case 1', () => {
    const points = [[10, 16], [2, 8], [1, 6], [7, 12]]
    const out = balloons(points)
    out.should.to.equal(2)
  })
  it('case 2', () => {
    const points = [[1, 2], [3, 4], [5, 6], [7, 8]]
    const out = balloons(points)
    out.should.to.equal(4)
  })
  it('case 3', () => {
    const points = [[1, 2], [2, 3], [3, 4], [4, 5]]
    const out = balloons(points)
    out.should.to.equal(2)
  })
  it('case 4', () => {
    const points = [[1, 2]]
    const out = balloons(points)
    out.should.to.equal(1)
  })
  it('case 5', () => {
    const points = [[2, 3], [2, 3]]
    const out = balloons(points)
    out.should.to.equal(1)
  })
})
