const isPalinrome = s => {
  let l = 0
  let r = s.length - 1
  while (l <= r) {
    if (s[l++] !== s[r--]) return false
  }
  return true
}
export const palindromeValid = input => {
  let l = -1
  let r = input.length
  while (++l <= --r) {
    if (input[l] !== input[r]) {
      if (!isPalinrome(input.substring(l + 1, r + 1)) &&
      !isPalinrome(input.substring(l, r))) return false
    }
  }
  return true
}
