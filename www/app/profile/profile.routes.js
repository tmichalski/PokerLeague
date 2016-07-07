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
        cache: false,
        views: {
          'profileTab': {
            templateUrl: 'app/member/member-view.html',
            controller: 'MemberViewCtrl as vm'
          }
        },
        redirect: {
          'tab.memberEdit': 'tab.profileMemberEdit'
        }
      })

      .state('tab.profileMemberEdit', {
        url: '/profile/:id/edit',
        back: false,
        views: {
          'profileTab': {
            templateUrl: 'app/member/member-edit.html',
            controller: 'MemberEditCtrl as vm'
          }
        },
        redirect: {
          'tab.memberView': 'tab.profile'
        }
      });
  }


})();
