import { Node } from './link-node.js'
import _ from 'lodash'
export class LinkList {
  constructor (data) {
    if (data) {
      this.head = new Node(data)
    } else this.head = null
    return this
  }

  append (data) {
    const node = data instanceof Node ? data : new Node(data)
    if (this.head === null) {
      this.head = node
    } else {
      let tail = this.head
      while (tail.next) {
        tail = tail.next
      }
      tail.next = node
    }
    return this
  }

  remove () {
    if (this.head === null) return null
    else if (this.head.next === null) {
      const node = this.head
      this.head = null
      return node.val
    } else {
      let pre = this.head
      let tail = this.head.next
      while (tail.next) {
        pre = tail
        tail = tail.next
      }
      pre.next = null
      return tail.val
    }
  }

  fromArray (arr) {
    if (!arr || arr.length < 1) { throw new Error('Array must not be empty') }
    const cloned = _.cloneDeep(arr)
    let pos = cloned.length - 1
    let tail = new Node(cloned[pos])
    while (--pos >= 0) {
      tail = new Node(cloned[pos], tail)
    }
    this.head = tail
    return this
  }

  toArray () {
    let pos = this.head
    const arr = []
    while (pos) {
      arr.push(pos.val)
      pos = pos.next
    }
    return arr
  }
}
