import path from 'node:path'
import assert from 'node:assert'
import process from 'node:process'
import { execSync } from 'node:child_process'
import { consola } from 'consola'
import { version } from '../package.json'


const rootDir = path.resolve(__dirname, '..')

const name = 'nen-ui'
let command = 'npm publish --access public'


assert(process.cwd() !== __dirname)

async function buildMetaFile() {
    const packageRoot = path.resolve(rootDir, 'packages', name)
    execSync('pnpm run build', { stdio: 'inherit', cwd: packageRoot })
}

async function build() {

    await buildMetaFile()
}

async function cli() {
  try {
    await build()

    if (version.includes('beta'))
        command += ' --tag beta'

    execSync(command, { stdio: 'inherit', cwd: path.join(rootDir, 'packages', name) })
    consola.success(`Published @nenlabs/${name}`)
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