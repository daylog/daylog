const build = require('./lib/build')
const day = require('./lib/day')
const week = require('./lib/week')
const sprint = require('./lib/sprint')
const month = require('./lib/month')
const quarter = require('./lib/quarter')
const year = require('./lib/year')
const createConfig = require('./lib/config/create')
const readConfig = require('./lib/config/read')
const configExists = require('./lib/config/exists')

class Daylog {
  constructor (options = {}) {
    this.options = options
  }

  assign (options) {
    return Object.assign({}, this.options, options)
  }

  build (options, callback) {
    return build(this.assign(options), callback)
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

module.exports = Daylog
