var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: String,
    description : String,
    adresse : String,
    telephone: Number,
    date_debut : Date,
    date_fin : Date,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Events', EventSchema);