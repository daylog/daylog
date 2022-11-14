import endOfQuarter from 'date-fns/endOfQuarter/index.js'
import startOfQuarter from 'date-fns/startOfQuarter/index.js'
import getMonth from './get-month.js'

const quarters = [
	{ name: 'Winter', number: 1, numberZeroFilled: '01' },
	{ name: 'Spring', number: 2, numberZeroFilled: '02' },
	{ name: 'Summer', number: 3, numberZeroFilled: '03' },
	{ name: 'Fall', number: 4, numberZeroFilled: '04' }
]

export default function (quarter, date) {
	if (!date) date = new Date()

	const q = getQuarterByDate(quarter, date)

	q.start = startOfQuarter(date)
	q.end = endOfQuarter(date)
	q.startMonth = getMonth(null, q.start)
	q.endMonth = getMonth(null, q.end)

	return q
}

function getQuarterByDate (quarter, date) {
	if (quarter) {
		return quarters.find((q) => {
			return q.name === quarter || q.number === quarter
		})
	}

	const month = getMonth(null, date)

	if (month.number <= 3) {
		return quarters[0]
	}

	if (month.number <= 6) {
		return quarters[1]
	}

	if (month.number <= 9) {
		return quarters[2]
	}

	return quarters[3]
}
