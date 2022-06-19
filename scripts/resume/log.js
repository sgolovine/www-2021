/* eslint-disable no-console */
function logError(message, internalError) {
  console.log(`[ERR] ${message}`)
  if (internalError) {
    console.log(`Internal Error: `, internalError)
  }
  process.exit(1)
}

module.exports = {
  logError,
}
