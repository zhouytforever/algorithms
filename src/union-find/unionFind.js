import { print } from '../utils.js'
export class UF {
  UF (n) {
    this.count = n
    this.id = [...Array(n)].map((e, i) => i)
  }

  count () {
    return this.count
  }

  connected (p, q) {
    return this.find(p) === this.find(q)
  }

  find (p) {}
  union (p, q) {}
  print () {
    print('Union-Find ' + this.coun, this.id)
  }
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
    return this.id[p]
  }

  union (p, q) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)
    if (pRoot === qRoot) return null
    this.id[pRoot] = qRoot
    this.count--
  }
}
