(function () {
  'use strict';

  angular
    .module('app.member')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('tab.members', {
        cache: false,
        url: '/members',
        views: {
          'membersTab': {
            templateUrl: 'app/member/member-home.html',
            controller: 'MembersHomeCtrl as vm'
          }
        }
      })
  }

})();
