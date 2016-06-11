(function () {
  'use strict';

  angular
    .module('app.league')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('register', {
        url: '/register',
        templateUrl: 'app/league/league-register.html',
        controller: 'LeagueRegisterCtrl'
      })
  }


})();
