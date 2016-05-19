angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // ************************
      // Tabs
      // ************************
      .state('tabsController', {
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      // ************************
      // Home
      // ************************
      .state('tabsController.home', {
        url: '/home',
        views: {
          'homeTab': {
            templateUrl: 'templates/home.html',
            controller: 'cRB2016SeasonCtrl'
          }
        }
      })

      // ************************
      // Season
      // ************************
      .state('tabsController.seasons', {
        url: '/seasons',
        views: {
          'seasonsTab': {
            templateUrl: 'templates/seasons.html',
            controller: 'seasonsCtrl'
          }
        }
      })

      .state('tabsController.seasonAdd', {
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
      .state('tabsController.event', {
        url: '/event',
        views: {
          'homeTab': {
            templateUrl: 'templates/event.html',
            controller: 'eventCtrl'
          }
        }
      })

      .state('tabsController.addEvent', {
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
      .state('tabsController.profile', {
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
