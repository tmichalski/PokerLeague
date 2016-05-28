angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      // ************************
      // Tabs
      // ************************
      .state('tab', {
        templateUrl: 'templates/tabs.html',
        abstract: true
      })

      // ************************
      // Home
      // ************************
      .state('tab.home', {
        url: '/home',
        views: {
          'homeTab': {
            templateUrl: 'templates/season.html',
            controller: 'seasonCtrl'
          }
        }
      })

      // ************************
      // Season
      // ************************
      .state('tab.seasonView', {
        url: '/seasons/:id',
        cache: false,
        views: {
          'seasonsTab': {
            templateUrl: 'templates/season.html',
            controller: 'seasonCtrl'
          }
        }
      })

      .state('tab.seasons', {
        url: '/seasons',
        cache: false,
        views: {
          'seasonsTab': {
            templateUrl: 'templates/seasons.html',
            controller: 'seasonsCtrl'
          }
        }
      })

      .state('tab.seasonAdd', {
        url: '/seasons/add',
        views: {
          'seasonsTab': {
            templateUrl: 'templates/seasonAdd.html',
            controller: 'seasonAddCtrl'
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
      })

      // ************************
      // Profile
      // ************************
      .state('tab.profile', {
        url: '/profile',
        views: {
          'profileTab': {
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/home')

  });
