import { print } from '../utils.js'
import { QuickFind, QuickUnion } from './unionFind.js'

describe('union find test', () => {
  const N = 10
  const table = [
    [4, 3],
    [3, 8],
    [6, 5],
    [9, 4],
    [2, 1],
    [8, 9],
    [5, 0],
    [7, 2],
    [6, 1],
    [1, 0],
    [6, 7]
  ]
  print(table)
  it('test quick find', () => {
    const qf = new QuickFind(N)
    for (const [p, q] of table) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    qf.print()
  })
})
