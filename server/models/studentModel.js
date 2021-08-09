const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});


module.exports = mongoose.model('Student', studentSchema);