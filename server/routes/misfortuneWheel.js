var Generic = require('./generic')
    , misfortuneWheelService = require('../services').misfortuneWheel;

exports.misfortuneWheelUpdate = function (req, res) {
    var body = req.body;
    var developer =
    {name: body.name};
    misfortuneWheelService.updateDeveloper(developer, function (err, result) {
        Generic.computeResponse(res, err, result);
    });
};

exports.misfortuneWheelGet = function (req, res) {
    misfortuneWheelService.getDevelopers(function (err, result) {
        Generic.computeResponse(res, err, result);
    });
};

exports.misfortuneWheelDelete = function (req,res) {
    var body = req.body;
    var developer =
    {name: body.name};
    misfortuneWheelService.deleteDeveloper(developer, function (err, result) {
        Generic.computeResponse(res, err, result);
    });
};

exports.misfortuneWheelAdd = function(req,res){
    misfortuneWheelService.addDeveloper(req.body, function (err, result) {
      Generic.computeResponse(res, err, result);
  })
};