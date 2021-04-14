import { randomArray } from './tools.js'
import { print } from '../utils.js'
import { insertion } from './sort.js'
const run = () => {
  const arr = randomArray(8)
  print(arr)
  const result = insertion(arr)
  print(result)
}
run()
