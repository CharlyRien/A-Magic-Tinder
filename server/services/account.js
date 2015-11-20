var accountModel = require('../models/accountModel');

exports.addProfile = function (result, callback) {
  var releaseMongoDB = new accountModel({
    username: result.username,
    password: result.password,
    events:[
      {type: Schema.Types.ObjectId, ref: 'Events'}
    ]
  });
  releaseMongoDB.save(callback);
};

exports.getProfileById = function (result, fn) {
  accountModel.findOne({'_id': result}, function (err, data) {
    if (err) return fn(new Error('Could not find this User'));
    fn(null, data);
  });
};
