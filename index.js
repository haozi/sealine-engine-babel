'use strict';
var pkg = require('./package.json');
var logger = require('sealine.logger')(pkg.name);

['babel-core', 'babel-preset-es2015-loose', 'babel-preset-stage-3'].forEach(item => {
  try {
    require(item);
  } catch (e) {
    logger.error(`please run \` npm install ${item} --save \``)
  }
});

var babel = require('babel-core');
module.exports = function(code, config) {
  return new Promise((resolve, reject) => {
    try {
      logger.log('config: ', config);
      var es5code = babel.transform(code, config).code;
      resolve(es5code);
    } catch (e) {
      if (e) {
        logger.error(e);
        if (e.codeFrame) {
          console.log('\n```\n')
          console.log(e.codeFrame);
          console.log('\n```\n')
          reject(e);
        }
      }
    }
  });
}
