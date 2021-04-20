import { longestDictionary } from './longest-dictionary.js'
const run = () => {
  const input = 'abpcplea'
  const d = ['dog', 'applet', 'monkey', 'kpl']
  const result = longestDictionary(input, d)
  console.log(result)
}
run()