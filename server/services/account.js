var accountModel = require('../models/accountModel');

exports.addProfile = function (result, callback) {
  var releaseMongoDB = new accountModel({
    username: result.mail,
    password: result.mdp
  });
  releaseMongoDB.save(callback);
};

exports.getProfileById = function (result, fn) {
  accountModel.findOne({'_id': result}, function (err, data) {
    if (err) return fn(new Error('Could not find this User'));
    fn(null, data);
  });
};

exports.deleteProfileById = function (result, fn) {
  accountModel.remove({'_id': result}, function (err, data) {
    if (err) return fn(new Error('Could not find this User'));
    fn(null, "Bien supprimé");
  });
};

//unused
exports.getProfiles = function (fn) {
  accountModel.find({}, function (err, data) {
    if (err) return fn(new Error('Could not find Users'));
    fn(null, data);
  });
};

exports.checkConnection = function (result, fn) {
  accountModel.find({},function(err,data) {
    console.log(data);
  });
  accountModel.findOne({'username': result.username}, function (err, data) {
    if (err) return fn(new Error('Utilisateur Inexistant'));
    if (data.password != result.password)  return fn(new Error('Mauvais mot de passe'));
    return fn(null, data);
  });
};
