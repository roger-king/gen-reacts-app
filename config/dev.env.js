'use strict'

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge({
    NODE_ENV: '"development"',
    "api_url": "http://localhost:3000/api"
})