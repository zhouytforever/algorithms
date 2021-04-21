export const binarySearch = (key, arr, fn = (key, arrMid) => key < arrMid) => {
  let lo = 0; let hi = arr.length - 1
  while (lo <= hi) {
    const mid = Number.parseInt((lo + hi) / 2)
    if (fn(key, arr[mid])) hi = mid - 1
    else if (fn(arr[mid], key)) lo = mid + 1
    else return mid
  }
  return null
}
export const filterByWhiteList = (source, whiteList) =>
  source.filter(e => binarySearch(e, whiteList) === null ? null : e)
