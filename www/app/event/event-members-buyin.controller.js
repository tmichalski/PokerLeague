(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventMembersBuyInCtrl', EventMembersBuyInCtrl);

  EventMembersBuyInCtrl.$inject = ['$stateParams', 'Event', 'Member', 'eventService', 'routeService'];

  //////////////

  function EventMembersBuyInCtrl($stateParams, Event, Member, eventService, routeService) {
    var vm = this;
    vm.buyIn = {};
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
      eventService.saveEventBuyIn(vm.event.id, vm.buyIn.member.id, vm.buyIn.amount)
        .then(function() {
          routeService.go('tab.event.members', {id: vm.event.id, seasonId: vm.event.season.id});
        });
    }
  }

})();
