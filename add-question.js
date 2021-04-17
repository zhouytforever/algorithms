import fs from 'fs'
import path from 'path'

const module = process.argv[2]
const cwd = process.env.INIT_CWD
const variable = module.split('-')
  .map((e, i) => i === 0 ? e
    : String.fromCharCode(e.charCodeAt(0) - 32) + e.substr(1))
  .reduce((pre, cur) => pre + cur)

const indexTemplate =
`export const ${variable} = input => {

}
`
const descTemplate = `# ${module}`

const testTemplate =
`import { ${variable} } from './${module}.js'
describe('${module}', () => {
  it('case 1', () => {
    const input = 
    const result = ${variable}(input)
    expect(result).to.equal()
  })
  it('case 2', () => {
    const input = 
    const result = ${variable}(input)
    expect(result).to.equal()
  })
  it('case 3', () => {
    const input = 
    const result = ${variable}(input)
    expect(result).to.equal()
  })
})
`
const run = async () => {
  try {
    const subPath = path.join(cwd, module)
    console.info('正在创建模块目录...')
    fs.mkdirSync(subPath)
    console.info('正在创建文件...')
    fs.writeFileSync(path.join(subPath, module + '.js'), indexTemplate)
    fs.writeFileSync(path.join(subPath, 'desc.md'), descTemplate)
    fs.writeFileSync(path.join(subPath, module + '.test.js'), testTemplate)

    console.info('创建完成')
  } catch (e) {
    console.error(e)
  }
}

run()
