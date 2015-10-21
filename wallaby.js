var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false },
      { pattern: 'node_modules/babel-core/browser-polyfill.js', instrument: false },
      { pattern: 'app/scripts/**/*.js', load: false },
      { pattern: 'app/scripts/**/tests.js', ignore: true }
    ],

    tests: [
      { pattern: 'app/scripts/**/tests.js', load: false }
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({ babel: babel, stage: 0 })
    },

    postprocessor: wallabyPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
