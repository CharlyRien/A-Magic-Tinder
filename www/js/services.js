angular.module('starter.services', [])
  .factory('Events', function ($http) {
    var BASE_URL = "http://gametinder-parpotait.rhcloud.com";
    return {
      all: function () {
        var url = BASE_URL + "/api/events";
        return $http.get(url).success(function () {
          console.log("Events request worked");
        });
      },
      get: function (ObjectId) {
        return $http({
          url: BASE_URL + "/api/event/" + ObjectId.eventId,
          method: "GET",
          params: {
            id: ObjectId.eventId
          }
        });
      },
      add: function (Object) {
        return $http.post(
          BASE_URL + "/api/events", Object);
      }
    };
  })
  .factory('EventsByUser', function ($http) {
    var BASE_URL = "http://gametinder-parpotait.rhcloud.com";
    return {
      getUserById: function (ObjectIdUser) {
        return $http({
          url: BASE_URL + "/api/user/" + ObjectIdUser.userId,
          method: "GET",
          params: {
            id: ObjectIdUser.userId
          }
        });
      }
    }
  })
  .factory('User', function ($http) {
    var BASE_URL = "http://gametinder-parpotait.rhcloud.com";
    return {
      checkConnection: function (User) {
        return $http.post(
          BASE_URL + "/api/user", User);
      },

      addUser: function (user) {
        return $http.post(
          BASE_URL + "/api/user", user);
      },

      deleteUser: function (ObjectId) {
        return $http({
          url: BASE_URL + "/api/user/" + ObjectId.userId,
          method: "DELETE",
          params: {
            id : ObjectId.userId
          }
        })
      }

    }
  });
