require('dotenv').config();

const config = {
  appName: process.env.APP_NAME || 'DefaultApp',
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
};

module.exports = config;