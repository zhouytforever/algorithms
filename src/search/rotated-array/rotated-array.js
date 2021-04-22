export const rotatedArray = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    const mid = Number.parseInt(lo + (hi - lo) / 2)
    if (target === nums[mid]) return true
    if (nums[lo] === nums[mid]) {
      lo++
    } else if (nums[mid] <= nums[hi]) { // 右边有序，对右边进行二分查找
      if (target >= nums[mid] && target <= nums[hi]) {
        lo = mid
      } else {
        hi = mid
      }
    } else if (nums[lo] < nums[mid]) { // 左边有序，对左边进行二分查找
      if (target >= nums[lo] && target <= nums[mid]) {
        hi = mid
      } else {
        lo = mid
      }
    }
  }
  return false
}
