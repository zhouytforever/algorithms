export const partitionLabels = input => {
  const map = {}
  const len = input.length
  for (let i = 0; i < len; i++) { // 记录每个字符最右边的位置
    const char = input.charAt(i)
    map[char] = i
  }
  let start = 0
  let end = 0
  const partitions = []
  for (let i = 0; i < len; i++) { // 最后位置最大化，同时开辟新区间
    const lastPosition = map[input.charAt(i)]
    end = Math.max(end, lastPosition)
    if (i === end) { // 如果flag=当前区间end,则开辟新区间
      partitions.push(end - start + 1)
      start = end + 1
    }
  }
  return partitions
}
