const valid = (dict, input) => {
  let i = 0
  let j = 0
  while (i < dict.length && j < input.length) {
    if (dict[i] === input[j]) {
      i++
    }
    j++
  }
  return i === dict.length
}

export const longestDictionary = (input, d) => {
  const sorted = d.sort((a, b) => b.length - a.length)
  for (const dict of sorted) {
    if (valid(dict, input)) return dict
  }
  return ''
}
