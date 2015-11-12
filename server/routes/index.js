exports.misfortuneWheel = misfortuneWheel = require('./misfortuneWheel');

exports.configure = function (app) {

    //MisfortuneWheel
    app.get("/misfortuneWheel", misfortuneWheel.misfortuneWheelGet);
    app.put("/misfortuneWheel", misfortuneWheel.misfortuneWheelUpdate);
    app.post("/misfortuneWheel", misfortuneWheel.misfortuneWheelAdd);
    app.delete("/misfortuneWheel", misfortuneWheel.misfortuneWheelDelete);

};