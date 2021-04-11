import { partitionLabels } from './partition-labels.js'
describe('partition-labels', () => {
  it('case 1', () => {
    const input = 'ababcbacadefegdehijhklij'
    const result = partitionLabels(input)
    result.should.to.deep.equal([9, 7, 8])
  })
})
