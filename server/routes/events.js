var Generic = require('./generic')
    , eventService = require('../services/events');


exports.getEvents = function (req, res) {
    eventService.getEvents(function (err, result) {
        Generic.computeResponse(res, err, result);
    });
};

exports.addEvent = function(req,res){
    eventService.addEvent(req.body, function (err, result) {
        Generic.computeResponse(res, err, result);
    });
};

exports.getEvent = function(req,res){
	eventService.getEvent(req.params.id, function (err, result) {
		Generic.computeResponse(res, err, result);
	});
};