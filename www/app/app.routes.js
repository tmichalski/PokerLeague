(function () {
  'use strict';

  angular
    .module('app')
    .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Config($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        templateUrl: 'templates/tabs.html',
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
      })

      // ************************
      // Events
      // ************************
      .state('tab.event', {
        url: '/event',
        views: {
          'homeTab': {
            templateUrl: 'templates/event.html',
            controller: 'eventCtrl'
          }
        }
      })

      .state('tab.addEvent', {
        url: '/event/add',
        views: {
          'homeTab': {
            templateUrl: 'templates/addEvent.html',
            controller: 'addEventCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/home')
  }

})();
