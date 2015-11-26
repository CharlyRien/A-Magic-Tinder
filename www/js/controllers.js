angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('EventsCtrl', function ($rootScope, $scope, Events) {
    $scope.changeData = false;

    //Watch datas , refresh !
    $rootScope.$on('changeData', function () {
      Events.all().then(function (_data) {
        $scope.events = _data.data;
      });
    });

    Events.all().then(function (_data) {
      $scope.events = _data.data;
    });
  })

  .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
    Events.get({eventId: $stateParams.eventId}).success(function (_data) {
      $scope.event = _data;
    });
  })

  .controller('AddEventCtrl', function ($state, $rootScope, $scope, Events) {
    $scope.submit = function ($monEvent) {
      Events.add($monEvent).then(function () {
        $rootScope.$broadcast('changeData');
        $state.go('tab.events');
      });
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
  .controller('AccountCtrl', function ($scope, $rootScope, $stateParams, EventsByUser, User, $state) {

    $scope.userHere = false;

    $scope.connection = function ($monUser) {
      User.checkConnection($monUser).success(function (_data) {
        $rootScope.user = _data.data;
        $rootScope.userHere = true;
        $state.go('tab.get-events-user');
      });
    };

    $scope.deleteUser = function (user) {
      User.deleteUser(user).then(function () {
        $scope.messageDelete = "Suppresion effectuée";
      });
    };
    $scope.addUser = function (user) {
      User.addUser(user).success(function () {
        $scope.messageAdd = "Inscription effectuée";
        $rootScope.userHere = true;
        $state.go('tab.account');
      });
    };

    EventsByUser.getUserById({userId: $stateParams.userId}).then(function (_data) {
      $scope.user = _data.data;
    });
  });
