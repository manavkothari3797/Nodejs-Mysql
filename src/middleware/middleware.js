const bodyParser = require('body-parser');
const app = require('express')();
const cors = require('./cors');
const helmet = require('./helmet');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors);
app.use(helmet);

module.exports = app;
