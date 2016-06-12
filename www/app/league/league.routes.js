(function () {
  'use strict';

  angular
    .module('app.league')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('leagueRegister', {
        url: '/league/register',
        templateUrl: 'app/league/league-register.html',
        controller: 'LeagueRegisterCtrl as vm'
      })

      .state('leagueJoin', {
        url: '/league/join',
        templateUrl: 'app/league/league-join.html',
        controller: 'LeagueJoinCtrl as vm'
      })
  }

})();
