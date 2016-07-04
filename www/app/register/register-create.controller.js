(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterCreateCtrl', RegisterCreateCtrl);

  RegisterCreateCtrl.$inject = ['$state', 'registerService', 'routeService'];

  //////////////

  function RegisterCreateCtrl($state, registerService, routeService) {
    var vm = this;

    vm.seasonYear = getSeasonYear();
    vm.create = create;
    vm.facebookLogin = facebookLogin;

    function getSeasonYear() {
      return moment().year();
    }

    function create() {
      registerService
        .create(vm.name, vm.seasonYear)
        .then(_routeUser);

      function _routeUser(response) {
        if (response.isSuccess) {
          routeService.go('tab.league');
        } else {
          $ionicPopup.alert({
            title: "Error",
            template: "An error occurred while creating the league: " + response.error
          });
        }
      }
    }

    function facebookLogin() {
      registerService.loginWithFacebook()
        .then(_createLeague)
        .then(_routeUser);

      function _createLeague() {
        return registerService.create(vm.name, vm.seasonYear);
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
