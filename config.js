const {config} = require('dotenv');

config()

const PORT = process.env.PORT || 3000
const HOST = process.env.DB_HOST || 'localhost'
const USER = process.env.DB_USER || 'root'
const DATABASE = process.env.DB_DATABASE || 'usuarios_db'
const DB_PORT = process.env.DB_PORT || 3306

module.exports = {config,PORT,HOST,USER,DATABASE,DB_PORT};