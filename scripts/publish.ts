import { execSync } from 'node:child_process'
import path from 'node:path'
import { consola } from 'consola'
import { version } from '../package.json'

let name = 'nen-ui'

execSync('pnpm run build', { stdio: 'inherit', cwd: path.join('packages', name) })

let command = 'npm publish --access public'

if (version.includes('beta'))
  command += ' --tag beta'

execSync(command, { stdio: 'inherit', cwd: path.join('packages', name, 'dist') })
consola.success(`Published @nenlabs/${name}`)
