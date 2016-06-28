(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventViewCtrl', EventViewCtrl);

  EventViewCtrl.$inject = ['$stateParams', '$ionicPopup', 'eventService', 'routeService'];

  //////////////

  function EventViewCtrl($stateParams, $ionicPopup, eventService, routeService) {
    var vm = this;
    var eventId = $stateParams.id;

    vm.event = getEvent();
    vm.users = getEventUsers();
    vm.activities = getEventActivities();
    vm.saveNote = saveNote;
    vm.editEvent = editEvent;

    function getEvent() {
      return eventService.getEvent(eventId);
    }

    function getEventUsers() {
      return eventService.getEventUsers(eventId)
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

    function editEvent(params) {
      routeService.go('tab.eventEdit', params);
    }
  }

})();
