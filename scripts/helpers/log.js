function build(message) {
  console.log(`🚚 ${message}`)
}

function write(message) {
  console.log(`📋 ${message}`)
}

function success(message) {
  console.log(`✅ ${message}`)
}

function error(message) {
  console.log(`❌ ${message}`)
}

module.exports = { build, write, success, error }
