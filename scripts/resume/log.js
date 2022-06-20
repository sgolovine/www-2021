/* eslint-disable no-console */
function logError(message, internalError) {
  console.log(`[ERR] ${message}`)
  if (internalError) {
    console.log(`Internal Error: `, internalError)
  }
  process.exit(1)
}

function logInfo(message, customNamespace) {
  const namespace = customNamespace || "INFO"
  console.log(`[${namespace}] ${message}\n`)
}

module.exports = {
  logError,
  logInfo,
}
