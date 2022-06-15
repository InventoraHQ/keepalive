#!/usr/bin/env node

const { run } = require('./lib/process-wrapper.js')

if (require.main === module) {
  run(...process.argv.slice(2))
}
