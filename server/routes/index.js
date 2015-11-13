exports.events = events = require('./events');

exports.configure = function (app) {

    // API Event
    app.get("/event/:id", events.getEvent);
    app.get("/events", events.getEvents);
    app.post("/events", events.addEvent);

};