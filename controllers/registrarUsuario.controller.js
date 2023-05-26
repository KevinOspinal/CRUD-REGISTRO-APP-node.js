const conexion = require('../db.js');

const ingresarUsuarios = async (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    try {
      // Ejecuta la consulta INSERT
      const resultado = await conexion.query('INSERT INTO usuarios (nombre, correo,password) VALUES (?, ?, ?)', [nombre, correo,contrasena]);
      
      console.log('Datos insertados en la base de datos');
      console.log(resultado); // Muestra el resultado de la consulta en la consola

      res.redirect('/index.html');
    } catch (error) {
      console.error('Error al insertar los datos en la base de datos:', error);
      res.status(500).send('Error al procesar la solicitud');
    }
  };  
module.exports = ingresarUsuarios;