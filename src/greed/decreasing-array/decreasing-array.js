export const decreasingArray = input => {
  let dcrsParts = 0
  for (let i = 1, len = input.length; i < len; i++) {
    if (input[i] < input[i - 1]) {
      dcrsParts++
      if (dcrsParts > 1) return false
    }
  }
  return true
}
