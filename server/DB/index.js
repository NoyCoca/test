const mongoose = require('mongoose');
const URI = process.env.URI || 5000;

mongoose.connect(URI, {
    useNewUrlParser: true
    , useUnifiedTopology: true
})
    .then(() => console.log('Mondo connected...'))
    .catch(error => {
        console.error(error)
    })




module.exports = mongoose.connection;