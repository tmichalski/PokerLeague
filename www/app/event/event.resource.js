(function () {
  'use strict';

  angular
    .module('app.event')
    .factory('Event', Event);

  Event.$inject = ['$resource', 'appConfig'];

  //////////////

  function Event($resource, appConfig) {
    return $resource(appConfig.serverHostName + '/events/:id');
  }

})();
