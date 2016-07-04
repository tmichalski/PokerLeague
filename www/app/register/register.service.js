(function () {
  'use strict';

  angular
    .module('app.register')
    .factory('registerService', RegisterService);

  RegisterService.$inject = ['$q', '$http', '$window', 'appConfig'];

  function RegisterService($q, $http, $window, appConfig) {

    return {
      join: join,
      leave: leave,
      create: create,
      loginWithFacebook: loginWithFacebook
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
        .then(function (response) {
          return response.data;
        }, function (response) {
          console.log("An error occurred while requesting to leave a league.", response);
        });
    }

    function loginWithFacebook() {
      return _facebookLogin()
        .then(_appLogin)
        .then(_saveUserToken)
        .then(_getUserLeagues);

      function _facebookLogin() {
        return $q(function(resolve, reject) {
          facebookConnectPlugin.login(['email', 'public_profile'], resolve, reject);
        });
      }

      function _appLogin(userData) {
        var accessToken = userData.authResponse.accessToken;
        return $http.post(appConfig.serverHostName + '/login', {facebookAccessToken: accessToken});
      }

      function _saveUserToken(loginResponse) {
        $window.localStorage.authToken = loginResponse.data.authToken;
        return $q.resolve(loginResponse);
      }

      function _getUserLeagues(loginResponse) {
        return loginResponse.data.leagues;
      }
    }

  }

})();
