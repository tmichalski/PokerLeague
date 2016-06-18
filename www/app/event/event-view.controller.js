(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventViewCtrl', EventViewCtrl);

  EventViewCtrl.$inject = ['$stateParams', 'eventService'];

  //////////////

  function EventViewCtrl($stateParams, eventService) {
    var vm = this;
    var eventId = $stateParams.id;

    vm.event = getEvent();
    vm.users = getEventUsers();
    vm.activities = getEventActivities();

    function getEvent() {
      return eventService.getEvent(eventId);
    }

    function getEventUsers() {
      return eventService.getEventUsers(eventId)
    }

    function getEventActivities() {
      return eventService.getEventActivities(eventId)
    }

  }

})();
