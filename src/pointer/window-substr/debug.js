import { windowSubstr } from './window-substr.js'

(() => {
  const s = 'ADOBECODEBANC'
  const t = 'ABC'
  const result = windowSubstr(s, t)
  console.log(result)
})()
