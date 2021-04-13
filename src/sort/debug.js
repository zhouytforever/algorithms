import { randomArray } from './tools.js'
import { print } from '../utils.js'
import { quickSort } from './sort.js'
const run = () => {
  const arr = randomArray(8)
  print(arr)
  const result = quickSort(arr)
  print(result)
}
run()
