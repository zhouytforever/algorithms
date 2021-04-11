import { partitionLabels } from './partition-labels.js'
const run = () => {
  const input = 'ababcbacadefegdehijhklij'
  const result = partitionLabels(input)
  console.log('debug finished, and result is: ', result)
}
run()
