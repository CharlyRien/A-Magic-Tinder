exports.events = events = require('./events');

exports.configure = function (app) {

    // API Event
    app.get("/events", events.getEvents);
    app.post("/events", events.addEvent);
    app.post("/event/:id", events.getEvent);
};