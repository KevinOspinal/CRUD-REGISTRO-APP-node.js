const app = require('./app.js')

const {PORT} = require('./config.js')

app.listen(PORT,()=>{
    console.log('El servidor esta corriendo en el ', PORT)
})