var accountModel = require('../models/accountModel');

exports.addProfile= function (result, callback) {
  var releaseMongoDB = new accountModel({
    name: result.name,
    description: result.description,
    adresse: result.adresse,
    telephone: result.telephone,
    date_debut : result.date_debut,
    date_fin : result.date_fin,
    image : result.image,
    events:[
      {type: Schema.Types.ObjectId, ref: 'Events'}
    ]
  });
  releaseMongoDB.save(callback);
};

exports.getProfileById = function (result,fn) {
  accountModel.findOne({'_id' : result}, function (err, data) {
    if (err) return fn(new Error('Could not find this event'));
    fn(null, data);
  });
};
