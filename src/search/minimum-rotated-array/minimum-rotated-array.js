export const minimumRotatedArray = a => {
  let lo = 0
  let hi = a.length - 1
  while (lo < hi) {
    const mid = Number.parseInt((hi + lo) / 2)
    if (a[mid] > a[hi]) {
      lo = mid + 1
    } else if (a[mid] < a[hi]) {
      hi = mid
    } else {
      hi--
    }
  }
  return a[hi]
}
