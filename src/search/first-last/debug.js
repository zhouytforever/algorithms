import { firstLast, firstLastLogN } from './first-last.js'
const run = () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8
  const result = firstLastLogN(nums, target)
  console.log(result)
}
run()