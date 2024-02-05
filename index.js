#!/usr/bin/env node

const { run } = require('./lib/process-wrapper.js')

run(...process.argv.slice(2))
