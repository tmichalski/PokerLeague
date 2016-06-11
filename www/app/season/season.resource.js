(function () {
  'use strict';

  angular
    .module('app.season')
    .factory('Season', Season);

  Season.$inject = ['$resource', 'appConfig'];

  //////////////

  function Season($resource, appConfig) {
    return $resource(appConfig.serverHostName + '/seasons/:id', {id: '@id'});
  }

})();
