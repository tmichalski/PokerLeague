(function () {
  'use strict';

  angular
    .module('app.league')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('tab.league', {
        url: '/league',
        cache: false,
        views: {
          'leagueTab': {
            templateUrl: 'app/season/season-view.html',
            controller: 'SeasonViewCtrl as vm'
          }
        },
        redirect: {
          'tab.event': 'tab.leagueEventView',
          'tab.eventAdd': 'tab.leagueEventAdd',
          'tab.seasonEdit': 'tab.leagueSeasonEdit'
        }
      })

      .state('tab.leagueSeasonEdit', {
        url: '/league/:id/edit',
        views: {
          'leagueTab': {
            templateUrl: 'app/season/season-edit.html',
            controller: 'SeasonEditCtrl as vm'
          }
        },
        redirect: {
          'tab.seasonView': 'tab.league'
        }
      })

      .state('tab.leagueEventView', {
        url: '/league/:seasonId/event/:id',
        cache: false,
        views: {
          'leagueTab': {
            templateUrl: 'app/event/event-view.html',
            controller: 'EventViewCtrl as vm'
          }
        },
        redirect: {
          'tab.eventEdit': 'tab.leagueEventEdit'
        }
      })

      .state('tab.leagueEventAdd', {
        url: '/league/:seasonId/event/add',
        views: {
          'leagueTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event': 'tab.leagueEventView'
        }
      })

      .state('tab.leagueEventEdit', {
        url: '/league/:seasonId/event/:id/edit',
        views: {
          'leagueTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event': 'tab.leagueEventView'
        }
      });
  }


})();
