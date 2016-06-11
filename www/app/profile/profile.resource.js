(function () {
  'use strict';

  angular
    .module('app.profile')
    .factory('Profile', Profile);

  Profile.$inject = ['$resource', 'appConfig'];

  //////////////

  function Profile($resource, appConfig) {
    return $resource(appConfig.serverHostName + '/users/:id');
  }

})();
