import path from 'node:path'
import assert from 'node:assert'
import process from 'node:process'
import fs from 'fs-extra'
import { execSync } from 'node:child_process'


const rootDir = path.resolve(__dirname, '..')

const name = 'nen-ui'


assert(process.cwd() !== __dirname)

async function buildMetaFile() {
    const packageRoot = path.resolve(rootDir, 'packages', name)
    const packageDist = path.resolve(packageRoot, 'dist')

    const packageJSON = await fs.readJSON(path.join(packageRoot, 'package.json'))
    await fs.writeJSON(path.join(packageDist, 'package.json'), packageJSON, { spaces: 2 })
}

async function build() {
    execSync('pnpm run build', { stdio: 'inherit', cwd: path.join('packages', name) })

    await buildMetaFile()
}

async function cli() {
  try {
    await build()
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

export {
  build,
}

if (require.main === module)
  cli()