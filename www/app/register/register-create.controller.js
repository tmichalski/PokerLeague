(function () {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterCreateCtrl', RegisterCreateCtrl);

  RegisterCreateCtrl.$inject = ['$state', 'registerService'];

  //////////////

  function RegisterCreateCtrl($state, registerService) {
    var vm = this;

    vm.create = create;

    function create() {
      registerService
        .create(vm.name, vm.seasonYear)
        .then(function (response) {
          if (response.isSuccess) {
            $state.go('tab.league');
          } else {
            alert("An error occurred: " + response.error);
          }
        });
    }
  }

})();
