export const queueReconstruction = input => {
  const sorted = input.sort((a, b) => a[1] - b[1])
  return sorted
}
