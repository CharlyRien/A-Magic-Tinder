var mongoose = require('mongoose');

function computeReleaseDate() {
    var today = new Date();
    return today.getFullYear() + "/" + (("0" + (today.getMonth() + 1)).slice(-2)) + "/" + (("0" + today.getDate()).slice(-2));
}

var ReleaseSchema = new mongoose.Schema({
    status: String,
    jobsError : [String],
    day: {type: String, default: computeReleaseDate, unique: true},
    message: {type: String}
});

module.exports = mongoose.model('ReleaseStatus', ReleaseSchema);
module.exports.computeReleaseDate = computeReleaseDate;