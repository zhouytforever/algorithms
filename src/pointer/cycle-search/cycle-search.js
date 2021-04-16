import { LinkList } from '../../link-list/link-list.js'
export class CycleList extends LinkList {
  addCycle (to) {
    let cache = null
    let aim = 0
    let pos = this.head
    if (!pos || !pos.next) return this
    while (pos && pos.next) {
      if (to === aim) {
        cache = pos
      }
      pos = pos.next
      aim++
    }
    pos.next = cache
    return this
  }
}
export const cycleSearch = (input, pos) => {
  const cl = new CycleList().fromArray(input).addCycle(pos)
  let fast = cl.head
  let slow = cl.head
  // 判断是否存在环路
  do {
    if (!fast || !fast.next) return null
    fast = fast.next.next
    slow = slow.next
  } while (fast !== slow)
  // 如果存在则找出环路入口
  fast = cl.head
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return fast
}
