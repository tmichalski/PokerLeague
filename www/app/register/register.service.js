(function () {
  'use strict';

  angular
    .module('app.register')
    .factory('registerService', RegisterService);

  RegisterService.$inject = ['$http', 'appConfig'];

  function RegisterService($http, appConfig) {

    return {
      join: join,
      leave: leave,
      create: create
    };

    ////////////

    function join(accessCode) {
      if (!accessCode || accessCode.length == 0) return false;

      var data = {accessCode: accessCode};

      return $http.post(appConfig.serverHostName + '/league/join', data)
        .then(function (response) {
          return response.data.isSuccess;
        }, function (response) {
          console.log("An error occurred while requesting to join a league.", response);
        });
    }

    function leave() {
      return $http.post(appConfig.serverHostName + '/league/leave')
        .then(function (response) {
          return response.data.isSuccess;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.", response);
        });
    }

    function create(name, seasonYear) {
      if (!name || !seasonYear) return false;

      var data = {name: name, seasonYear: seasonYear};

      return $http.post(appConfig.serverHostName + '/league/create', data)
        .then(function(response) {
          return response.data;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.", response);
        });
    }
  }

})();
