(function () {
  'use strict';

  angular
    .module('app.seasons')
    .factory('Season', Season);

  Season.$inject = ['$resource'];

  //////////////

  function Season($resource) {
    return $resource('http://localhost:8080/seasons/:id', {id: '@id'});
  }

})();
