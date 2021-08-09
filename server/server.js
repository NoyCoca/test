const env = require('dotenv');
env.config();
const connection = require('./DB')
const express = require('express');
const app = express();
const studentRouter= require('./router/studentRouter')
const cors = require('cors');
app.use(express.json())

connection.on('error', () => {
    console.log("error")
})
app.use(cors())
app.listen(8080, () => {
    console.log("confected to server")
})

app.use('/students', studentRouter)