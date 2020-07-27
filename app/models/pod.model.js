const mongoose = require('mongoose');

const PodSchema = mongoose.Schema({
    product_name: String,
    product_type: String,
    coffee_flavor: String,
    pack_size :  String
}, {
    timestamps: true
});

module.exports = mongoose.model('Pod', PodSchema);