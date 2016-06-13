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
        url: '/event',
        views: {
          'homeTab': {
            templateUrl: 'app/event/event-view.html',
            controller: 'EventViewCtrl'
          }
        }
      })

      .state('tab.addEvent', {
        url: '/event/add',
        views: {
          'homeTab': {
            templateUrl: 'templates/event-edit.html',
            controller: 'addEventCtrl'
          }
        }
      });
  }


})();
