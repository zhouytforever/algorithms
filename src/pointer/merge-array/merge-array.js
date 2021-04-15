export const mergeArray = (nums1, m, nums2, n) => {
  const container = [...nums1]
  let a = m - 1
  let b = n - 1
  let pos = m + n - 1
  while (a >= 0 && b >= 0) {
    container[pos--] = nums1[a] > nums2[b] ? nums1[a--] : nums2[b--]
  }
  while (b >= 0) {
    container[pos--] = nums2[b--]
  }
  return container
}
