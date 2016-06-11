(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthLoginCtrl', AuthLoginCtrl);

  AuthLoginCtrl.$inject = ['$http', '$state', '$window', 'appConfig'];

  //////////////

  function AuthLoginCtrl($http, $state, $window, appConfig) {
    var vm = this;

    vm.facebookLogin = facebookLogin;

    function facebookLogin() {
      facebookConnectPlugin.login(['email', 'public_profile'], function (userData) {

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

      }, function (error) {
        console.log("An error occurred connecting to facebook API.", error);
      });
    }
  }

})();
