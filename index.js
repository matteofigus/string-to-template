'use strict'

const vm = require('vm')

module.exports = (exp, obj) => {
  obj = obj || {}
  obj.module = {}

  const code = 'module.exports = `' + exp + '`'

  vm.runInNewContext(code, obj)

  return obj.module.exports
}
