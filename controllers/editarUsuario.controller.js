const conexion = require('../db.js');

const actualizarUsuario = async (req, res) => {
  const idUsuario = req.params.id; // Obtener el ID del usuario a actualizar
  const { nombre, correo, password } = req.body; // Obtener los nuevos datos del usuario

  try {
    // Ejecutar la consulta UPDATE para actualizar los datos del usuario
    await conexion.query('UPDATE usuarios SET nombre = ?, correo = ?, password = ? WHERE id = ?', [nombre, correo, password, idUsuario]);

    res.render('editarUsuario', { usuario: datosUsuario });

  } catch (error) {
    console.error('Error al actualizar el usuario en la base de datos:', error);
    res.status(500).send('Error al procesar la solicitud');
  }
};

module.exports = actualizarUsuario;