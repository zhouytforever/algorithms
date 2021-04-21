// O(n)
export const firstLast = (nums, target) => {
  let first = -1
  let last = -1
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === target) {
      if (first === -1) { first = i } else { last = i }
    }
  }
  return [first, last]
}

// O(log n)
export const firstLastLogN = (nums, target) => {
  let ans = [-1, -1]
  const leftIdx = bs(nums, target, true)
  const rightIdx = bs(nums, target, false) - 1
  if (leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target) {
    ans = [leftIdx, rightIdx]
  }
  return ans
}

const bs = (nums, target, lower = true) => {
  let left = 0
  let right = nums.length - 1
  let result = nums.length
  while (left <= right) {
    const mid = Number.parseInt((left + right) / 2)
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      result = mid
    } else {
      left = mid + 1
    }
  }
  return result
}
