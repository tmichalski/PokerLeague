(function () {
  'use strict';

  angular
    .module('app.member')
    .factory('Member', Member);

  Member.$inject = ['$resource', 'appConfig'];

  //////////////

  function Member($resource, appConfig) {
    return $resource(appConfig.serverHostName + '/members/:id', {id: '@id'});
  }

})();
