angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('EventsCtrl', function ($scope, Events) {
       Events.all().then(function(_data){
           $scope.events = _data.data;
       });
    })

    .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
        $scope.event = Events.get({eventId : $stateParams.eventId});
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
