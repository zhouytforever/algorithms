export const decreasingArray = nums => {
  let dcrsParts = 0
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] < nums[i - 1]) {
      dcrsParts++
      if (dcrsParts > 1) return false
      if (i === 1 || nums[i] >= nums[i - 2]) {
        nums[i - 1] = nums[i]
      } else {
        nums[i] = nums[i - 1]
      }
    }
  }
  return true
}
