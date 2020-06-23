import { print } from '../utils.js'
import { QuickFind, QuickUnion, WeightedQuickUnion } from './unionFind.js'
import chai from 'chai'

const { expect } = chai
const tiny = [
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
const tinyN = 20
describe('正确性', () => {
  it('union find', () => {
    print('orign tiny', tiny)
    const qf = new QuickFind(tinyN)
    for (const [p, q] of tiny) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    qf.print()
    expect(qf.ids()).to.be.an('array').lengthOf(20)
  })
  it('quick union', () => {
    const qf = new QuickUnion(tinyN)
    for (const [p, q] of tiny) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    qf.print()
    expect(qf.ids()).to.be.an('array').lengthOf(20)
  })
  it('weighted quick union', () => {
    const qf = new WeightedQuickUnion(tinyN)
    for (const [p, q] of tiny) {
      if (qf.connected(p, q)) continue
      qf.union(p, q)
    }
    qf.print()
    expect(qf.ids()).to.be.an('array').lengthOf(20)
  })
})
