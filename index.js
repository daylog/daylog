import build from './lib/build/index.js'
import createConfig from './lib/config/create.js'
import configExists from './lib/config/exists.js'
import readConfig from './lib/config/read.js'
import day from './lib/day.js'
import month from './lib/month.js'
import quarter from './lib/quarter.js'
import sprint from './lib/sprint.js'
import week from './lib/week.js'
import year from './lib/year.js'

export class Daylog {
	constructor (options = {}) {
		this.options = options
	}

	assign (options) {
		return Object.assign({}, this.options, options)
	}

	build (options) {
		return build(this.assign(options))
	}

	async writeConfig (options) {
		const opts = this.assign(options)
		return createConfig(opts.directoryPath, opts.config)
	}

	readConfig (options) {
		const opts = this.assign(options)
		return readConfig(opts.directoryPath)
	}

	configExists (options) {
		const opts = this.assign(options)
		return configExists(opts.directoryPath)
	}

	day (options) {
		return day(this.assign(options))
	}

	week (options) {
		return week(this.assign(options))
	}

	sprint (options) {
		return sprint(this.assign(options))
	}

	month (options) {
		return month(this.assign(options))
	}

	quarter (options) {
		return quarter(this.assign(options))
	}

	year (options) {
		return year(this.assign(options))
	}
}
