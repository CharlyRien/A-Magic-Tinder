angular.module('starter.services', [])
    .factory('Events', function ($http) {
        return {
            all: function () {
                    var url = "http://10.33.1.189:5000/api/events";
                    return $http.get(url).success(function(){
                        console.log("Events request worked");
                    });
            },
            get: function (ObjectId) {
                $http({
                    url: "http://10.33.1.189:5000/api/event/"+ ObjectId.eventId,
                    method: "GET",
                    params : {
                        id : ObjectId.eventId
                    }
                });
            }
        };
    });
