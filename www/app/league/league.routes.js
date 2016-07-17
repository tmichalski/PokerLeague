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
          'tab.event.members': 'tab.leagueEvent.members',
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

      .state('tab.leagueEventAdd', {
        url: '/league/:seasonId/event/add',
        views: {
          'leagueTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.leagueEvent.members'
        }
      })

      .state('tab.leagueEvent', {
        url: '/league/:seasonId/event/:id',
        views: {
          'leagueTab': {
            abstract: true,
            templateUrl: 'app/event/event-tabs.html',
            controller: 'EventTabsCtrl as tabs'
          }
        }
      })

      .state('tab.leagueEvent.members', {
        url: '/members',
        cache: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-members.html',
            controller: 'EventMembersCtrl as vm'
          }
        },
        redirect: {
          'tab.event.membersEventEdit': 'tab.leagueEvent.membersEventEdit',
          'tab.event.membersAddBuyIn': 'tab.leagueEvent.membersAddBuyIn',
          'tab.event.membersAddResult': 'tab.leagueEvent.membersAddResult',
          'tab.seasonView': 'tab.league',
          'tab.event.members': 'tab.leagueEvent.members',
          'tab.event.notes': 'tab.leagueEvent.notes',
          'tab.event.host': 'tab.leagueEvent.host'
        }
      })

      .state('tab.leagueEvent.membersEventEdit', {            // Event Edit route to preserve BACK button for each tab history
        url: '/members/edit',
        back: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.leagueEvent.members'
        }
      })

      .state('tab.leagueEvent.membersAddBuyIn', {
        url: '/members/buyin',
        back: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-members-buyin.html',
            controller: 'EventMembersBuyInCtrl as vm'
          }
        },
        redirect: {
          'tab.event.members': 'tab.leagueEvent.members'
        }
      })

      .state('tab.leagueEvent.membersAddResult', {
        url: '/members/result',
        back: false,
        views: {
          'eventMembersTab': {
            templateUrl: 'app/event/event-members-result.html',
            controller: 'EventMembersResultCtrl as vm'
          }
        },
        redirect: {
          'tab.event.members': 'tab.leagueEvent.members'
        }
      })

      .state('tab.leagueEvent.notes', {
        url: '/notes',
        cache: false,
        views: {
          'eventNotesTab': {
            templateUrl: 'app/event/event-notes.html',
            controller: 'EventNotesCtrl as vm'
          }
        },
        redirect: {
          'tab.event.members': 'tab.leagueEvent.members',
          'tab.event.notes': 'tab.leagueEvent.notes',
          'tab.event.host': 'tab.leagueEvent.host',
          'tab.event.notesEventEdit': 'tab.leagueEvent.notesEventEdit',
          'tab.seasonView': 'tab.league'
        }
      })

      .state('tab.leagueEvent.notesEventEdit', {              // Event Edit route to preserve BACK button for each tab history
        url: '/notes/edit',
        back: false,
        views: {
          'eventNotesTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.leagueEvent.notes'
        }
      })

      .state('tab.leagueEvent.host', {
        url: '/host',
        cache: false,
        views: {
          'eventHostTab': {
            templateUrl: 'app/event/event-host.html',
            controller: 'EventHostCtrl as vm'
          }
        },
        redirect: {
          'tab.event.members': 'tab.leagueEvent.members',
          'tab.event.notes': 'tab.leagueEvent.notes',
          'tab.event.host': 'tab.leagueEvent.host',
          'tab.event.hostEventEdit': 'tab.leagueEvent.hostEventEdit',
          'tab.seasonView': 'tab.league'
        }
      })

      .state('tab.leagueEvent.hostEventEdit', {               // Event Edit route to preserve BACK button for each tab history
        url: '/host/edit',
        back: false,
        views: {
          'eventHostTab': {
            templateUrl: 'app/event/event-edit.html',
            controller: 'EventEditCtrl as vm'
          }
        },
        redirect: {
          'tab.event.home': 'tab.leagueEvent.host'
        }
      })
      ;
  }


})();
