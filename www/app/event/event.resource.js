(function () {
  'use strict';

  angular
    .module('app.event')
    .factory('Event', Event);

  Event.$inject = ['$resource', 'appConfig'];

  //////////////

  function Event($resource, appConfig) {
    var url = appConfig.serverHostName + '/events/:id';
    var paramDefaults = {id: '@id'};
    var extendedActions = {
      activities: {
        url: appConfig.serverHostName + '/events/:id/activities',
        method: 'GET',
        isArray: true
      },

      saveActivity: {
        url: appConfig.serverHostName + '/events/:id/activities',
        method: 'POST'
      },

      deleteActivity: {
        url: appConfig.serverHostName + '/events/:id/activities/:activityId',
        method: 'DELETE'
      },

      users: {
        url: appConfig.serverHostName + '/events/:id/users',
        method: 'GET',
        isArray: true
      }
    };

    return $resource(url, paramDefaults, extendedActions);
  }

})();
