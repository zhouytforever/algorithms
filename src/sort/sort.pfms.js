import { timesTest } from '../utils.js'
import {
  selection,
  insertion,
  shell,
  randomArray
} from './sort.js'

const largeN = 10000
const times = 20
timesTest(`Selection VS Insertion ${times} times of ${largeN} array`, times, [
  ({ N, table }) => {
    selection([...table])
  },
  ({ N, table }) => {
    insertion([...table])
  },
  ({ N, table }) => {
    shell([...table])
  }
], () => {
  return {
    N: largeN,
    table: randomArray(largeN)
  }
})
