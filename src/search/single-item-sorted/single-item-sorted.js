export const singleItemSorted = arr => {
  let lo = 0
  let hi = arr.length - 1
  while (lo < hi) {
    let mid = Number.parseInt((lo + hi) / 2)
    if (mid % 2 === 1) { mid-- }
    if (arr[mid] === arr[mid + 1]) {
      lo = mid + 2
    } else {
      hi = mid
    }
  }
  return arr[lo]
}
