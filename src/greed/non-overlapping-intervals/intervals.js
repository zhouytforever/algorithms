export const intervals = intervals => {
  const sorted = intervals.sort((a, b) => a[1] < b[1])
  if (!intervals && intervals.length < 1) return 0
  const len = sorted.length
  let total = 0
  let pre = sorted[0][1]
  for (let i = 1; i < len; ++i) {
    if (sorted[i][0] < pre) ++total
    else pre = sorted[i][1]
  }
  return total
}
