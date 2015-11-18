angular.module('starter.services', [])
    .factory('Events', function ($http) {
        var BASE_URL = "http://localhost:5000";
        return {
            all: function () {
                    var url = BASE_URL + "/api/events";
                    return $http.get(url).success(function(){
                        console.log("Events request worked");
                    });
            },
            get: function (ObjectId) {
               return $http({
                    url: BASE_URL + "/api/event/"+ ObjectId.eventId,
                    method: "GET",
                    params : {
                        id : ObjectId.eventId
                    }
                });
            }
        };
    });
