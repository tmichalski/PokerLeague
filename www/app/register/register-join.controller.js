(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterJoinCtrl', RegisterJoinCtrl);

  RegisterJoinCtrl.$inject = ['$state', 'registerService'];

  //////////////

  function RegisterJoinCtrl($state, registerService) {
    var vm = this;

    vm.join = join;

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
