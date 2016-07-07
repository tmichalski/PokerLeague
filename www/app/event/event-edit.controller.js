(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventEditCtrl', EventEditCtrl);

  EventEditCtrl.$inject = ['$stateParams', '$ionicPopup', 'Event', 'Member', 'Season', 'eventService', 'routeService'];

  //////////////

  function EventEditCtrl($stateParams, $ionicPopup, Event, Member, Season, eventService, routeService) {
    var vm = this;
    vm.event = getEvent();
    vm.members = getMembers();
    vm.seasons = getSeasons();
    vm.saveEvent = saveEvent;
    vm.deleteEvent = deleteEvent;

    function getEvent() {
      var event;

      if ($stateParams.id) {
        event = Event.get({id: $stateParams.id});
      } else {
        event = new Event();
        event.season = {id: $stateParams.seasonId};
        event.isActive = false;
      }

      return event;
    }

    function getSeasons() {
      return Season.query();
    }

    function getMembers() {
      return Member.query();
    }

    function saveEvent() {
      eventService.saveEvent(vm.event.id, vm.event.season.id, vm.event.name, vm.event.hostMember.id, vm.event.eventDate)
        .then(function(event) {
          routeService.go('tab.event', {id: event.id, seasonId: vm.event.season.id});
        });
    }

    function deleteEvent() {
      var confirm = $ionicPopup.confirm({
        title: "Delete Event",
        template: 'Are you sure you want to delete the ' + vm.event.name + ' event?<br /><br />'
        + 'WARNING! Deleting your event will also delete all information tied to an event.'
      });

      confirm.then(function(res) {
        if (res) {
          vm.event.$delete()
            .then(function () {
              routeService.go('tab.event', {id: vm.event.id, seasonId: vm.event.season.id});
            });
        }
      });
    }
  }

})();
