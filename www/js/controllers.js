angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('EventsCtrl', function ($scope, Events) {
    $scope.changeData = false;

    //Watch datas , refresh !
    $scope.$watch('changeData', function(){
      Events.all().then(function (_data) {
        $scope.events = _data.data;
      });
    });

    Events.all().then(function (_data) {
      $scope.events = _data.data;
    });
  })

  .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
    Events.get({eventId: $stateParams.eventId}).then(function (_data) {
      $scope.event = _data.data;
    });
  })

  .controller('AddEventCtrl', function($scope, Events){
    $scope.submit = function ($monEvent) {
      Events.add($monEvent).then(function(){
          $scope.changeData = !$scope.changeData;
        }
      );

    };
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
  })
  .controller('AccountCtrl', function ($scope, $stateParams, EventsByUser, User) {
    $scope.connection = function ($monUser) {
      User.checkConnection($monUser).then(function (_data) {
        console.log(_data.data);
        $scope.user = _data.data;
      });
    };

    $scope.deleteUser = function (user) {
      User.deleteUser(user).then(function () {
        $scope.messageDelete = "Suppresion effectuée";
      });
    };
    $scope.addUser = function (user) {
      User.addUser(user).then(function () {
        $scope.messageAdd = "Inscription effectuée";
      });
    };

    EventsByUser.getUserById({userId: $stateParams.userId}).then(function (_data) {
      $scope.user = _data.data;
    });
  });
