'use strict';

process.env.EZY_HOME = __dirname
process.env.NODE_PATH = `.:${process.env.NODE_PATH || ''}:.:node_modules:${process.env.EZY_HOME}`
require('module').Module._initPaths()

let {common, apptasks} = require('ezy/gulp')

common()

/**NEWAPP**/
