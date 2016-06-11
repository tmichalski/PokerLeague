(function () {
  'use strict';

  angular
    .module('app.auth')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/auth-login.html',
        controller: 'AuthLoginCtrl'
      });
  }


})();
