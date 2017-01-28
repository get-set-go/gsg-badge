'use strict';

/**
 * Import module dependencies from node_modules
 */
const _babelJest = require('babel-jest');

/**
 * Export Jest Preprocessor configuration
 */
module.exports = {
  process: function(src, filename) {
    return _babelJest.process(src, filename).replace(/require\(\'[^\']+\.less\'\);/gm, '');
  }
};
