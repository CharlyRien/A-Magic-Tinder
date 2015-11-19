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

    .controller('AccountCtrl', function ($scope, Events) {
        $scope.user = true;

        $scope.submit = function($monEvent) {
          console.log($monEvent);
          Events.add($monEvent);
        }
        $scope.createProfil = function(username , password){
          return null;
        }
    });
