import { rotatedArray } from './rotated-array.js'
const run = () => {
  const nums = [6, 7, 7, 7, 7, 2, 3, 4, 5]
  const target = 2
  const result = rotatedArray(nums, target)
  console.log(result)
}
run()