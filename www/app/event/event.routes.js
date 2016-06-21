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
        url: '/event/:id',
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-view.html',
            controller: 'EventViewCtrl as vm'
          }
        }
      })

      .state('tab.eventAdd', {
        url: '/event/add',
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        }
      })

      .state('tab.eventEdit', {
        url: '/event/:id/edit',
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        }
      });
  }


})();
