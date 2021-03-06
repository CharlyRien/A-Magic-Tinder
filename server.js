var express = require('express')
  , mongoose = require('mongoose')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , logger = require('morgan')
  , routes = require('./server/routes')
  , methodOverride = require('method-override')
  , session = require('express-session')
  ;


// Initialize MongoDB connection
var db_uri = 'mongodb://gametinder-parpotait.rhcloud.com:27017/gametinder';
mongoose.connect(db_uri);

// Initialize rest api
var api = express();

routes.configure(api);

// Initialize server
var app = module.exports = express();
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(express.static(__dirname + '/www'));
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/api', api);

process.on('uncaughtException', function (err) {
  console.log(err.stack);
});

var port = process.env.NODE_PORT || 5000;
app.listen(port, function () {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
