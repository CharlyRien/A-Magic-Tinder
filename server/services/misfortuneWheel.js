var misfortuneWheelModel = require('../models').misfortuneWheel;

exports.updateDeveloper = function (developer, callback) {

    misfortuneWheelModel.remove({
        name: developer.name
    }, function (err) {
        if (err) {
            return callback(err);
        }

        developer.date = new Date();
        var misfortuneWheel = new misfortuneWheelModel(developer);

        misfortuneWheel.save(callback);

    })
};

exports.getDevelopers = function (fn) {
    misfortuneWheelModel.find({}, function (err, data) {
        if (err) return fn(new Error('Could not find developers'));
        fn(null, data);
    });
};

exports.addDeveloper = function(result, callback) {
    var releaseMongoDB = new misfortuneWheelModel({name: result.name});
    releaseMongoDB.save(callback);
};

exports.deleteDeveloper = function(developer, callback){
    misfortuneWheelModel.find(developer, function (err, result) {
            if (err) {
                return callback(err);
            }
            if (!result) {
                return callback(new Error('Unknown developer id'));
            }
        return callback(null, result);
    }).remove().exec();
};