import addWeeks from 'date-fns/addWeeks/index.js'
import subWeeks from 'date-fns/subWeeks/index.js'
import zeroFill from 'zero-fill'
import getWeek from './get-week.js'

function isOdd (x) {
	return x & 1
}

export default function (sprint, date) {
	if (!date) date = new Date()

	const week = getWeek(null, date)
	const number = (sprint || Math.round(week.number / 2))
	const numberZeroFilled = zeroFill(2, number)

	const weeks = [week]
	if (week.number < 53) {
		if (isOdd(week.number)) {
			weeks.push(getWeek(week.number + 1, addWeeks(week.start, 1)))
		} else {
			weeks.unshift(getWeek(week.number - 1, subWeeks(week.start, 1)))
		}
	}

	const start = weeks[0].start
	const end = weeks[1].end

	return {
		weeks,
		number,
		numberZeroFilled,
		start,
		end
	}
}
