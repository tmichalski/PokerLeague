(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterHomeCtrl', RegisterHomeCtrl);

  RegisterHomeCtrl.$inject = ['$window', 'registerService', 'routeService'];

  //////////////

  function RegisterHomeCtrl($window, registerService, routeService) {
    var vm = this;

    vm.isUserLoggedIn = isUserLoggedIn();
    vm.facebookLogin = facebookLogin;

    function isUserLoggedIn() {
      return !!$window.localStorage.getItem('authToken');
    }

    function facebookLogin() {
      registerService.loginWithFacebook()
        .then(function(leagues) {
          if (leagues && leagues.length > 0) {
            routeService.go('tab.league');
          } else {
            routeService.go('register');
          }
        })
    }
  }

})();
