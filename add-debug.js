import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'

const sub = process.argv[2]
const cwd = process.env.INIT_CWD

const testParser = (fileContent, subModule) => {
  const importGroup = `(import[\\s\\S]*${subModule}\\.js'\\n)[\\s\\S]*`
  const codeGroup = 'case.+\\{([\\s\\S]*)\\s{4}\\w?[expect|should]{1}'
  const regStr = importGroup + codeGroup
  const reg = RegExp(regStr)
  const regArr = reg.exec(fileContent)
  return regArr.slice(1)
}
const run = async () => {
  try {
    const dir = sub ? path.join(cwd, sub) : cwd
    const subModule = dir.split(path.sep).slice(-1)[0]
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
      'const run = () => {' +
      body.replace(/\x20{4}/g, '  ') +
      'console.log(result)\n}\nrun()'
    await fs.writeFileSync(debugFile, debugCodeLines)
    console.log('debug: ', debugFile)
    await spawnSync('node', ['inspect', debugFile], { stdio: 'inherit' })
  } catch (e) {
    console.error(e)
  }
}

run()
