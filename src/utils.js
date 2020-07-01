export const noop = () => {}
export const print = (...args) => args.map(e =>
  e instanceof Array ? console.table(e)
    : e instanceof Object
      ? console.table(e)
      : console.log(e)
)
export const randomNumber = (max) => Math.floor(Math.random() * max)
export const randomPairs = (num, max) =>
  [...Array(num)].map(e => [randomNumber(max), randomNumber(max)])
export const lasts = (title, fn, ...args) => {
  const start = Date.now()
  const result = fn(args)
  const end = Date.now()
  const duration = end - start
  print(`${title} 操作持续 ${duration} 毫秒，约 ${(duration / 1000).toFixed(2)} 秒`)
  return result
}
export const test = (title, fn) => {
  if (!title || typeof title !== 'string') {
    title()
    return test
  }
  print(title)
  fn()
  return test
}
const randomStart = a => {
  const flag = Math.floor(Math.random() * a.length)
  return { flag, a: [...a.slice(flag), ...a.slice(0, flag)] }
}
export const timesTest = (title, times, fns, genArgs) => {
  print(title)
  const len = fns.length
  const durations = [...Array(len)].map(() => 0)
  for (let i = 0; i < times; i++) {
    print(`正在执行第 ${i + 1} 次测试...`)
    console.log()
    const { flag, a } = randomStart(fns)
    const args = genArgs()
    for (let j = 0; j < len; j++) {
      const start = Date.now()
      a[j](args)
      const crt = (flag + j) % len
      durations[crt] = durations[crt] + (Date.now() - start)
    }
  }
  print('时间对比',
    durations.map(e => {
      const avg = e / times
      return {
        's(avg)': Number((avg / 1000).toFixed(2)),
        'ms(avg)': avg
      }
    })
  )
}
