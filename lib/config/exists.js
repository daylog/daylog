import { accessSync } from 'fs'
import { join } from 'path'
import { isString } from 'assert-argument'

export default function configExists (directoryPath) {
  isString(directoryPath)

  const configDirectoryPath = join(directoryPath, '.daylog')

  try {
    accessSync(configDirectoryPath)
    return true
  } catch (e) {
    // if it catches an error it probably doesn't exist yet
    return false
  }
}
