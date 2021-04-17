export const windowSubstr = (s, t) => {
  // 定义变量
  const mapT = {}
  for (const char of t) { mapT[char] = 0 }// 把t映射成k-v, 并且v=0
  let l = 0
  let r = 0
  const len = s.length
  let needed = t.length
  const regions = []

  moveRight() // 开始移动

  // 窗右右移 方法定义
  function moveRight () {
    do {
      const charR = s.charAt(r)
      if (charR in mapT) {
        if (mapT[charR] < 1) { // 当前字符未包含在子串中
          needed--
        }
        mapT[charR]++
        if (needed === 0) { // 如果目标字符全部包含在子串中
          moveLeft() // 缩窗
        }
      }
    } while (++r < len) // 当前字符是目标字符
  }

  function breakWindow () { // 破窗
    mapT[s.charAt(l)]--
    needed++
    l++
  }

  // 窗左右移 方法定义
  function moveLeft () {
    while (l < r) {
      const charL = s.charAt(l)
      if (charL in mapT) { // 当前字符是目标字符
        if (mapT[charL] === 1) { // 只有一个目标字符
          regions.push(s.substring(l, r + 1)) // 添加区间
          breakWindow() // 破窗
          return
        } else { // 有更多目标字符
          mapT[charL]--
        }
      }
      ++l
    }
  }
  return regions.reduce((pre, cur) =>
    cur.length < pre.length ? cur : pre, s)
}
