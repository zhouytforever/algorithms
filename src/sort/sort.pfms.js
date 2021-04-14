import { timesTest } from '../utils.js'
import { randomArray } from './tools.js'
import {
  selection,
  insertion,
  shell,
  merge,
  quick
} from './sort.js'

const arrayLength = 10000
const times = 10
timesTest(
`Selection, Insertion, Shell, Merge, Quick : ${times} times of ${arrayLength} array`,
times,
[{
  label: '选择排序',
  fn: ({ table }) => selection([...table])
}, {
  label: '插入排序',
  fn: ({ table }) => insertion([...table])
}, {
  label: '希尔排序',
  fn: ({ table }) => shell([...table])
}, {
  label: '归并排序',
  fn: ({ table }) => merge([...table])
}, {
  label: '快速排序',
  fn: ({ table }) => quick([...table])
}],
() => {
  return {
    table: randomArray(arrayLength)
  }
})
