const {defineConfig} = require('@efox/emp')
const compile = require('@efox/emp-compile-swc')
module.exports = defineConfig(() => {
  return {
    compile,
    css: {
      minType: 'swc',
    },
    debug: {
      clearLog: false,
      level: 'debug',
      webpackCache: false,
    },
  }
})
