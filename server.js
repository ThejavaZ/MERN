const express = require('express')
const app = express()

//import connection to mongodb
const abd = require('./connection')


// import routes of archive and model user

const userRoute = require('./routes/user.ts')

app.use('/api/user/', userRoute)


app.get('/', (req, res) => {
    res.end('Welcome to server')
})

//configurate basic server
app.listen(5000, () => {
    console.log('Server NODE is running')
})