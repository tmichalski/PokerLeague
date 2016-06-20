(function () {
  'use strict';

  angular
    .module('app.league')
    .controller('LeagueCreateCtrl', LeagueCreateCtrl);

  LeagueCreateCtrl.$inject = ['$state', 'leagueService'];

  //////////////

  function LeagueCreateCtrl($state, leagueService) {
    var vm = this;

    vm.create = create;

    function create() {
      leagueService
        .createLeague(vm.name, vm.seasonYear)
        .then(function (response) {
          if (response.isSuccess) {
            $state.go('tab.invite');
          } else {
            alert("An error occurred: " + response.error);
          }
        });
    }
  }

})();
