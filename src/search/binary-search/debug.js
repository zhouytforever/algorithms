import { filterByWhiteList } from './binary-search.js'
const run = () => {
  const whiteList = [
    10, 11, 12, 16, 18, 23, 29, 33, 48, 48, 54, 57, 68, 77, 84, 98
  ]
  const template = [
    23, 50, 99, 48
  ]
  const result = filterByWhiteList(template, whiteList)
  expect(result).lengthOf(2)
console.log(result)
}
run()