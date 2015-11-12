exports.misfortuneWheel = misfortuneWheel = require('./misfortuneWheel');
exports.events = events = require('./events');

exports.configure = function (app) {

    //MisfortuneWheel
    app.get("/events", events.eventsGet);
    app.post("/events", events.addEvent);

    app.put("/misfortuneWheel", misfortuneWheel.misfortuneWheelUpdate);
    app.post("/misfortuneWheel", misfortuneWheel.misfortuneWheelAdd);
    app.delete("/misfortuneWheel", misfortuneWheel.misfortuneWheelDelete);

};