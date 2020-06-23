import { print, timesTest, randomPairs } from '../utils.js'
import { QuickFind, QuickUnion, WeightedQuickUnion } from './unionFind.js'

const largeN = 10000
timesTest('QuickFind VS QuickUnion VS WeightedQuickUnion 10 times', 10, [
  ({ N, table }) => {
    const qf = new QuickFind(N)
    for (const [p, q] of table) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    print(`find 有 ${qf.getCount()} 组`)
  },
  ({ N, table }) => {
    const qf = new QuickUnion(N)
    for (const [p, q] of table) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    print(`union 有 ${qf.getCount()} 组`)
  },
  ({ N, table }) => {
    const qf = new WeightedQuickUnion(N)
    for (const [p, q] of table) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    print(`weighted 有 ${qf.getCount()} 组`)
  }
], () => {
  return {
    N: largeN,
    table: randomPairs(1.5 * largeN, largeN)
  }
})
