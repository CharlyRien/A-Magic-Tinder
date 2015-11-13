var eventModel = require('..').models.events;

exports.addEvent = function (result, callback) {
    var releaseMongoDB = new eventModel({
        name: result.name,
        description: result.description,
        adress: result.adress,
        phone:result.phone,
        date_start : result.date_start,
        date_end : result.date_end
    });
    releaseMongoDB.save(callback);
};

exports.getEvents = function (fn) {
    eventModel.find({}, function (err, data) {
        if (err) return fn(new Error('Could not find events'));
        fn(null, data);
    });
};

exports.getEvent = function (result,callback) {
    eventModel.findOne ({'_id' : result._id}, function (err, data) {
        if (err) return fn(new Error('Could not find this event'));
        fn(null, data);
    });
};