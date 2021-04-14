import { compare, swap, less } from './tools.js'
import _ from 'lodash'

/**
 * 选择排序
 */
export const selection = (arr, fn = less) => {
  const a = _.cloneDeep(arr)
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

/**
 * 插入排序
 */
export const insertion = (arr, fn = less) => {
  const a = _.cloneDeep(arr)
  const len = a.length
  for (let i = 1; i < len; i++) { // 将a[i]插入到a[i-1]、a[i-2]、...a[0] 之中
    for (let j = i; j > 0 && compare(a[j], a[j - 1], fn); j--) {
      swap(a, j, j - 1)
    }
  }
  return a
}

/**
 * 希尔排序
 */
export const shell = (arr, fn = less) => {
  const a = _.cloneDeep(arr)
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

/**
 * 归并排序
 */
const mergeSort = (left, right, fn) => {
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
const mergeSortEntity = (arr, fn) => {
  const len = arr.length
  if (len <= 1) return arr
  const mid = Math.floor(len / 2)
  return mergeSort(
    mergeSortEntity(arr.slice(0, mid), fn),
    mergeSortEntity(arr.slice(mid), fn),
    fn
  )
}
export const merge = (arr, fn = less) => {
  try {
    const a = _.cloneDeep(arr)
    return mergeSortEntity(a, fn)
  } catch (e) {
    console.error(e)
    throw e
  }
}

/**
 * 快速排序
 */
const partition = (arr, left, right, fn) => {
  const pivot = arr[Math.floor((left + right) / 2)] // 中线元素
  let l = left // 左侧指针
  let r = right // 右侧指针
  while (l <= r) {
    while (compare(arr[l], pivot, fn)) { l++ }
    while (compare(pivot, arr[r], fn)) { r-- }
    if (l <= r) {
      swap(arr, l, r)
      l++
      r--
    }
  }
  return l
}
const quickSortEntity = (arr, left, right, fn) => {
  if (arr.length <= 1) { return arr }
  const index = partition(arr, left, right, fn)
  if (left < index - 1) { // more elements on the left side of the pivot
    quickSortEntity(arr, left, index - 1, fn)
  }
  if (index < right) { // more elements on the left side of the pivot
    quickSortEntity(arr, index, right, fn)
  }
}
export const quick = (arr, fn = less) => {
  const temp = _.cloneDeep(arr)
  quickSortEntity(temp, 0, arr.length - 1, fn)
  return temp
}
