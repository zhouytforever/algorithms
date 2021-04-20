import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'

const sub = process.argv[2]
const cwd = process.env.INIT_CWD

const testParser = (fileContent, subModule) => {
  const importGroup = `(import.+${subModule}\\.js')[\\s\\S]*`
  const codeGroup =
    'case\\s1[\\s\\S]*\\{([\\s\\S]*)\\n[\\s\\S]+[expect|should]{1}[\\s\\S]+\\}\\)'
  const regStr = importGroup + codeGroup
  const reg = RegExp(regStr)
  return reg.exec(fileContent).slice(1)
}
const run = async () => {
  try {
    const dir = sub ? path.join(cwd, sub) : cwd
    const subModule = dir.split(path.sep).slice(-1)
    const mainFile = path.join(dir, subModule + '.js')
    const testFile = path.join(dir, subModule + '.test.js')
    const debugFile = path.join(dir, 'debug.js')
    if (!await fs.existsSync(mainFile)) {
      throw new Error('No main file : ' + mainFile)
    }
    if (!await fs.existsSync(testFile)) {
      throw new Error('No test file : ' + testFile)
    }
    const fileContent = await fs.readFileSync(testFile).toString()
    const [impt, body] = testParser(fileContent, subModule)
    const debugCodeLines = impt +
      '\nconst run = () => {' +
      body.replace(/\x20{4}/g, '  ') +
      '\n  console.log(result)' +
      '\n}\nrun()'
    await fs.writeFileSync(debugFile, debugCodeLines)
    console.log('debug: ', debugFile)
    await spawnSync('node', ['inspect', debugFile], { stdio: 'inherit' })
  } catch (e) {
    console.error(e)
  }
}

run()
