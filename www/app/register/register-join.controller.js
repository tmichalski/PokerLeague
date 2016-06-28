(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterJoinCtrl', RegisterJoinCtrl);

  RegisterJoinCtrl.$inject = ['$state', '$window', 'registerService'];

  //////////////

  function RegisterJoinCtrl($state, $window, registerService) {
    var vm = this;

    vm.isUserLoggedIn = isUserLoggedIn();
    vm.join = join;

    function isUserLoggedIn() {
      return !!$window.localStorage.getItem('authToken');
    }

    function join() {
      vm.accessCodeError = false;
      registerService
        .join(vm.accessCode)
        .then(function (isSuccess) {
          if (isSuccess) {
            $state.go('tab.home');
          } else {
            vm.accessCodeError = true;
          }
        });
    }
  }

})();
