import { print } from '../utils.js'
export class UF {
  constructor (n) {
    this.count = n
    this.id = [...Array(n)].map((e, i) => i)
  }

  getCount () {
    return this.count
  }

  connected (p, q) {
    return this.find(p) === this.find(q)
  }

  print () {
    print(this.id, `有${this.count}组`)
  }

  ids () {
    return this.id
  }

  find (p) {}
  union (p, q) {}
}

export class QuickFind extends UF {
  find (p) {
    return this.id[p]
  }

  union (p, q) {
    const pId = this.find(p)
    const qId = this.find(q)
    if (pId === qId) return
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pId) this.id[i] = qId
    }
    this.count--
  }
}
export class QuickUnion extends UF {
  find (p) {
    let t = p
    while (t !== this.id[t]) t = this.id[t]
    return t
  }

  union (p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)
    if (pRoot === qRoot) return null
    this.id[pRoot] = qRoot
    this.count--
  }
}
export class WeightedQuickUnion {
  constructor (n) {
    this.count = n
    this.id = [...Array(n)].map((e, i) => i)
    this.sz = [...this.id]
  }

  getCount () {
    return this.count
  }

  connected (p, q) {
    return this.find(p) === this.find(q)
  }

  print () {
    print(this.id, `有${this.count}组`)
  }

  ids () {
    return this.id
  }

  find (p) {
    let t = p
    while (t !== this.id[t]) t = this.id[t]
    return t
  }

  union (p, q) {
    const i = this.find(p)
    const j = this.find(q)
    if (i === j) return
    // 将小树的根节点连接到大树的根节点
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j
      this.sz[j] += this.sz[i]
    } else {
      this.id[j] = i
      this.sz[i] += this.sz[j]
    }
    this.count--
  }
}
