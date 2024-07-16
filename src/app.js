const express = require('express');
const config = require('./config');

const app = express();
const clientes = require('./modulos/clientes/rutas');
//rutas en el navegador//
app.use('/api/clientes',clientes);
// definir que el puerto usado sera el que esta en el config js
app.set('port',config.app.port)
module.exports = app;