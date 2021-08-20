const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const bill = new Schema({
    name: { type: String, minLength: 1 },
    phone: { type: String, minLength: 8},
    orders: { type: String, minLength: 1 },
    total: { type: Number, min: 1 },
    location: { type: String, minLength: 1 },
    time: { type: Date, default: new Date() }
}
)


module.exports = mongoose.model('bills', bill);