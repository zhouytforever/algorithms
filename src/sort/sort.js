import { compare, swap } from './tools.js'
export { print } from '../utils.js'
export const selection = (arr, fn) => {
  const a = [...arr]
  const len = a.length
  for (let i = 0; i < len; i++) { // 将a[i]和a[i+1...len]中最小的元素交换
    let min = i // 最小元素的索引
    for (let j = i + 1; j < len; j++) {
      if (compare(a[j], a[min], fn)) min = j
    }
    swap(a, i, min)
  }
  return a
}
export const insertion = (arr, fn) => {
  const a = [...arr]
  const len = a.length
  for (let i = 1; i < len; i++) { // 将a[i]插入到a[i-1]、a[i-2]、...a[0] 之中
    for (let j = i; j > 0 && compare(a[j], a[j - 1], fn); j--) swap(a, j, j - 1)
  }
  return a
}
export const shell = (arr, fn) => {
  const a = [...arr]
  const len = a.length
  let h = 1
  while (h < Number.parseInt(len / 3)) h = 3 * h + 1 // 1,4,13,40...
  while (h >= 1) {
    for (let i = h; i < len; i++) { // 将a[i]插入到a[i-h], a[i-2*h],a[i-3h]...中
      for (let j = i; j >= h; j -= h) {
        if (compare(a[j], a[j - h], fn)) {
          swap(a, j, j - h)
        }
      }
    }
    h = Number.parseInt(h / 3)
  }
  return a
}

const merge = (left, right, fn) => {
  const lenL = left.length
  const lenR = right.length
  let i = 0
  let j = 0
  const a = [...left, ...right]
  for (let k = 0, len = a.length; k < len; k++) {
    if (i >= lenL) a[k] = right[j++]
    else if (j >= lenR) a[k] = left[i++]
    else if (compare(right[j], left[i], fn)) a[k] = right[j++]
    else a[k] = left[i++]
  }
  return a
}
export const mergeSort = (arr, fn) => {
  const len = arr.length
  if (len <= 1) return arr
  const mid = Math.floor(len / 2)
  return merge(
    mergeSort(arr.slice(0, mid), fn),
    mergeSort(arr.slice(mid), fn)
  )
}
