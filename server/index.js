import Core from './src';

// dotenv
require('dotenv').config();

// set global config
global.config = require('./config');

new Core().start();