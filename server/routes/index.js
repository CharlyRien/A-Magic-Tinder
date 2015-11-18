exports.events = events = require('./events');
var Account = require('../models/accountModel.js');

exports.configure = function (app) {

  // API Event
    app.get("/event/:id", events.getEvent);
    app.get("/events", events.getEvents);
    app.post("/events", events.addEvent);

};
