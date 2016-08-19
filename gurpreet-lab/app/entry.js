'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const anngular = require('angular');
const demoApp = angular.module('demoApp', []);

require('./controller/game-controller.js');
