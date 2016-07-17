(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventMembersCtrl', EventMembersCtrl);

  EventMembersCtrl.$inject = ['$stateParams', 'eventService', 'routeService'];

  //////////////

  function EventMembersCtrl($stateParams, eventService, routeService) {
    var vm = this;
    var eventId = $stateParams.id;

    vm.event = getEvent();
    vm.members = getEventMembers();
    vm.editEvent = editEvent;
    vm.addBuyIn = addBuyIn;
    vm.addResult = addResult;
    vm.memberBuyinsTotal = memberBuyinsTotal;
    vm.memberResultsTotal = memberResultsTotal;
    vm.backToSeasonView = backToSeasonView;

    function getEvent() {
      return eventService.getEvent(eventId);
    }

    function getEventMembers() {
      return eventService.getEventMembers(eventId)
    }

    function editEvent() {
      routeService.go('tab.event.membersEventEdit', {id: vm.event.id, seasonId: vm.event.season.id});
    }

    function addBuyIn() {
      routeService.go('tab.event.membersAddBuyIn', {id: vm.event.id, seasonId: vm.event.season.id});
    }

    function addResult() {
      routeService.go('tab.event.membersAddResult', {id: vm.event.id, seasonId: vm.event.season.id});
    }

    function memberBuyinsTotal() {
      var total = 0;
      _.each(vm.members, function (member) {
        total += member.buyins;
      });
      return total;
    }

    function memberResultsTotal() {
      var total = 0;
      _.each(vm.members, function (member) {
        total += member.results;
      });
      return total;
    }

    function backToSeasonView() {
      routeService.go('tab.seasonView', {id: vm.event.season.id});
    }

  }

})();
