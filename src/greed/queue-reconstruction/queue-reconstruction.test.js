import { queueReconstruction } from './queue-reconstruction.js'
describe('queue-reconstruction', () => {
  it('case 1', () => {
    const input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
    const result = queueReconstruction(input)
    result.should.to.deep.equal([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]])
  })
  it('case 2', () => {
    const input = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]
    const result = queueReconstruction(input)
    result.should.to.deep.equal([[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]])
  })
})
