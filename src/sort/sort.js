export { print } from '../utils.js'
export const compareTo = (a, b) => a < b
export const less = (v, w) => compareTo(v, w) < 0
export const exch = (a, i, j) => {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}
export const show = a => console.log(a.join(' '))
export const isSorted = a => {
  for (let i = 1, len = a.length; i < len; i++) {
    if (less(a[i], a[i - 1])) return false
    return true
  }
}
