import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'

const module = process.argv[2]
const cwd = process.env.INIT_CWD

const exclude = ['node_modules', '.git']
const getTestFiles = async p => {
  let fileList = []
  const dir = await fs.promises.opendir(p)
  for await (const dirent of dir) {
    const { name } = dirent
    if (/^.+\.test\.js$/.test(name)) {
      fileList.push(path.join(p, name))
    } else if (dirent.isDirectory() && exclude.indexOf(name) === -1) {
      fileList = [...fileList, ...await getTestFiles(path.join(p, name))]
    }
  }
  return fileList
}
const run = async () => {
  try {
    console.log('cwd:', cwd)
    const fileList = await getTestFiles(path.join(cwd, module || ''))
    if (fileList.length <= 0) {
      console.error('没有测试文件')
      return
    }
    for (const file of fileList) {
      console.log('测试文件$', file)
      await spawnSync('mocha', [file, '-r', 'chai/register-should'], { stdio: 'inherit' })
    }
  } catch (e) {
    console.error(e)
  }
}

run()
