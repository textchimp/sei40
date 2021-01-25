import Vue from 'vue'

Vue.config.productionTip = false

Vue.config.devtools = false; // don't keep telling us to install dev tools

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)

console.log('\u001b[2J\u001b[0;0H');
