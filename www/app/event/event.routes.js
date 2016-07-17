(function () {
  'use strict';

  angular
    .module('app.event')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  //////////////

  function Config($stateProvider) {

    $stateProvider

      .state('tab.eventAdd', {
        url: '/seasons/:seasonId/event/add',
        back: false,
        views: {
          'seasonsTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        }
      })

      .state('tab.event', {
        url: '/seasons/:seasonId/event/:id',
        views: {
          'seasonsTab': {
            abstract: true,
            templateUrl: 'app/event/event-tabs.html',
            controller: 'EventTabsCtrl as tabs'
          }
        }
      })

      .state('tab.event.members', {
        url: '/members',
        cache: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-members.html',
            controller: 'EventMembersCtrl as vm'
          }
        }
      })

      .state('tab.event.membersEventEdit', {            // Event Edit route to preserve BACK button for each tab history
        url: '/members/edit',
        back: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.event.members'
        }
      })

      .state('tab.event.membersAddBuyIn', {
        url: '/members/buyin',
        back: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-members-buyin.html',
            controller: 'EventMembersBuyInCtrl as vm'
          }
        }
      })

      .state('tab.event.membersAddResult', {
        url: '/members/result',
        back: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-members-result.html',
            controller: 'EventMembersResultCtrl as vm'
          }
        }
      })

      .state('tab.event.notes', {
        url: '/notes',
        cache: false,
        views: {
          'eventNotesTab': {
            templateUrl: 'app/event/event-notes.html',
            controller: 'EventNotesCtrl as vm'
          }
        }
      })

      .state('tab.event.notesEventEdit', {              // Event Edit route to preserve BACK button for each tab history
        url: '/notes/edit',
        back: false,
        views: {
          'eventNotesTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.event.notes'
        }
      })

      .state('tab.event.host', {
        url: '/host',
        cache: false,
        views: {
          'eventHostTab': {
            templateUrl: 'app/event/event-host.html',
            controller: 'EventHostCtrl as vm'
          }
        }
      })

      .state('tab.event.hostEventEdit', {               // Event Edit route to preserve BACK button for each tab history
        url: '/host/edit',
        back: false,
        views: {
          'eventHostTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.event.host'
        }
      })
    ;
  }

})();
