import addWeeks from 'date-fns/addWeeks/index.js'

import getSprint from './get-sprint.js'

export default function subSprints (startingSprint, amount) {
  const { start } = startingSprint
  return getSprint(null, addWeeks(start, amount * 2))
}
