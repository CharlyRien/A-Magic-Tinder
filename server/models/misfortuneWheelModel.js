var mongoose = require('mongoose');

var DeveloperSchema = new mongoose.Schema({
    name: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Developer', DeveloperSchema);