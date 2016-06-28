(function () {
  'use strict';

  angular
    .module('app.event')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('tab.event', {
        url: '/seasons/:seasonId/event/:id',
        cache: false,
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-view.html',
            controller: 'EventViewCtrl as vm'
          }
        },
        back: {
          state: 'tab.seasonView',
          getStateParams: function(stateParams) {
            return {
              id: stateParams.seasonId
            };
          }
        }
      })

      .state('tab.eventAdd', {
        url: '/seasons/:seasonId/event/add',
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        }
      })

      .state('tab.eventEdit', {
        url: '/seasons/:seasonId/event/:id/edit',
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        }
      });
  }


})();
