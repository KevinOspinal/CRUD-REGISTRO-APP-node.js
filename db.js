const { createPool } = require('mysql2/promise');
const {
  HOST,
  USER,
  DATABASE,
  DB_PORT
} = require('./config.js')

const conexion = createPool({
  host: HOST,
  user: USER,
  port: DB_PORT,
  database: DATABASE
});

module.exports = conexion;