const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to ${config.appName} in ${config.environment} environment on port ${config.port}`);
});

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
