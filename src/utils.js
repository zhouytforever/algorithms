export const noop = () => {}
export const print = (...args) => args.map(e =>
  e instanceof Array
    ? console.table(e)
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
const randomStart = fns => {
  const flag = Math.floor(Math.random() * fns.length)
  return [...fns.slice(flag), ...fns.slice(0, flag)]
}
export const timesTest = (title, times, fnObjects, genArgs) => {
  print(title)
  const len = fnObjects.length
  const durationMap = {}
  for (let i = 0; i < times; i++) { // 多次执行
    print(`正在执行第 ${i + 1} 次测试...`)
    const randomedFns = randomStart(fnObjects)
    const args = genArgs()
    for (let j = 0; j < len; j++) { // 单次随机开始
      const start = Date.now()
      randomedFns[j].fn(args)
      const end = Date.now()
      const currentLabel = randomedFns[j].label
      durationMap[currentLabel] = durationMap[currentLabel]
        ? [...durationMap[currentLabel], end - start]
        : []
    }
  }

  // 人性化输出
  const printObj = {}
  for (const prop in durationMap) {
    const avg = durationMap[prop].reduce((pre, cur) => pre + cur, 0) / times
    printObj[prop] = {
      's(avg)': Number((avg / 1000).toFixed(2)),
      'ms(avg)': avg
    }
  }
  print('时间对比', printObj)
}
