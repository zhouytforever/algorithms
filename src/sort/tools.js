export const randomArray = (N, max) =>
  [...Array(N)].map(() => max
    ? Number.parseInt(Math.random() * max)
    : Number.parseInt(Math.random() * N))

export const swap = (a, i, j) => {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}
export const less = (v, w) => v < w
export const greater = (v, w) => v > w
export const compare = (v, w, fn) => {
  if (!fn || typeof fn !== 'function') {
    throw new Error('compare function must be a function')
  }
  return fn(v, w)
}
export const isSorted = (a, fn = less) => {
  for (let i = 1, len = a.length; i < len; i++) {
    if (compare(a[i], a[i - 1], fn)) return false
    return true
  }
}
