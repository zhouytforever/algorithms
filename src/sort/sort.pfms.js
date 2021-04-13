import { timesTest } from '../utils.js'
import { randomArray } from './tools.js'
import {
  selection,
  insertion,
  shell,
  mergeSort,
  quickSort
} from './sort.js'

const largeN = 1000
const times = 10
timesTest(`Selection, Insertion, Shell, Merge, Quick : ${times} times of ${largeN} array`, times, [
  ({ N, table }) => {
    selection([...table])
  },
  ({ N, table }) => {
    insertion([...table])
  },
  ({ N, table }) => {
    shell([...table])
  },
  ({ N, table }) => {
    mergeSort([...table])
  },
  ({ N, table }) => {
    quickSort([...table])
  }
], () => {
  return {
    N: largeN,
    table: randomArray(largeN)
  }
})
