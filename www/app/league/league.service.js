(function () {
  'use strict';

  angular
    .module('app.league')
    .factory('leagueService', LeagueService);

  LeagueService.$inject = ['$http', 'appConfig'];

  function LeagueService($http, appConfig) {

    return {
      getLeague: getLeague
    };

    ////////////

    function getLeague() {
      return $http.get(appConfig.serverHostName + '/league')
        .then(function(response) {
          return response.data;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.", response);
        });
    }
  }

})();
