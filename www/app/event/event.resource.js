(function () {
  'use strict';

  angular
    .module('app.event')
    .factory('Event', Event);

  Event.$inject = ['$resource', 'appConfig'];

  //////////////

  function Event($resource, appConfig) {
    var url = appConfig.serverHostName + '/events/:id';
    var paramDefaults = {};
    var extendedActions = {
      activities: {
        url: appConfig.serverHostName + '/events/:id/activities',
        method: 'GET',
        isArray: true
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
