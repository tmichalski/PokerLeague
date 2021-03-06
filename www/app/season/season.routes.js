(function () {
  'use strict';

  angular
    .module('app.season')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

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
        back: false,
        views: {
          'seasonsTab': {
            templateUrl: 'app/season/season-edit.html',
            controller: 'SeasonEditCtrl as vm'
          }
        }
      })

      .state('tab.seasonEdit', {
        url: '/seasons/:id/edit',
        back: false,
        views: {
          'seasonsTab': {
            templateUrl: 'app/season/season-edit.html',
            controller: 'SeasonEditCtrl as vm'
          }
        }
      });
  }

})();
