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
      })

      .state('tab.home', {
        url: '/home',
        cache: false,
        views: {
          'homeTab': {
            templateUrl: 'app/season/season-view.html',
            controller: 'SeasonViewCtrl as vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/home')
  }

})();
