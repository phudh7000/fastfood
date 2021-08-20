const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const admin = new Schema({
    username: {type: String, minLength: 8, unique: true},
    password: {type: String, minLength: 8}
})


module.exports = mongoose.model('admin',admin);