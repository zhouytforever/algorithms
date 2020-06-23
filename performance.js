import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const module = process.argv[2]

async function getTestFiles (p) {
  const dir = await fs.promises.opendir(p)
  const fileList = []
  for await (const dirent of dir) {
    const { name } = dirent
    if (/^.+\.pfms\.js$/.test(name)) {
      fileList.push(path.join(p, name))
    }
  }
  return fileList
}
const run = async () => {
  try {
    const files = await getTestFiles(path.join('src', module))
    files.forEach(e => spawn('node', [e], { stdio: 'inherit' }))
  } catch (e) {
    console.error(e)
  }
}

run()
