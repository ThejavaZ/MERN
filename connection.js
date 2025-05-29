const mongose = require('mongoose')
mongose.connect('mongodb://127.0.0.1:27017/crudmernstack')

const bd = mongose.connection

bd.on('connected', () => {console.log("connection success")})
bd.on('error', () => {console.log("connection failed")})

module.exports = mongose