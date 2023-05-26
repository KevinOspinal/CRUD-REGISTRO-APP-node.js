const conexion = require('../db.js');

const eliminarUsuario = async (req, res) => {
  const idUsuario = req.params.id; // Obtener el ID del usuario a eliminar

  try {
    // Ejecutar la consulta DELETE
    const resultado = await conexion.query('DELETE FROM usuarios WHERE id = ?', [idUsuario]);

    console.log('Usuario eliminado de la base de datos');
    console.log(resultado); // Mostrar el resultado de la consulta en la consola

    res.send('Usuario eliminado correctamente de la base de datos');
  } catch (error) {
    console.error('Error al eliminar el usuario de la base de datos:', error);
    res.status(500).send('Error al procesar la solicitud');
  }
};

module.exports = eliminarUsuario;