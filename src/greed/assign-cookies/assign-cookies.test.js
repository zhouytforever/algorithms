import { assignCookies } from './assign-cookies.js'

describe('分配饼干', () => {
  it('case 1', () => {
    const child = [1, 2]
    const cookies = [1, 2, 3]
    const result = assignCookies(child, cookies)
    result.should.to.equal(2)
  })
  it('case 2', () => {
    const child = [1, 2, 3]
    const cookies = [1, 1]
    const result = assignCookies(child, cookies)
    result.should.to.equal(1)
  })
})
