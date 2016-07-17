(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventNotesCtrl', EventNotesCtrl);

  EventNotesCtrl.$inject = ['$stateParams', '$ionicPopup', 'eventService', 'routeService'];

  //////////////

  function EventNotesCtrl($stateParams, $ionicPopup, eventService, routeService) {
    var vm = this;
    var eventId = $stateParams.id;

    vm.event = getEvent();
    vm.activities = getEventActivities();
    vm.saveNote = saveNote;
    vm.editEvent = editEvent;
    vm.backToSeasonView = backToSeasonView;

    function getEvent() {
      return eventService.getEvent(eventId);
    }

    function getEventActivities() {
      return eventService.getEventActivities(eventId)
    }

    function deleteActivity(activityId) {
      eventService.deleteActivity(activityId)
        .then(function(response) {
          if (response.error) {
            $ionicPopup.alert({title:"Error", template:"A problem occurred deleting the activity. Please try again."});
          } else {
            vm.activities = eventService.getEventActivities(eventId);
          }
        });
    }

    function saveNote() {
      if (vm.noteText.length > 0) {
        eventService.saveEventActivity(eventId, vm.noteText)
          .then(function(response) {
            if (response.error) {
              $ionicPopup.alert({title:"Error", template:"A problem occurred saving the note. Please try again."});
            } else {
              vm.noteText = "";
              vm.activities = eventService.getEventActivities(eventId);
            }
          });
      }
    }

    function editEvent() {
      routeService.go('tab.event.notesEventEdit', {id: vm.event.id, seasonId: vm.event.season.id});
    }

    function backToSeasonView() {
      routeService.go('tab.seasonView', {id: vm.event.season.id});
    }

  }

})();
