(function () {
  'use strict';

  angular
    .module('app.event')
    .factory('eventService', EventService);

  EventService.$inject = ['historyService', 'Event'];

  function EventService(Event) {

    return {
      getEvent: getEvent,
      getEventMembers: getEventMembers,
      getEventActivities: getEventActivities,
      saveEventActivity: saveEventActivity,
      deleteEventActivity: deleteEventActivity,
      saveEvent: saveEvent
    };

    //////////////

    function getEvent(id) {
      return Event.get({id: id});
    }

    function getEventMembers(id) {
      return Event.members({id: id});
    }

    function getEventActivities(id) {
      return Event.activities({id: id});
    }

    function saveEventActivity(id, note) {
      return Event.saveActivity({id: id, type: 1, note: note}).$promise;
    }

    function deleteEventActivity(id, activityId) {
      return Event.deleteActivity({id: id, activityId: activityId}).$promise;
    }

    function saveEvent(eventId, seasonId, name, hostUserId, eventDate) {
      var event = new Event({
        id: eventId,
        seasonId: seasonId,
        name: name,
        hostUserId: hostUserId,
        eventDate: moment(eventDate).format()
      });
      return event.$save();
    }

  }

})();
