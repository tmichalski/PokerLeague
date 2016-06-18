(function () {
  'use strict';

  angular
    .module('app.event')
    .factory('eventService', EventService);

  EventService.$inject = ['historyService', 'Event'];

  function EventService(historyService, Event) {

    return {
      getEvent: getEvent,
      getEventUsers: getEventUsers,
      getEventActivities: getEventActivities
    };

    //////////////

    function getEvent(id) {
      var event = Event.get({id: id});
      historyService.removeBackFor(["tab.eventEdit", "tab.eventAdd"]);
      return event;
    }

    function getEventUsers(id) {
      return Event.users({id: id});
    }

    function getEventActivities(id) {
      return Event.activities({id: id});
    }

  }

})();
