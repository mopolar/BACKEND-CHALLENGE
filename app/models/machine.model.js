const mongoose = require('mongoose');

const MachineSchema = mongoose.Schema({
    product_name: String,
    product_type: String,
    model: String,
    water_line_compatible: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Machine', MachineSchema);