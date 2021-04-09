export const candy = scores => {
  const len = scores.length
  const candies = scores.map(e => 1)
  if (len < 2) { return len }
  for (let i = 1; i < len; ++i) {
    if (scores[i] > scores[i - 1]) { candies[i]++ }
  }
  for (let i = len - 1; i >= 0; --i) {
    if (scores[i] > scores[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1
    }
  }
  return candies.reduce((pre, cur) => pre + cur, 0)
}
