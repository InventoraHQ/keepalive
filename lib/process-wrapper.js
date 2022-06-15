const { spawn } = require('child_process')

const run = (command, ...args) => {
  console.info('Starting forked process:', command, ...args)

  const child = spawn(command, args, {
    stdio: 'inherit',
  })

  child.on('exit', code => {
    // Make it red
    console.info(
      '\x1b[31m%s\x1b[0m',
      `\nProcess exited with code ${code}. Restarting...\n`
    )

    run(command, ...args)
  })

  child.std
}

module.exports = {
  run,
}
