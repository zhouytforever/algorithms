import fs from 'fs'
import path from 'path'

const module = process.argv[2]
const cwd = process.env.INIT_CWD

const indexTemplate =
`export const ${module} = (module) => {

}
`
const descTemplate = `# ${module}`

const testTemplate =
`import { ${module} } from './${module}.js'
describe('${module}', () => {
  it('case 1', () => {
    const input = 
    const result = ${module}(input)
    result.should.to.equal()
  })
  it('case 2', () => {
    const input = 
    const result = ${module}(input)
    result.should.to.equal()
  })
  it('case 3', () => {
    const input = 
    const result = ${module}(input)
    result.should.to.equal()
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
