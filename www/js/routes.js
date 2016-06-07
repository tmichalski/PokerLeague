angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      // ************************
      // Home
      // ************************
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      })

      // ************************
      // Register League
      // ************************
      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'registerController'
      })

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
        cache: false,
        views: {
          'homeTab': {
            templateUrl: 'templates/season.html',
            controller: 'seasonViewController'
          }
        }
      })

      // ************************
      // Season
      // ************************
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

      .state('tab.seasonView', {
        url: '/seasons/:id',
        cache: false,
        views: {
          'seasonsTab': {
            templateUrl: 'templates/season.html',
            controller: 'seasonViewController'
          }
        }
      })

      .state('tab.seasonAdd', {
        url: '/seasons/add',
        views: {
          'seasonsTab': {
            templateUrl: 'templates/seasonEdit.html',
            controller: 'seasonEditCtrl'
          }
        }
      })

      .state('tab.seasonEdit', {
        url: '/seasons/edit/:id',
        views: {
          'seasonsTab': {
            templateUrl: 'templates/seasonEdit.html',
            controller: 'seasonEditCtrl'
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
