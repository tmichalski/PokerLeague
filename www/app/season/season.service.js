(function () {
  'use strict';

  angular
    .module('app.season')
    .factory('seasonService', SeasonService);

  SeasonService.$inject = ['Season'];

  //////////////

  function SeasonService(Season) {

    return {
      getSeason: getSeason
    };

    function getSeason(id) {
      return Season.get({id: id});
    }
  }

})();

