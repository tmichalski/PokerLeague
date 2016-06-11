(function () {
  'use strict';

  angular
    .module('app.profile')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('tab.profile', {
        url: '/profile',
        views: {
          'profileTab': {
            templateUrl: 'app/profile/profile-view.html',
            controller: 'ProfileViewCtrl as vm'
          }
        }
      });
  }


})();
