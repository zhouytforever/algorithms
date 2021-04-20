export const sqrtBinary = input => {
  let l = 0
  let r = input
  let result = -1
  while (l <= r) {
    const mid = Number.parseInt((l + r) / 2)
    if (mid * mid <= input) {
      result = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return result
}
