import { longestDictionary } from './longest-dictionary.js'
describe('longest-dictionary', () => {
  it('case 1', () => {
    const input = 'abpcplea'
    const d = ['ale', 'apple', 'monkey', 'plea']
    const result = longestDictionary(input, d)
    expect(result).to.equal('apple')
  })
  it('case 2', () => {
    const input = 'abpcplea'
    const d = ['a', 'b', 'c']
    const result = longestDictionary(input, d)
    expect(result).to.equal('a')
  })
  it('case 3', () => {
    const input = 'abpcplea'
    const d = ['dog', 'applet', 'monkey', 'kpl']
    const result = longestDictionary(input, d)
    expect(result).to.equal('')
  })
})
