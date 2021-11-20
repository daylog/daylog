import { join } from 'desm'
import { readFile } from 'fs/promises'

async function command (args, flags, context) {
  const filepath = join(import.meta.url, '..', 'package.json')
  const file = await readFile(filepath, 'utf-8')
  const { version } = JSON.parse(file)

  if (flags.version) {
    console.log(`${version}`)
    return process.exit()
  }

  context.help()
}

const flags = [
  {
    name: 'version',
    alias: 'v',
    type: 'boolean',
    description: 'show version of the cli'
  }
]

export default {
  command,
  flags
}
