
const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUser = new schema({
    userid: String,
    username: String,
    usermail: String,
    userphone: String
})

const ModelUser = mongoose.model('users', schemaUser)

module.exports = router

router.get('/test',(req , res) => {
    res.end("Test on User Model")
})