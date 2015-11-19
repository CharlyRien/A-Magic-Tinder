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

    .controller('AccountCtrl', function ($scope) {
        $scope.createProfil = function(username , password){
          return null;
        }
    });
