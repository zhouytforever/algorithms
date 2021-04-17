import { windowSubstr } from './window-substr.js'
describe('window-substr', () => {
  it('case 1', () => {
    const s = 'ADOBECODEBANC'
    const t = 'ABC'
    const result = windowSubstr(s, t)
    result.should.to.equal('BANC')
  })
  it('case 2', () => {
    const s = 'a'
    const t = 'a'
    const result = windowSubstr(s, t)
    result.should.to.equal('a')
  })
})
