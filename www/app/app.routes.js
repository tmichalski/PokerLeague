(function () {
  'use strict';

  angular
    .module('app.routes',
      [
        'ionicUIRouter'
      ])

    .config(function ($stateProvider) {

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
        })

        .state('tab.seasons', {
          url: '/seasons',
          cache: false,
          views: {
            'seasonsTab': {
              templateUrl: 'app/season/season-list.html',
              controller: 'SeasonListCtrl as vm'
            }
          }
        })

        .state('tab.seasonView', {
          url: '/seasons/:id',
          cache: false,
          views: {
            'seasonsTab': {
              templateUrl: 'app/season/season-view.html',
              controller: 'SeasonViewCtrl as vm'
            }
          }
        })

        .state('tab.seasonAdd', {
          url: '/seasons/add',
          views: {
            'seasonsTab': {
              templateUrl: 'app/season/season-edit.html',
              controller: 'SeasonEditCtrl as vm'
            }
          }
        })

        .state('tab.seasonEdit', {
          url: '/seasons/edit/:id',
          views: {
            'seasonsTab': {
              templateUrl: 'app/season/season-edit.html',
              controller: 'SeasonEditCtrl as vm'
            }
          }
        });

    });

})();
