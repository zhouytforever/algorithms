export const noop = () => {}
export const binarySearch = (key, arr) => {
  let lo = 0; let hi = arr.length - 1
  while (lo <= hi) {
    const mid = Number.parseInt(lo + (hi - lo) / 2)
    if (key < arr[mid]) hi = mid - 1
    else if (key > arr[mid]) lo = mid + 1
    else return mid
  }
  return null
}
export const filterByWhiteList = (source, whiteList) =>
  source.filter(e => binarySearch(e, whiteList) === null ? null : e)
