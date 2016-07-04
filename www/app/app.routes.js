(function () {
  'use strict';

  angular
    .module('app')
    .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  ///////////////

  function Config($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        templateUrl: 'app/app-tabs.html',
        abstract: true
      });

    $urlRouterProvider.otherwise('/league')
  }

})();
