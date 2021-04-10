export const flowers = (flowerbed, n) => {
  let space = 0
  for (let i = 1, len = flowerbed.length - 1; i < len; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      ++space
      ++i
    }
  }
  return space >= n
}
