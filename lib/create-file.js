import { access, writeFile, mkdir } from 'fs/promises'
import { isObject, isString } from 'assert-argument'

export default async function createFile (options) {
  isObject(options)

  const { filepath, content, directoryPath } = options

  isString(filepath)
  isString(directoryPath)
  isString(content)

  await mkdir(directoryPath, { recursive: true })

  try {
    await access(filepath)
  } catch (e) {
    await writeFile(filepath, content)
  }
}
