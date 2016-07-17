(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventMembersResultCtrl', EventMembersResultCtrl);

  EventMembersResultCtrl.$inject = ['$stateParams', 'Event', 'Member', 'eventService', 'routeService'];

  //////////////

  function EventMembersResultCtrl($stateParams, Event, Member, eventService, routeService) {
    var vm = this;
    vm.result = {};
    vm.event = getEvent();
    vm.members = getMembers();
    vm.save = save;

    function getEvent() {
      return Event.get({id: $stateParams.id});
    }

    function getMembers() {
      return Member.query();
    }

    function save() {
      eventService.saveEventResult(vm.event.id, vm.result.member.id, vm.result.amount)
        .then(function() {
          routeService.go('tab.event.members', {id: vm.event.id, seasonId: vm.event.season.id});
        });
    }
  }

})();
