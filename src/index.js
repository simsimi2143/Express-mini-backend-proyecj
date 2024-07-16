// definimos una constante la cual indica que se cargaran las
// funcionalidades del archivo app.js
const app = require('./app');

app.listen(app.get('port'),() => {
    console.log('Servidor activo en el puerto',app.get("port"));
});