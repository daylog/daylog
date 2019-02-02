const build = require('./lib/build')
const day = require('./lib/day')
const week = require('./lib/week')
const sprint = require('./lib/sprint')
const month = require('./lib/month')
const quarter = require('./lib/quarter')
const year = require('./lib/year')

class Daylog {
  constructor (options) {
    this.options = options
  }

  assign (options) {
    return Object.assign({}, this.options, options)
  }

  build (options, callback) {
    return build(this.assign(options), callback)
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
module.exports.build = build
module.exports.day = day
module.exports.week = week
module.exports.sprint =sprinty
module.exports.month = month
module.exports.quarter = quarter
module.exports.year = year
