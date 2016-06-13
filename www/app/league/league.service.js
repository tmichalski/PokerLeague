(function () {
  'use strict';

  angular
    .module('app.league')
    .factory('leagueService', LeagueService);

  LeagueService.$inject = ['$http', 'appConfig'];

  function LeagueService($http, appConfig) {

    return {
      joinLeague: joinLeague,
      leaveLeague: leaveLeague
    };

    ////////////

    function joinLeague(accessCode) {
      if (!accessCode || accessCode.length == 0) return false;

      var data = {accessCode: accessCode};

      return $http.post(appConfig.serverHostName + '/league/join', data)
        .then(function (response) {
          return response.data.isSuccess;
        }, function (response) {
          console.log("An error occurred while requesting to join a league.");
        });
    }

    function leaveLeague() {
      return $http.post(appConfig.serverHostName + '/league/leave')
        .then(function (response) {
          return response.data.isSuccess;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.");
        });
    }
  }

})();
