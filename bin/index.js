#! /usr/bin/env node

const path = require('path')
const directoryCommand = require('directory-command')

const directory = path.join(__dirname, '..', 'commands')
const todayCommand = require('../commands/today')

const options = {
  defaultCommand: todayCommand,
  context: {}
}

directoryCommand(directory, process.argv.slice(2), options)
