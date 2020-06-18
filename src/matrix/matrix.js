export const print = (title, arr) => {
  console.log(title)
  console.table(arr)
}
export const transpose = (m) => {
  const cols = m.length
  const rows = m[0].length
  const result = [...Array(rows)].map(e => [])
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      result[j].push(m[i][j])
    }
  }
  return result
}
export const dot = (v1, v2) => {
  if (v1.length && v2.length && v1.length === v2.length) {
    return v1.map((e, i) => e * v2[i]).reduce((p, c) => c + p)
  }
  throw new Error('不符合点积规则' + v1 + v2)
}

export const multM2M = (m1, m2) => {
  const m1Len = m1.length
  const tm2 = transpose(m2)
  const result = []
  if (m1[0].length === m2.length) {
    for (let i = 0; i < m1Len; i++) {
      result.push([])
      for (let j = 0, len = m2[0].length; j < len; j++) {
        result[i].push(dot(m1[i], tm2[i]))
      }
    }
    return result
  }
  throw new Error('不符合矩阵乘法规则' + m1 + m2)
}
export const multL2M = (l, m) => {
}
export const multM2L = (m, l) => {
}
