const app = require('express')();
const config = require('./config/config.development');
const middleware = require('./middleware');
const routes = require('./routes');

app.get('/', (req, res) => {
  res.json({ message: 'server connected' });
});

// middleware
app.use(middleware);

// routes
app.use(routes);

// server listening on port
const server = app.listen(config.get('port') || process.env.port, () => {
  console.log('server running on port:', server.address().port);
});
