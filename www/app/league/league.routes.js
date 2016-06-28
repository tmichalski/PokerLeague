(function () {
  'use strict';

  angular
    .module('app.league')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('tab.league', {
        cache: false,
        url: '/league',
        views: {
          'leagueTab': {
            templateUrl: 'app/league/league-home.html',
            controller: 'LeagueHomeCtrl as vm'
          }
        }
      })
  }

})();
