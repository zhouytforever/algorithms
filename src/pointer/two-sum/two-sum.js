export const twoSum = (input, target) => {
  let l = 0
  let r = input.length - 1
  while (l <= r) {
    const temp = input[l] + input[r]
    if (temp < target) l++
    else if (temp > target) r--
    else return [l + 1, r + 1]
  }
  return Array(2)
}
