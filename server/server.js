const env = require('dotenv');
env.config();
const PORT = process.env.PORT || 8080
const connection = require('./DB')
const express = require('express');
const app = express();
const studentRouter = require('./router/studentRouter')
const cors = require('cors');
const path = require('path');

app.use(express.json())
app.use(express.urlencoded());
app.use(cors())

connection.on('error', () => {
    console.log("error")
})
app.listen(PORT, () => {
    console.log("confected to server ")
})

app.use('/students', studentRouter)
// ***********************************************
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

// ***********************************************
