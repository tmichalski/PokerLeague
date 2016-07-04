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
            templateUrl: 'app/member/member-list.html',
            controller: 'MemberListCtrl as vm'
          }
        }
      })

      .state('tab.memberView', {
        url: '/members/:id',
        cache: false,
        views: {
          'membersTab': {
            templateUrl: 'app/member/member-view.html',
            controller: 'MemberViewCtrl as vm'
          }
        }
      })
      
      .state('tab.memberAdd', {
        url: '/members/add',
        views: {
          'membersTab': {
            templateUrl: 'app/member/member-edit.html',
            controller: 'MemberEditCtrl as vm'
          }
        }
      })

      .state('tab.memberEdit', {
        url: '/members/:id/edit',
        views: {
          'membersTab': {
            templateUrl: 'app/member/member-edit.html',
            controller: 'MemberEditCtrl as vm'
          }
        }
      });
  }

})();
