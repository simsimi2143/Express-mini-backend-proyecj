const express = require('express');
const config = require('./config');

const app = express();

// definir que el puerto usado sera el que esta en el config js
app.set('port',config.app.port)
module.exports = app;