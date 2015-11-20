angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('EventsCtrl', function ($scope, Events) {
    Events.all().then(function (_data) {
      $scope.events = _data.data;
    });
  })

  .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
    Events.get({eventId: $stateParams.eventId}).then(function (_data) {
      $scope.event = _data.data;
    });
  })

  .controller('AccountCtrl', function ($scope, $stateParams, EventsByUser, Events, User) {

    $scope.event = {
      image: ''
    };
    $scope.clientSideList = [
      {text: "img/CSGO.jpg", value: "img/CSGO.jpg"},
      {text: "img/League_Of_Legends.jpg", value: "img/League_Of_Legends.jpg"},
      {text: "img/Magic the gathering.jpg", value: "img/Magic the gathering.jpg"},
      {text: "img/dice.jpeg", value: "img/dice.jpeg"},
      {text: "img/manette.jpeg", value: "img/manette.jpeg"},
      {text: "img/pc.png", value: "img/pc.png"}
    ];
    $scope.connection = function ($monUser) {
      User.checkConnection($monUser).then(function (_data) {
        $scope.user = _data.data;
        console.log($scope.user);
      });
    }
    $scope.submit = function ($monEvent) {
      Events.add($monEvent);
    }
    $scope.addUser = function (user) {
      User.addUser(user).then(function (_data_promise) {
        $scope.messageAdd = "Inscription effectuée";
      });
    }


    EventsByUser.getEventsByUser({userId: $stateParams.userId}).then(function (_data) {
      $scope.user = _data.data;
    });
  });
