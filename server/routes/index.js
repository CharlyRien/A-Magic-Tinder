exports.events = events = require('./events');
exports.account = account = require('./account');
var Account = require('../models/accountModel.js');

exports.configure = function (app) {

  // API Event
  app.get("/event/:id", events.getEvent);
  app.get("/events", events.getEvents);
  app.post("/events", events.addEvent);

  // API EventByUser
  app.get("/user/:userId", account.getProfileById);
  app.get("/user", account.getProfiles);
  app.delete("user/:userId", account.deleteProfileById);
  app.post("/user", account.addProfile);

  //app.get('/login', function (req, res) {
  //  req.login();
  //});
  //
  //
  //// =====================================
  //// LOGOUT ==============================
  //// =====================================
  //app.get('/logout', function (req, res) {
  //  req.logout();
  //  res.render('Not Authenticated')
  //});
  //
  //// process the login form
  //// app.post('/login', do all our passport stuff here);
  //
  //// =====================================
  //// SIGNUP ==============================
  //// =====================================
  //// add a account
  //app.post('/signup', account.addProfile);
  //
  //// process the signup form
  //// app.post('/signup', do all our passport stuff here);
  //
  //// =====================================
  //// PROFILE SECTION =====================
  //// =====================================
  //// we will want this protected so you have to be logged in to visit
  //// we will use route middleware to verify this (the isLoggedIn function)
  //app.get('/profile/:id', isLoggedIn, account.getProfileById);
  //  //function (req, res) {
  //  //res.render('profile.ejs', {
  //  //  user: req.user // get the user out of session and pass to template
  //  //});
  //


};
