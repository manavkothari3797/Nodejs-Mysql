const cors = require('cors');
const app = require('express')();
const config = require('../config/config.development');

const options = {
  origin: config.get('cors.origin'),
  methods: config.get('cors.methods'),
  preflightContinue: config.get('cors.preflightContinue'),
  optionsSuccessStatus: config.get('cors.optionsSuccessStatus')
};

app.options('*', cors(options));

module.exports = app;
