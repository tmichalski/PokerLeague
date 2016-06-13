(function () {
  'use strict';

  angular
    .module('app.league')
    .controller('LeagueJoinCtrl', LeagueJoinCtrl);

  LeagueJoinCtrl.$inject = ['$state', 'leagueService'];

  //////////////

  function LeagueJoinCtrl($state, leagueService) {
    var vm = this;

    vm.join = join;

    function join() {
      vm.accessCodeError = false;
      leagueService
        .joinLeague(vm.accessCode)
        .then(function (isSuccess) {
          if (isSuccess) {
            $state.go('tab.home');
          } else {
            vm.accessCodeError = true;
          }
        });
    }
  }

})();
