const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const food = new Schema({
    name: {type: String, require: true, unique: true},
    description: {type: String, require: true},
    slug: {type: String, slug:"name"},
    type: {type: String},
    price: {type: Number},
    image: {type: String},
    status: {type: Boolean}
})

module.exports = mongoose.model('foods',food);