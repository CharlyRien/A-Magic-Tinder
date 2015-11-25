var Generic = require('./generic')
  , accountService = require('../services/account');



exports.getProfileById = function(req,res){
  accountService.getProfileById(req.params.id, function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};

exports.getProfiles = function(req,res){
  accountService.getProfiles(function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};

exports.addProfile = function(req,res){
  accountService.addProfile(req.body, function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};

exports.deleteProfileById = function(req,res){
  accountService.deleteProfileById(req.params.id, function (err, result) {
    Generic.computeResponse(res, err, result);
  });
};


exports.checkConnection = function(req,res) {
  accountService.checkConnection(req.body,function(err,result) {
    Generic.computeResponse(res,err,result);
  });
};
