const express = require('express');
const bodyParser = require('body-parser');
const {config,PORT} = require('./config.js')
const ingresarUsuarios = require('./controllers/registrarUsuario.controller')
const iniciarSesion = require('./controllers/login.controller');
const eliminarUsuario = require('./controllers/eliminarUsuario.controller');
const actualizarUsuario = require('./controllers/editarUsuario.controller');

const app = express();
// Configura el middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('views'))

// Maneja la solicitud POST para ingresar usuarios
app.post('/datosRegistro', ingresarUsuarios);  
// Menaje para mostrar los datos 
app.post('/login', iniciarSesion);

// Manejar la solicitud DELETE para eliminar un usuario
// Le pasamos el id para que lo reciba con el parametro

app.delete('/database/:id', eliminarUsuario);

/* Manejar la solicitud PUT para editar un usuario Le pasamos el id para que lo reciba con el parametro
app.put('/database/:id', editarUsuario);*/


// Manejar la solicitud PUT para actualizar un usuario
app.put('/editarUsuario/:id', actualizarUsuario);

module.exports = app;