(function () {
  'use strict';

  angular
    .module('app.league')
    .controller('LeagueInviteCtrl', LeagueInviteCtrl);

  LeagueInviteCtrl.$inject = ['leagueService'];

  //////////////

  function LeagueInviteCtrl(leagueService) {
    var vm = this;

    vm.league = {};
    getLeague();

    function getLeague() {
      leagueService.getLeague().then(function(leagueUser) {
        vm.league = leagueUser.league;
      });
    }
  }

})();
