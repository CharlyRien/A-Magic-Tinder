var Generic = require('./generic')
  , accountService = require('../services/account');



exports.getProfile = function(req,res){
  accountService.getProfileById(req.params.id, function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};

exports.addProfile = function(req,res){
  accountService.addProfile(req.body, function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};

exports.deleteProfile = function(req,res){
  accountService.addEvent(req.body, function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};
