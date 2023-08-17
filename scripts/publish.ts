import { execSync } from 'node:child_process'
import path from 'node:path'
import { consola } from 'consola'
import { version } from '../package.json'

let name = 'nenui'

execSync('npm run build', { stdio: 'inherit' })

let command = 'npm publish --access public'

if (version.includes('beta'))
  command += ' --tag beta'

execSync(command, { stdio: 'inherit', cwd: path.join('packages', name, 'dist') })
consola.success(`Published @nenlabs/${name}`)
