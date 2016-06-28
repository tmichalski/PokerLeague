(function () {
  'use strict';

  angular
    .module('app.register')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register-home.html',
        controller: 'RegisterHomeCtrl as vm'
      })

      .state('registerJoin', {
        url: '/register/join',
        templateUrl: 'app/register/register-join.html',
        controller: 'RegisterJoinCtrl as vm'
      })

      .state('registerCreate', {
        url: '/register/create',
        templateUrl: 'app/register/register-create.html',
        controller: 'RegisterCreateCtrl as vm'
      })

  }

})();
