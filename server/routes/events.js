var Generic = require('./generic')
    , eventService = require('../services').events;

//exports.misfortuneWheelUpdate = function (req, res) {
//    var body = req.body;
//    var developer =
//    {name: body.name};
//    misfortuneWheelService.updateDeveloper(developer, function (err, result) {
//        Generic.computeResponse(res, err, result);
//    });
//};

exports.eventsGet = function (req, res) {
    eventService.getEvents(function (err, result) {
        Generic.computeResponse(res, err, result);
    });
};

//exports.misfortuneWheelDelete = function (req,res) {
//    var body = req.body;
//    var developer =
//    {name: body.name};
//    misfortuneWheelService.deleteDeveloper(developer, function (err, result) {
//        Generic.computeResponse(res, err, result);
//    });
//};

exports.addEvent = function(req,res){
    eventService.addEvent(req.body, function (err, result) {
        Generic.computeResponse(res, err, result);
    })
};