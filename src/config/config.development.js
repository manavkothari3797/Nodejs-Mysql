const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '192.168.2.124',
    env: 'IP_ADDRESS'
  },
  securityKey: {
    doc: 'authentication key',
    format: String,
    default: 'randomkey',
    arg: 'security-key'
  },
  port: {
    doc: 'port',
    format: 'port',
    default: '3000',
    env: 'PORT'
  },
  saltRound: {
    doc: 'saltRound',
    format: Number,
    default: 10
  },
  cors: {
    origin: {
      doc: 'port',
      format: Array,
      default: ['http://localhost:3000/']
    },
    methods: {
      doc: 'method',
      format: Array,
      default: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
    },
    preflightContinue: {
      doc: 'port',
      format: Boolean,
      default: false
    },
    optionsSuccessStatus: {
      doc: 'status',
      format: Number,
      default: 200
    }
  }
});

module.exports = config;
