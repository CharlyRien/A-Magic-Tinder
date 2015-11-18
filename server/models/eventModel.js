var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: String,
    description : String,
    adresse : String,
    telephone: String,
    date_debut : Date,
    date_fin : Date,
    image : String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Events', EventSchema);