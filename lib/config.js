const createConfig = require('configuration-store')

const conf = createConfig({
  filename: '.daylog.json'
})

module.exports = conf
