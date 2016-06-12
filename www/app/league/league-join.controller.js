(function () {
  'use strict';

  angular
    .module('app.league')
    .controller('LeagueJoinCtrl', LeagueJoinCtrl);

  LeagueJoinCtrl.$inject = ['$state', '$http', 'appConfig'];

  //////////////

  function LeagueJoinCtrl($state, $http, appConfig) {
    var vm = this;

    vm.join = join;

    function join() {
      vm.accessCodeError = false;

      var data = {accessCode: vm.accessCode};

      $http.post(appConfig.serverHostName + '/league/join', data)
        .then(function (response) {
          var isSuccess = response.data.isSuccess;
          if (isSuccess) {
            $state.go('tab.home');
          } else {
            vm.accessCodeError = true;
          }
        }, function (response) {
          console.log("An error occurred while requesting to join a league.");
        });
    }
  }

})();
