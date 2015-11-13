angular.module('starter.services', [])
    .factory('Events', function (eventResource) {
        // Might use a resource here that returns a JSON array
        //
        //// Some fake testing data
        var events = eventResource.get();

        return {
            all: function () {
                return events;
            },
            get: function (eventId) {
                for (var i = 0; i < events.length; i++) {
                    if (events[i].id === parseInt(eventId)) {
                        return events[i];
                    }
                }
                return null;
            }
        };
    });
