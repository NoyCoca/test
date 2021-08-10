const env = require('dotenv');
env.config();
const cors = require('cors');
const express = require('express');
const connection = require('./DB')
const studentRouter = require('./router/studentRouter')
const path = require('path');
const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
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
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

// ***********************************************
