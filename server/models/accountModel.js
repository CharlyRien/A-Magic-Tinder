var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
  username: String,
  password :String,
  events:[
    {type: Schema.Types.ObjectId, ref: 'Events'}
  ]
});

module.exports = mongoose.model('Account', Account);
