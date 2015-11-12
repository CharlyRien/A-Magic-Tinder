var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: String,
    description : String,
    adress : String,
    phone: number,
    date_start : Date,
    date_end : Date,
    updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Events', EventSchema);