(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterJoinCtrl', RegisterJoinCtrl);

  RegisterJoinCtrl.$inject = ['$window', 'registerService', 'routeService'];

  //////////////

  function RegisterJoinCtrl($window, registerService, routeService) {
    var vm = this;

    vm.isUserLoggedIn = isUserLoggedIn();
    vm.join = join;
    vm.facebookLogin = facebookLogin;

    function isUserLoggedIn() {
      return !!$window.localStorage.getItem('authToken');
    }

    function join() {
      vm.accessCodeError = false;

      registerService
        .join(vm.accessCode)
        .then(_routeUser);

      function _routeUser(isSuccess) {
        if (isSuccess) {
          routeService.go('tab.league');
        } else {
          vm.accessCodeError = true;
        }
      }
    }

    function facebookLogin() {
      registerService.loginWithFacebook()
        .then(_joinLeague)
        .then(_routeUser);

      function _joinLeague() {
        return registerService.join(vm.accessCode)
      }

      function _routeUser(isSuccess) {
        if (isSuccess) {
          routeService.go('tab.league');
        } else {
          vm.accessCodeError = true;
        }
      }
    }

  }

})();
