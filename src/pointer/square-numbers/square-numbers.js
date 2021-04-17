export const squareNumbers = input => {
  let l = 0
  let r = Number.parseInt(Math.sqrt(input))
  while (l <= r) {
    const sum = l * l + r * r
    if (sum === input) return true
    else if (sum < input) l++
    else r--
  }
  return false
}
