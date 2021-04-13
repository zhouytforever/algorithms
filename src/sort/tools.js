export const randomArray = (N, max) =>
  [...Array(N)].map(() => max
    ? Number.parseInt(Math.random() * max)
    : Number.parseInt(Math.random() * N))

export const show = (...args) =>
  args.map(e => {
    e instanceof Array
      ? console.log(e.join(' '))
      : console.log(e)
  })
export const swap = (a, i, j) => {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}
export const exchanged = (a, i, j) =>
  console.table([a.map((e, idx) =>
    idx === j || idx === i
      ? '' + e
      : e)])
export const isSorted = a => {
  for (let i = 1, len = a.length; i < len; i++) {
    if (less(a[i], a[i - 1])) return false
    return true
  }
}
export const compareTo = (a, b) => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}
export const less = (v, w) => compareTo(v, w) < 0
export const greater = (v, w) => compareTo(v, w) > 0
export const compare = (v, w, fn) =>
  fn && typeof fn === 'function' ? fn(v, w) : less(v, w)
