var eventModel = require('../models/eventModel');

exports.addEvent = function (result, callback) {
    var releaseMongoDB = new eventModel({
        name: result.name,
        description: result.description,
        adresse: result.adresse,
        telephone: result.telephone,
        date_debut : result.date_debut,
        date_fin : result.date_fin
    });
    releaseMongoDB.save(callback);
};

exports.getEvents = function (fn) {
    eventModel.find({}, function (err, data) {
        if (err) return fn(new Error('Could not find events'));
        fn(null, data);
    })
};

exports.getEvent = function (result,fn) {
    eventModel.findOne({'_id' : result}, function (err, data) {
        if (err) return fn(new Error('Could not find this event'));
        fn(null, data);
    });
};