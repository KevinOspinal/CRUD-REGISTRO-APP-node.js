const conexion = require('../db.js');
const ejs = require('ejs');
const path = require('path');


const iniciarSesion = async (req, res) => {
    const correo = req.body.usuario;
    const contrasena = req.body.contrasena;
  
    try {
      // Ejecuta la consulta SELECT para verificar las credenciales
      const [resultado] = await conexion.query('SELECT correo, password FROM usuarios WHERE correo = ? AND password = ?', [correo, contrasena]);
  
      console.log(resultado);
      // Verifica si se encontraron resultados en la consulta
      if (resultado.length > 0) {
        console.log(__dirname)
          // Consulta todos los usuarios de la base de datos
          const [usuarios] = await conexion.query('SELECT id, nombre, correo, password FROM usuarios');
        // Renderiza la plantilla 'usuarios.ejs' con los datos de los usuarios
        
              // Resuelve la ruta absoluta de la carpeta padre de 'controllers'
        const parentFolder = path.resolve(__dirname, '..');

      // Resuelve la ruta absoluta de 'views/usuarios.ejs' en la carpeta padre
        const templatePath = path.join(parentFolder, 'views/database.ejs');
        console.log('hola');

        console.log(templatePath);

        ejs.renderFile(templatePath , { usuarios }, (err, html) => {
          if (err) {
            console.error('Error al renderizar la plantilla:', err);
            res.status(500).send('Error al procesar la solicitud');
        } else {
          res.send(html);
        }
      });
      } else {
        setTimeout(() => {
            res.redirect('/Iniciar.html?error=1');
        }, 5000); // Retraso de 5 segundos (5000 milisegundos) antes de redireccionar al login
      }
    } catch (error) {
      console.error('Error al verificar las credenciales:', error);
    }
  };
  
  module.exports = iniciarSesion;