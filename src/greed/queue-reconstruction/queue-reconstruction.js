import { merge } from '../../sort/sort.js'
import { print } from '../../utils.js'
export const queueReconstruction = input => {
  const len = input.length
  const fn = (a, b) => a[0] > b[0] || (b[0] === a[0] && a[1] < b[1])
  const sorted = merge(input, fn)
  const queue = []
  print('sorted: ', sorted)
  for (let i = 0; i < len; i++) {
    queue.splice(sorted[i][1], 0, sorted[i])
  }
  print('queue: ', queue)
  return queue
}
