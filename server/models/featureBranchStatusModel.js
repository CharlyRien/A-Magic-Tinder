var mongoose = require('mongoose');

var FeatureBranchStatusSchema = new mongoose.Schema({
    moduleName: String,
    featureName: String,
    status: String,
    date: Date
});

module.exports = mongoose.model('FeatureBranchStatus', FeatureBranchStatusSchema);