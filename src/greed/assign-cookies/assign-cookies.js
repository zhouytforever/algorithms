import { selection } from '../../sort/sort.js'
export const assignCookies = (children, cookies) => {
  const sc = selection(children)
  const sk = selection(cookies)
  let child = 0
  let cookie = 0
  while (child < sc.length && cookie < sk.length) {
    if (sc[child] <= sk[cookie]) { child++ }
    cookie++
  }
  return child
}
