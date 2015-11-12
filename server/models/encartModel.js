var mongoose = require('mongoose');

var EncartSchema = new mongoose.Schema({
    message: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Encart', EncartSchema);