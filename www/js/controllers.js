angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('EventsCtrl', function ($scope, Events) {
       Events.all().then(function(_data){
           $scope.events = _data.data;
       });
    })

    .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
       Events.get({eventId : $stateParams.eventId}).then(function(_data){
            $scope.event = _data.data;
       });
    })

    .controller('AccountCtrl', function ($scope, $stateParams, EventsByUser) {

    EventsByUser.getEventsByUser({userId : $stateParams.userId}).then(function(_data){
      $scope.user= _data.data;
    });


        $scope.createProfil = function(username , password){
          return null;
        }
    });
