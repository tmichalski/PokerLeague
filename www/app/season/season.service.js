(function () {
  'use strict';

  angular
    .module('app.season')
    .factory('seasonService', SeasonService);

  SeasonService.$inject = ['historyService', 'Season'];

  //////////////

  function SeasonService(historyService, Season) {
    return {
      getSeason: function (id) {
        var season = Season.get({id: id});
        historyService.removeBackFor(["tab.seasonEdit", "tab.seasonAdd"]);
        return season;
      }
    }
  }

})();
