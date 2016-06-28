(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterHomeCtrl', RegisterHomeCtrl);

  RegisterHomeCtrl.$inject = ['$http', '$state', '$window', '$q', 'appConfig', 'registerService'];

  //////////////

  function RegisterHomeCtrl($http, $state, $window, $q, appConfig, registerService) {
    var vm = this;

    vm.isUserLoggedIn = isUserLoggedIn();
    vm.facebookLogin = facebookLogin;

    function isUserLoggedIn() {
      return !!$window.localStorage.getItem('authToken');
    }

    function facebookLogin() {
      registerService.facebookLogin()
        .then(_resolve)
        .catch(_reject);

      function _resolve(userData) {
        var accessToken = userData.authResponse.accessToken;

        // call the login WS endpoint to get a perm user token.
        $http.post(appConfig.serverHostName + '/login', {facebookAccessToken: accessToken})
          .then(function (response) {
            $window.localStorage.authToken = response.data.authToken;

            var leagues = response.data.leagues;
            if (leagues && leagues.length > 0) {
              $state.go('tab.home');
            } else {
              $state.go('register');
            }

          }, function (response) {
            console.log("An error occurred logging in.");
          });
      }

      function _reject(error) {
        console.log("An error occurred connecting to facebook API.", error);
      }
    }
  }

})();
