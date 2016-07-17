(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventHostCtrl', EventHostCtrl);

  EventHostCtrl.$inject = ['$stateParams', 'eventService', 'routeService'];

  //////////////

  function EventHostCtrl($stateParams, eventService, routeService) {
    var vm = this;
    var eventId = $stateParams.id;

    vm.event = getEvent();
    vm.editEvent = editEvent;
    vm.backToSeasonView = backToSeasonView;

    function getEvent() {
      return eventService.getEvent(eventId);
    }

    function editEvent() {
      routeService.go('tab.event.hostEventEdit', {id: vm.event.id, seasonId: vm.event.season.id});
    }

    function backToSeasonView() {
      routeService.go('tab.seasonView', {id: vm.event.season.id});
    }

  }

})();
