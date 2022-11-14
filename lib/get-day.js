import format from 'date-fns/format/index.js'
import zeroFill from 'zero-fill'

export default function getDay (day, date) {
	if (!date) date = new Date()
	const name = format(date, 'EEEE')
	const number = day || Number(format(date, 'dd'))
	const numberZeroFilled = zeroFill(2, number)
	const filename = `${numberZeroFilled}.md`

	return {
		name,
		number,
		numberZeroFilled,
		filename,
		date
	}
}
