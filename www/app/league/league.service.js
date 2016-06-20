(function () {
  'use strict';

  angular
    .module('app.league')
    .factory('leagueService', LeagueService);

  LeagueService.$inject = ['$http', 'appConfig'];

  function LeagueService($http, appConfig) {

    return {
      joinLeague: joinLeague,
      leaveLeague: leaveLeague,
      createLeague: createLeague,
      getLeague: getLeague
    };

    ////////////

    function joinLeague(accessCode) {
      if (!accessCode || accessCode.length == 0) return false;

      var data = {accessCode: accessCode};

      return $http.post(appConfig.serverHostName + '/league/join', data)
        .then(function (response) {
          return response.data.isSuccess;
        }, function (response) {
          console.log("An error occurred while requesting to join a league.", response);
        });
    }

    function leaveLeague() {
      return $http.post(appConfig.serverHostName + '/league/leave')
        .then(function (response) {
          return response.data.isSuccess;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.", response);
        });
    }

    function createLeague(name, seasonYear) {
      if (!name || !seasonYear) return false;

      var data = {name: name, seasonYear: seasonYear};

      return $http.post(appConfig.serverHostName + '/league/create', data)
        .then(function(response) {
          return response.data;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.", response);
        });
    }

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
