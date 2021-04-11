export const balloons = points => {
  if (points.length === 0) return 0
  const sb = points.sort((a, b) => a[0] - b[0])
  let arrows = 1
  let lastArrow = sb[0]
  for (let i = 1, len = sb.length; i < len; i++) {
    if (sb[i][0] <= lastArrow[1] && lastArrow[1] <= sb[i][1]) { // 如果当前被箭穿过
      continue
    } else {
      if (lastArrow[1] < sb[i][1]) {
        arrows++
      }
      lastArrow = sb[i]
    }
  }
  return arrows
}
