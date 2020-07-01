import { print } from '../utils.js'
export { print } from '../utils.js'
export const randomArray = (N, max) =>
  [...Array(N)].map(() => max
    ? Number.parseInt(Math.random() * max)
    : Number.parseInt(Math.random() * N))
export const compareTo = (a, b) => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}
export const exchanged = (a, i, j) =>
  console.table([a.map((e, idx) =>
    idx === j || idx === i
      ? '' + e
      : e)])

export const show = (...args) =>
  args.map(e => {
    e instanceof Array
      ? console.log(e.join(' '))
      : console.log(e)
  })
export const exch = (a, i, j) => {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}
export const less = (v, w) => compareTo(v, w) < 0
export const isSorted = a => {
  for (let i = 1, len = a.length; i < len; i++) {
    if (less(a[i], a[i - 1])) return false
    return true
  }
}
export const selection = arr => {
  const a = [...arr]
  const len = a.length
  for (let i = 0; i < len; i++) { // 将a[i]和a[i+1...len]中最小的元素交换
    let min = i // 最小元素的索引
    for (let j = i + 1; j < len; j++) {
      if (less(a[j], a[min])) min = j
    }
    exch(a, i, min)
  }
  return a
}
export const insertion = arr => {
  const a = [...arr]
  const len = a.length
  for (let i = 1; i < len; i++) { // 将a[i]插入到a[i-1]、a[i-2]、...a[0] 之中
    for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) exch(a, j, j - 1)
  }
  return a
}
export const shell = arr => {
  const a = [...arr]
  const len = a.length
  let h = 1
  while (h < Number.parseInt(len / 3)) h = 3 * h + 1 // 1,4,13,40...
  while (h >= 1) {
    for (let i = h; i < len; i++) { // 将a[i]插入到a[i-h], a[i-2*h],a[i-3h]...中
      for (let j = i; j >= h; j -= h) {
        if (less(a[j], a[j - h])) {
          exch(a, j, j - h)
        }
      }
    }
    h = Number.parseInt(h / 3)
  }
  return a
}

const merge = (left, right) => {
  const lenL = left.length
  const lenR = right.length
  let i = 0
  let j = 0
  const a = [...left, ...right]
  for (let k = 0, len = a.length; k < len; k++) {
    if (i >= lenL) a[k] = right[j++]
    else if (j >= lenR) a[k] = left[i++]
    else if (less(right[j], left[i])) a[k] = right[j++]
    else a[k] = left[i++]
  }
  return a
}
export const mergeSort = (arr) => {
  const len = arr.length
  if (len <= 1) return arr
  const mid = Math.floor(len / 2)
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  )
}
