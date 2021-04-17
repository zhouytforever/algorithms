import { palindromeValid } from './palindrome-valid.js'
describe('palindrome-valid', () => {
  it('case 1', () => {
    const input = 'aba'
    const result = palindromeValid(input)
    expect(result).to.equal(true)
  })
  it('case 2', () => {
    const input = 'abca'
    const result = palindromeValid(input)
    expect(result).to.equal(true)
  })
  it('case 3', () => {
    const input = 'abcddba'
    const result = palindromeValid(input)
    expect(result).to.equal(true)
  })
  it('case 4', () => {
    const input = 'abcddeba'
    const result = palindromeValid(input)
    expect(result).to.equal(false)
  })
})
