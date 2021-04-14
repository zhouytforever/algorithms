import { queueReconstruction } from './queue-reconstruction.js'
import { print } from '../../utils.js'

const run = () => {
  const input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
  const result = queueReconstruction(input)
  print(result)
}
run()
