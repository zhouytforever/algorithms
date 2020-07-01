import { timesTest } from '../utils.js'
import {
  selection,
  insertion,
  shell,
  randomArray,
  mergeSort
} from './sort.js'

const largeN = 1000
const times = 10
timesTest(`Selection, Insertion, Shell, Merge ${times} times of ${largeN} array`, times, [
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
  }
], () => {
  return {
    N: largeN,
    table: randomArray(largeN)
  }
})
